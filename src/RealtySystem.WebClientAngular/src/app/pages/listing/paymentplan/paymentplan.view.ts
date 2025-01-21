import {Component, ElementRef, signal, ViewChild} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";
import {Table, TableModule} from "primeng/table";
import {CommonModule} from "@angular/common";
import {IconFieldModule} from "primeng/iconfield";
import {InputIconModule} from "primeng/inputicon";
import {InputTextModule} from "primeng/inputtext";
import {DialogModule} from "primeng/dialog";
import {FormsModule} from "@angular/forms";
import {TextareaModule} from "primeng/textarea";
import {RippleModule} from "primeng/ripple";
import {ToastModule} from "primeng/toast";
import {RatingModule} from "primeng/rating";
import {SelectModule} from "primeng/select";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputNumberModule} from "primeng/inputnumber";
import {TagModule} from "primeng/tag";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {CountryService} from "../../service/country.service";
import {CommunityService} from "../../service/community.service";
import {AutoComplete, AutoCompleteCompleteEvent} from "primeng/autocomplete";
import {PaymentPlan, PaymentplanService} from "../../service/paymentplan.service";
import {PencilIcon, PlusIcon} from "primeng/icons";
import {RouterLink} from "@angular/router";


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
    selector: 'paymentplan-view',
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
        PlusIcon,
        RouterLink,
        PencilIcon,
    ],
    template: `
        <p-toolbar styleClass="mb-6">
            <ng-template #start>
                <!--                <p-button label="New" icon="pi pi-plus" severity="secondary" class="mr-2" (onClick)="openNew()"/>-->
                <a routerLink="/realty/listing/payment-plan/add" pButton class="mr-2" severity="secondary">
                    <PlusIcon pButtonIcon/>
                    <span pButtonLabel>New</span>
                </a>
                <p-button severity="secondary" label="Delete" icon="pi pi-trash" outlined
                          (onClick)="deleteSelectedRecords()"
                          [disabled]="!selectedRecords || !selectedRecords.length"/>
            </ng-template>

            <ng-template #end>
                <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()"
                          [disabled]="true"/>
            </ng-template>
        </p-toolbar>

        <p-table
            #dt
            [value]="records()"
            [rows]="10"
            [columns]="cols"
            [paginator]="true"
            [globalFilterFields]="['name', 'description', 'community.name']"
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
                    <h5 class="m-0">Payment Plans</h5>
                    <div class="flex gap-2">
                        <p-iconfield>
                            <p-inputicon styleClass="pi pi-search"/>
                            <input pInputText type="text" (input)="onGlobalFilter(dt, $event)" placeholder="Search..."/>
                        </p-iconfield>
                        <p-button label="Clear" icon="pi pi-filter-slash" severity="secondary"
                                  class="p-button-outlined mb-2" (onClick)="clear(dt)"/>
                    </div>
                </div>
            </ng-template>
            <ng-template #header>
                <tr>
                    <th style="width: 3rem">
                        <p-tableHeaderCheckbox/>
                    </th>
                    <th pSortableColumn="name" style="min-width:12rem">
                        <div class="flex justify-between items-center">
                            Name
                            <div>
                                <p-sortIcon field="name"/>
                                <p-columnFilter type="text" field="name" display="menu"
                                                placeholder="Search by name"></p-columnFilter>
                            </div>
                        </div>
                    </th>
                    <th style="min-width: 8rem">
                        <div class="flex justify-between items-center">
                            Description
                            <p-columnFilter type="text" field="description" display="menu"
                                            placeholder="Search by description"></p-columnFilter>
                        </div>
                    </th>
                    <th style="min-width: 12rem"></th>
                </tr>
            </ng-template>
            <ng-template #body let-record>
                <tr>
                    <td style="width: 3rem">
                        <p-tableCheckbox [value]="record"/>
                    </td>
                    <td style="min-width: 12rem">{{ record.name }}</td>
                    <td>{{ record.description }}</td>
                    <td>
                        <div class="flex flex-wrap justify-end mr-4">
                            <a [routerLink]="['/realty/listing/payment-plan/details/', record.id]" pButton class="mr-2" [rounded]="true" [outlined]="true">
                                <PencilIcon pButtonIcon/>
                            </a>
<!--                            <p-button icon="pi pi-pencil" class="mr-2" [rounded]="true" [outlined]="true"-->
<!--                                      (click)="editRecord(record)"/>-->
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [outlined]="true"
                                      (click)="deleteRecord(record)"/>
                        </div>
                    </td>
                </tr>
            </ng-template>
        </p-table>

        <p-dialog [(visible)]="recordDialog" [style]="{ width: '450px' }" header="Payment Plan Details" [modal]="true">
            <ng-template #content>
                <div class="flex flex-col gap-6">
                    <div>
                        <label for="name" class="block font-bold mb-3">Name</label>
                        <input type="text" pInputText id="name" [(ngModel)]="record.name" required autofocus fluid/>
                        <small class="text-red-500" *ngIf="submitted && !record.name">Name is required.</small>
                    </div>
                    <div>
                        <label for="description" class="block font-bold mb-3">Description</label>
                        <textarea id="description" pTextarea [(ngModel)]="record.description" required rows="3"
                                  cols="20" fluid></textarea>
                    </div>
                </div>
            </ng-template>

            <ng-template #footer>
                <p-button label="Cancel" icon="pi pi-times" text (click)="hideDialog()"/>
                <p-button label="Save" icon="pi pi-check" (click)="saveRecord()"/>
            </ng-template>
        </p-dialog>

        <p-confirmdialog [style]="{ width: '450px' }"/>
    `,
    providers: [MessageService, ConfirmationService, CountryService, CommunityService, PaymentplanService]
})
export class PaymentplanView {
    recordDialog: boolean = false;

    records = signal<PaymentPlan[]>([]);

    record!: PaymentPlan;

    selectedRecords!: PaymentPlan[] | null;

    submitted: boolean = false;

    @ViewChild('dt') dt!: Table;

    exportColumns!: ExportColumn[];

    cols!: Column[];

    @ViewChild('filter') filter!: ElementRef;

    autoFilteredValue: any[] = [];

    constructor(
        private communityService: CommunityService,
        private paymentplanService: PaymentplanService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {
    }

    exportCSV() {
        this.dt.exportCSV();
    }

    ngOnInit() {
        this.loadDemoData();
    }

    loadDemoData() {
        this.paymentplanService.getPaymentPlans().then((data) => {
            this.records.set(data);
        });

        this.cols = [
            {field: 'code', header: 'Code', customExportHeader: 'Product Code'},
            {field: 'name', header: 'Name'},
            {field: 'image', header: 'Image'},
            {field: 'price', header: 'Price'},
            {field: 'category', header: 'Category'}
        ];

        this.exportColumns = this.cols.map((col) => ({title: col.header, dataKey: col.field}));
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    openNew() {
        this.record = {};
        this.submitted = false;
        this.recordDialog = true;
    }

    editRecord(record: PaymentPlan) {
        this.record = {...record};
        this.recordDialog = true;
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

    deleteRecord(record: PaymentPlan) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + record.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.records.set(this.records().filter((val) => val.id !== record.id));
                this.record = {};
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Record Deleted',
                    life: 3000
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
                _records[this.findIndexById(this.record.id)] = this.record;
                this.records.set([..._records]);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Product Updated',
                    life: 3000
                });
            } else {
                this.record.id = this.createId();
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Product Created',
                    life: 3000
                });
                this.records.set([..._records, this.record]);
            }

            this.recordDialog = false;
            this.record = {};
        }
    }

    clear(table: Table) {
        table.clear();
        if (this.filter) this.filter.nativeElement.value = '';
    }

    filterCommunity(event: AutoCompleteCompleteEvent) {
        const query = event.query;
        this.communityService.getCommunitiesByName(query)
            .then(data => this.autoFilteredValue = data);
    }
}
