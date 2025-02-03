import { Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { Project, ProjectService } from '../../service/project.service';
import { TextareaModule } from 'primeng/textarea';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { TagModule } from 'primeng/tag';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CountryService } from '../../service/country.service';
import { CommunityService } from '../../service/community.service';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { Property, PropertyService } from '../../service/property.service';
import { RouterModule } from '@angular/router';
import { PencilIcon, PlusIcon, SearchIcon, WindowMaximizeIcon } from 'primeng/icons';
import { PrefixSuffixPipe } from '../../../utils/pipe/prefixsuffix.pipe';
import { OptionService } from '../../service/option.service';

interface Column {
    field: string;
    header: string;
    customExportHeader?: string;
}

interface ExportColumn {
    title: string;
    dataKey: string;
}

@Component({
    selector: 'property-view',
    imports: [
        CommonModule,
        TableModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        TextareaModule,
        SelectModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        TagModule,
        InputIconModule,
        IconFieldModule,
        ConfirmDialogModule,
        RouterModule,
        PlusIcon,
        SearchIcon,
        PrefixSuffixPipe
    ],
    template: `
        <p-toolbar styleClass="mb-6">
            <ng-template #start>
                <a routerLink="/realty/listing/property/add" pButton class="mr-2" severity="secondary">
                    <PlusIcon pButtonIcon />
                    <span pButtonLabel>New</span>
                </a>
            </ng-template>

            <ng-template #end>
                <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" [disabled]="true" />
            </ng-template>
        </p-toolbar>

        <p-table
            #dt
            [value]="records()"
            [rows]="10"
            [paginator]="true"
            [globalFilterFields]="['name', 'description', 'project.name']"
            [tableStyle]="{ 'min-width': '75rem' }"
            [(selection)]="selectedRecords"
            [rowHover]="true"
            dataKey="id"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} records"
            [showCurrentPageReport]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
        >
            <ng-template #caption>
                <div class="flex items-center justify-between">
                    <h5 class="m-0">Properties</h5>
                    <div class="flex gap-2">
                        <p-iconfield>
                            <p-inputicon styleClass="pi pi-search" />
                            <input pInputText type="text" (input)="onGlobalFilter(dt, $event)" placeholder="Search..." />
                        </p-iconfield>
                        <p-button label="Clear" icon="pi pi-filter-slash" severity="secondary" class="p-button-outlined mb-2" (onClick)="clear(dt)" />
                    </div>
                </div>
            </ng-template>
            <ng-template #header>
                <tr>
                    <th style="width: 3rem">
                        <p-tableHeaderCheckbox />
                    </th>
                    <th pSortableColumn="name" style="min-width:16rem">
                        <div class="flex justify-between items-center pr-4">
                            Name
                            <div>
                                <p-sortIcon field="name" />
                                <p-columnFilter type="text" field="name" display="menu" placeholder="Search by name"></p-columnFilter>
                            </div>
                        </div>
                    </th>
                    <th pSortableColumn="type" style="min-width:12rem">
                        <div class="flex justify-between items-center pr-4">
                            Type
                            <div>
                                <p-sortIcon field="type" />
                                <p-columnFilter field="type" matchMode="equals" display="menu">
                                    <ng-template #filter let-value let-filter="filterCallback">
                                        <p-select [ngModel]="value" [options]="types" (onChange)="filter($event.value)" placeholder="Any" [style]="{ 'min-width': '12rem' }">
                                            <ng-template let-option #item>
                                                <span [class]="'customer-badge status-' + option.value">{{ option.label }}</span>
                                            </ng-template>
                                        </p-select>
                                    </ng-template>
                                </p-columnFilter>
                            </div>
                        </div>
                    </th>

                    <th pSortableColumn="project" style="min-width: 12rem">
                        <div class="flex justify-between items-center pr-4">
                            Project
                            <div>
                                <p-sortIcon field="project" />
                                <p-columnFilter type="text" field="project.name" display="menu" placeholder="Search by project"></p-columnFilter>
                            </div>
                        </div>
                    </th>
                    <th pSortableColumn="price" style="min-width: 12rem">
                        <div class="flex justify-between items-center pr-4">
                            Price
                            <div>
                                <p-sortIcon field="price" />
                                <p-columnFilter type="numeric" field="price" display="menu"></p-columnFilter>
                            </div>
                        </div>
                    </th>
                    <th pSortableColumn="totalArea" style="min-width: 12rem">
                        <div class="flex justify-between items-center pr-4">
                            Total Area
                            <div>
                                <p-sortIcon field="totalArea" />
                                <p-columnFilter type="numeric" field="totalArea" display="menu"></p-columnFilter>
                            </div>
                        </div>
                    </th>
                    <th pSortableColumn="rooms" style="min-width: 12rem">
                        <div class="flex justify-between items-center pr-4">
                            Rooms
                            <div>
                                <p-sortIcon field="rooms" />
                                <p-columnFilter type="numeric" field="rooms" display="menu"></p-columnFilter>
                            </div>
                        </div>
                    </th>
                    <th style="min-width: 12rem"></th>
                </tr>
            </ng-template>
            <ng-template #body let-record>
                <tr>
                    <td style="width: 3rem">
                        <p-tableCheckbox [value]="record" />
                    </td>
                    <td style="min-width: 16rem">{{ record.name }}</td>
                    <td style="min-width: 8rem">{{ record.type }}</td>
                    <td>{{ record.project?.name }}</td>
                    <td>{{ record.price | number: '1.0-0' | prefixSuffix: 'AED' }}</td>
                    <td>{{ record.totalArea | number: '1.0-0' | prefixSuffix: '' : 'ft&sup2;' }}</td>
                    <td>{{ record.rooms }}</td>

                    <td>
                        <div class="flex flex-wrap justify-end mr-4">
                            <!--                            <p-button icon="pi pi-pencil" class="mr-2" [rounded]="true" [outlined]="true"-->
                            <!--                                      (click)="editRecord(record)"/>-->
                            <a [routerLink]="['/realty/listing/property/details/', record.id]" pButton class="mr-2" [rounded]="true" [outlined]="true">
                                <SearchIcon pButtonIcon />
                            </a>
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [outlined]="true" (click)="deleteRecord(record)" />
                        </div>
                    </td>
                </tr>
            </ng-template>
        </p-table>

        <p-toast />
        <p-confirmdialog [style]="{ width: '450px' }" />
    `,
    providers: [MessageService, ConfirmationService, ProjectService, CountryService, PropertyService, OptionService]
})
export class PropertyView implements OnInit {
    records = signal<Property[]>([]);

    record!: Property;

    selectedRecords!: Property[] | null;

    @ViewChild('dt') dt!: Table;

    @ViewChild('filter') filter!: ElementRef;

    types: any[] = [];

    constructor(
        private projectService: ProjectService,
        private optionService: OptionService,
        private propertyService: PropertyService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {}

    exportCSV() {
        this.dt.exportCSV();
    }

    ngOnInit() {
        this.loadData();

        this.optionService.getPropertyTypes().subscribe({
            next: (result) => {
                this.types = result;
            }
        });
    }

    loadData() {
        this.propertyService.getPropertiesWithProject().subscribe({
            next: (data) => {
                this.records.set(data);
            }
        });
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    deleteRecord(record: Project) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + record.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                if (!record.id) return;

                this.propertyService.deleteProperty(record.id).subscribe({
                    next: () => {
                        this.records.set(this.records().filter((val) => val.id !== record.id));
                        this.record = {};
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Successful',
                            detail: 'Record Deleted',
                            life: 3000
                        });
                    },
                    error: () => {
                        this.errorMessage();
                    }
                });
            }
        });
    }

    errorMessage() {
        this.messageService.add({
            severity: 'danger',
            summary: 'Error',
            detail: 'Unsuccessful',
            life: 3000
        });
    }

    clear(table: Table) {
        table.clear();
        if (this.filter) this.filter.nativeElement.value = '';
    }
}
