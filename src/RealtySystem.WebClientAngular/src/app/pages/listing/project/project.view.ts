import { PlusIcon, SearchIcon } from 'primeng/icons';
import { Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { Table, TableLazyLoadEvent, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { Project, ProjectService } from '../../service/listing/project.service';
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
import { CommunityService } from '../../service/listing/community.service';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { RouterModule } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';
import { forkJoin } from 'rxjs';
import { HttpParams } from '@angular/common/http';

interface Column {
    field: string;
    header: string;
    customExportHeader?: string;
}

@Component({
    selector: 'project-view',
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
        AutoComplete,
        PlusIcon,
        RouterModule,
        SearchIcon,
        SkeletonModule
    ],
    template: `
        <p-toolbar styleClass="mb-6">
            <ng-template #start>
                <!-- <p-button label="New" icon="pi pi-plus" severity="secondary" class="mr-2" (onClick)="openNew()"/> -->
                <a routerLink="/realty/listing/project/add" pButton class="mr-2" severity="secondary">
                    <PlusIcon pButtonIcon />
                    <span pButtonLabel>New</span>
                </a>
                <p-button severity="secondary" label="Delete" icon="pi pi-trash" outlined (onClick)="deleteSelectedRecords()" [disabled]="!selectedRecords || !selectedRecords.length" />
            </ng-template>

            <ng-template #end>
                <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" [disabled]="true" />
            </ng-template>
        </p-toolbar>

        <p-table
            #dt
            dataKey="id"
            [value]="records()"
            [globalFilterFields]="['name', 'description', 'community.name']"
            [tableStyle]="{ 'min-width': '75rem' }"
            [(selection)]="selectedRecords"
            [rowHover]="true"
            [paginator]="true"
            (onPage)="onPageUpdate($event)"
            [rows]="10"
            [rowsPerPageOptions]="[10, 20, 50]"
            (sortFunction)="onSortChange($event)"
            [customSort]="true"
        >
            <ng-template #caption>
                <div class="flex items-center justify-between">
                    <h5 class="m-0">Projects</h5>
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
                    <th style="min-width: 8rem">
                        <div class="flex justify-between items-center">
                            Description
                            <p-columnFilter type="text" field="description" display="menu" placeholder="Search by description"></p-columnFilter>
                        </div>
                    </th>
                    <th pSortableColumn="community.name" style="min-width: 12rem">
                        <div class="flex justify-between items-center pr-4">
                            Community Name
                            <div>
                                <p-sortIcon field="community.name" />
                                <p-columnFilter type="text" field="community.name" display="menu" placeholder="Search by community"></p-columnFilter>
                            </div>
                        </div>
                    </th>
                    <th style="min-width: 12rem"></th>
                </tr>
            </ng-template>
            <ng-template #body let-record>
                <tr style="height: 46px">
                    <td style="width: 3rem">
                        <p-tableCheckbox [value]="record" />
                    </td>
                    <td style="min-width: 16rem">{{ record.name }}</td>
                    <td>{{ record.description }}</td>
                    <td>{{ record.community?.name }}</td>
                    <td>
                        <div class="flex flex-wrap justify-end mr-4">
                            <a [routerLink]="['/realty/listing/project/details/', record.id]" pButton class="mr-2" [rounded]="true" [outlined]="true">
                                <SearchIcon pButtonIcon />
                            </a>
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [outlined]="true" (click)="deleteRecord(record)" />
                        </div>
                    </td>
                </tr>
            </ng-template>
            <ng-template #loadingbody>
                <tr style="height:46px">
                    <td style="width: 3rem">
                        <p-skeleton [ngStyle]="{ width: '60%' }" />
                    </td>
                    <td style="min-width: 16rem">
                        <p-skeleton [ngStyle]="{ width: '60%' }" />
                    </td>
                    <td>
                        <p-skeleton [ngStyle]="{ width: '60%' }" />
                    </td>
                    <td>
                        <p-skeleton [ngStyle]="{ width: '60%' }" />
                    </td>
                    <td>
                        <p-skeleton [ngStyle]="{ width: '60%' }" />
                    </td>
                </tr>
            </ng-template>
        </p-table>

        <p-toast />
        <p-confirmdialog [style]="{ width: '450px' }" />
    `,
    providers: [MessageService, ConfirmationService, ProjectService, CountryService, CommunityService]
})
export class ProjectView implements OnInit {
    recordDialog: boolean = false;

    records = signal<Project[]>([]);

    record!: Project;

    params: HttpParams = new HttpParams();

    selectedRecords!: Project[] | null;

    submitted: boolean = false;

    @ViewChild('dt') dt!: Table;

    cols!: Column[];

    @ViewChild('filter') filter!: ElementRef;

    autoFilteredValue: any[] = [];

    constructor(
        private projectService: ProjectService,
        private communityService: CommunityService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {}

    exportCSV() {
        this.dt.exportCSV();
    }

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.params = this.params.set('_expand', 'community');
        this.params = this.params.set('_page', 1);
        this.params = this.params.set('_limit', 10);

        this.projectService.getProjects(this.params).subscribe({
            next: (response) => {
                const length = parseInt(response.headers.get('x-total-count') ?? '0');
                const array: Project[] = Array.from({ length: length });
                Array.prototype.splice.apply(array, [0, 10, ...(response.body ?? [])]);
                this.records.set(array);
            }
        });
    }

    onPageUpdate(event: any) {
        const page = (event.first || 0) / (event.rows || 10) + 1;

        this.params = this.params.set('_expand', 'community');
        this.params = this.params.set('_page', page);
        this.params = this.params.set('_limit', event.rows);

        this.projectService.getProjects(this.params).subscribe({
            next: (response) => {
                const array = this.records();
                console.log(response.body);

                Array.prototype.splice.apply(array, [event.first ?? 0, event.rows ?? 0, ...(response.body ?? [])]);
                this.records.set(array);
            }
        });
    }

    onSortChange(event: any) {
        this.params = this.params.set('_sort', event.field);
        this.params = this.params.set('_order', event.order === 1 ? 'asc' : 'desc');
        this.params = this.params.set('_page', 1);

        this.projectService.getProjects(this.params).subscribe({
            next: (response) => {
                const array = this.records();

                Array.prototype.splice.apply(array, [this.dt.first ?? 0, this.dt.rows ?? 0, ...(response.body ?? [])]);
                this.records.set(array);
            }
        });
    }

    onUpdateRecords() {}

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    deleteSelectedRecords() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected records?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.records.set(this.records().filter((val) => !this.selectedRecords?.includes(val)));
                this.selectedRecords = null;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Records Deleted',
                    life: 3000
                });
            }
        });
    }

    hideDialog() {
        this.recordDialog = false;
        this.submitted = false;
    }

    deleteRecord(record: Project) {
        if (!record.id) return;
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + record.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                if (!record.id) return;
                this.projectService.deleteProject(record.id).subscribe({
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

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.records().length; i++) {
            if (this.records()[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    saveRecord() {
        this.submitted = true;
        let _records = this.records();
        if (this.record.name?.trim()) {
            if (this.record.id) {
                this.projectService.putProject(this.record.id, this.record).subscribe({
                    next: () => {
                        if (!this.record.id) return;
                        _records[this.findIndexById(this.record.id)] = this.record;
                        this.records.set([..._records]);
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Successful',
                            detail: 'Product Updated',
                            life: 3000
                        });
                    },
                    error: () => {
                        this.errorMessage();
                    }
                });
            } else {
                this.record.id = this.createId();

                this.projectService.postProject(this.record).subscribe({
                    next: () => {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Successful',
                            detail: 'Product Created',
                            life: 3000
                        });
                        this.records.set([..._records, this.record]);
                    },
                    error: () => {
                        this.errorMessage();
                    }
                });
            }

            this.recordDialog = false;
            this.record = {};
        }
    }

    clear(table: Table) {
        table.clear();
        if (this.filter) this.filter.nativeElement.value = '';
    }

    errorMessage() {
        this.messageService.add({
            severity: 'danger',
            summary: 'Error',
            detail: 'Unsuccessful',
            life: 3000
        });
    }
}
