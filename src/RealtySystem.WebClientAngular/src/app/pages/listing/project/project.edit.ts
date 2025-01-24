import { PaymentPlanPicklist } from './../../service/paymentplan.service';
import { Component, ElementRef, inject, ModelSignal, signal, ViewChild } from '@angular/core';
import { Project, ProjectService } from '../../service/project.service';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { CommonModule, Location, NgIf } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { FieldsetModule } from 'primeng/fieldset';
import { FluidModule } from 'primeng/fluid';
import { InputText, InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommunityService } from '../../service/community.service';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { Textarea } from 'primeng/textarea';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Property, PropertyService } from '../../service/property.service';
import { Table, TableModule } from 'primeng/table';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { PrefixSuffixPipe } from '../../../utils/pipe/prefixsuffix.pipe';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { Select, SelectModule } from 'primeng/select';
import { SearchIcon } from 'primeng/icons';
import { PickListModule } from 'primeng/picklist';
import { PaymentplanService } from '../../service/paymentplan.service';

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
    selector: 'project-edit',
    imports: [
        ToolbarModule,
        ButtonModule,
        ButtonGroupModule,
        TabsModule,
        FieldsetModule,
        FluidModule,
        InputText,
        AutoCompleteModule,
        Textarea,
        ReactiveFormsModule,
        NgIf,
        TableModule,
        IconField,
        InputIcon,
        PrefixSuffixPipe,
        CommonModule,
        RouterModule,
        ConfirmDialog,
        SelectModule,
        FormsModule,
        SearchIcon,
        PickListModule
    ],
    styles: `
        .parent-container .button-container {
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .parent-container:hover .button-container {
            opacity: 1;
        }
    `,
    template: `
        <p-toolbar styleClass="mb-6">
            <ng-template #start>
                <div>
                    <p-button icon="pi pi-arrow-left" [rounded]="true" variant="outlined" class="mr-2" (onClick)="goBack()"></p-button>
                </div>
                <div class="flex flex-col pl-2">
                    <div class="text-sm text-surface-500 dark:text-surface-400">Project</div>
                    <div>{{ record().name }}</div>
                </div>
            </ng-template>

            <ng-template #end>
                <div></div>
            </ng-template>
        </p-toolbar>

        <div class="mb-6">
            <p-tabs [value]="tabValue" scrollable (valueChange)="eventTabChange($event)">
                <p-tablist>
                    <p-tab [value]="0">Details</p-tab>
                    <p-tab [value]="1">Properties</p-tab>
                    <p-tab [value]="2">Payment Plans</p-tab>
                    <p-tab [value]="3" disabled>Marketing and Media</p-tab>
                </p-tablist>
                <p-tabpanels>
                    <p-tabpanel [value]="0">
                        <form action="" [formGroup]="recordForm" (ngSubmit)="saveRecord()">
                            <div class="mb-6">
                                <p-fieldset legend="Project Details" [toggleable]="true">
                                    <p-fluid>
                                        <div class="mb-4 mt-4 flex flex-col gap-6 w-full ">
                                            <div class="flex flex-col md:flex-row gap-6">
                                                <div class="flex flex-wrap gap-2 w-full">
                                                    <label class="font-bold" for="name">Name</label>
                                                    <input *ngIf="editMode" pInputText id="name" type="text" formControlName="name" />
                                                    <small class="text-red-500" *ngIf="recordFormControl['name'].invalid && (recordFormControl['name'].dirty || recordFormControl['name'].touched)">Name is required.</small>

                                                    <div class=" border-b w-full pl-2.5 pr-2.5 flex justify-between items-center parent-container" *ngIf="!editMode">
                                                        <div>
                                                            {{ recordFormValue.name }}
                                                        </div>
                                                        <div class="button-container">
                                                            <p-button icon="pi pi-pencil" [text]="true" size="small" [rounded]="true" severity="secondary" (onClick)="editRecord()"></p-button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex flex-wrap flex-col gap-2 w-full">
                                                    <label class="font-bold" for="community">Community</label>
                                                    <p-autocomplete
                                                        *ngIf="editMode"
                                                        formControlName="community"
                                                        inputId="community"
                                                        [suggestions]="autoFilteredValue"
                                                        optionLabel="name"
                                                        placeholder="Search"
                                                        (completeMethod)="filterCommunity($event)"
                                                    ></p-autocomplete>

                                                    <div class=" border-b w-full pl-2.5 pr-2.5 flex justify-between items-center parent-container" *ngIf="!editMode">
                                                        <div>
                                                            {{ recordFormValue.community?.name }}
                                                        </div>
                                                        <div class="button-container">
                                                            <p-button icon="pi pi-pencil" [text]="true" size="small" [rounded]="true" severity="secondary" (onClick)="editRecord()"></p-button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-col md:flex-row gap-6">
                                                <div class="flex flex-wrap flex-col gap-2 w-full">
                                                    <label class="font-bold" for="description">Description</label>
                                                    <textarea *ngIf="editMode" formControlName="description" pTextarea id="description" rows="4"></textarea>

                                                    <div class=" border-b w-full pl-2.5 pr-2.5 flex justify-between items-center parent-container" *ngIf="!editMode">
                                                        <div>
                                                            {{ recordFormValue.description }}
                                                        </div>
                                                        <div class="button-container">
                                                            <p-button icon="pi pi-pencil" [text]="true" size="small" [rounded]="true" severity="secondary" (onClick)="editRecord()"></p-button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </p-fluid>
                                </p-fieldset>
                            </div>
                            <div class="card text-center" *ngIf="editMode">
                                <p-button icon="pi pi-times" label="Cancel" [text]="true" severity="danger" class="mr-2" (onClick)="cancelEdit()"></p-button>
                                <p-button icon="pi pi-pencil" label="Save" [outlined]="true" type="submit"></p-button>
                            </div>
                        </form>
                    </p-tabpanel>
                    <p-tabpanel [value]="1">
                        <p-table
                            #dt
                            [value]="properties()"
                            [rows]="10"
                            [columns]="cols"
                            [paginator]="true"
                            [globalFilterFields]="['name', 'description', 'project.name']"
                            [tableStyle]="{ 'min-width': '75rem' }"
                            [(selection)]="selectedProperties"
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
                                    <td style="min-width: 16rem">
                                        <a [routerLink]="['/realty/listing/property/details/', record.id]" p-button variant="text">
                                            {{ record.name }}
                                        </a>
                                    </td>
                                    <td style="min-width: 8rem">{{ record.type }}</td>
                                    <td>{{ record.price | number: '1.0-0' | prefixSuffix: 'AED' }}</td>
                                    <td>{{ record.totalArea | number: '1.0-0' | prefixSuffix: '' : 'ft&sup2;' }}</td>
                                    <td>{{ record.rooms }}</td>

                                    <td>
                                        <div class="flex flex-wrap justify-end mr-4">
                                            <a [routerLink]="['/realty/listing/property/details/', record.id]" pButton class="mr-2" [rounded]="true" [outlined]="true">
                                                <SearchIcon pButtonIcon />
                                            </a>
                                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [outlined]="true" (click)="deleteProperty(record)" />
                                        </div>
                                    </td>
                                </tr>
                            </ng-template>
                        </p-table>
                    </p-tabpanel>
                    <p-tabpanel [value]="2">
                        <p-fieldset legend="Payment Plan List" [toggleable]="true">
                            <div *ngIf="editPaymentPlan">
                                <div class="mb-4">
                                    <p-pick-list [source]="sourcePaymentPlans" [target]="targetPaymentPlans" breakpoint="1400px">
                                        <ng-template #sourceHeader>
                                            <div class="font-bold text-l text-primary">Available</div>
                                        </ng-template>
                                        <ng-template #targetHeader>
                                            <div class="font-bold text-l text-primary">Selected</div>
                                        </ng-template>
                                        <ng-template #item let-item>
                                            {{ item.name }}
                                        </ng-template>
                                    </p-pick-list>
                                </div>
                                <div class="text-center">
                                    <p-button label="Cancel" [text]="true" icon="pi pi-times" (onClick)="cancelEditPaymentPlan()" severity="danger"></p-button>
                                    <p-button label="Save" [outlined]="true" (onClick)="savePaymentPlan()"></p-button>
                                </div>
                            </div>
                            <div *ngIf="!editPaymentPlan">
                                <p-table [value]="targetPaymentPlans">
                                    <ng-template #header>
                                        <tr>
                                            <th>
                                                <div class="flex justify-between items-center">
                                                    <div>List</div>
                                                    <div>
                                                        <p-button label="Edit" size="small" severity="secondary" icon="pi pi-pencil" (onClick)="editPaymentPlanRecord()"></p-button>
                                                    </div>
                                                </div>
                                            </th>
                                        </tr>
                                    </ng-template>
                                    <ng-template #body let-record>
                                        <tr>
                                            <td>
                                                <a [routerLink]="['/realty/listing/payment-plan/details/', record.id]" class="mr-2" pButton text="true">
                                                    {{ record.name }}
                                                </a>
                                            </td>
                                        </tr>
                                    </ng-template>
                                </p-table>
                            </div>
                        </p-fieldset>
                    </p-tabpanel>
                    <p-tabpanel [value]="3"> </p-tabpanel>
                </p-tabpanels>
            </p-tabs>
        </div>

        <p-confirmdialog [style]="{ width: '450px' }" />
    `,
    providers: [CommunityService, ProjectService, ConfirmationService, MessageService, PaymentplanService]
})
export class ProjectEdit {
    record = signal<Project>({});

    recordId!: string | null;

    recordForm: FormGroup;

    autoFilteredValue: any[] = [];

    editMode: boolean = false;

    editPaymentPlan: boolean = false;

    submitted: boolean = false;

    properties = signal<Property[]>([]);

    selectedProperties!: Property[] | null;

    cols!: Column[];

    @ViewChild('filter') filter!: ElementRef;

    types: any[] = [];

    tabValue: number = 0;

    queryParams: any;

    sourcePaymentPlans: any[] = [];

    targetPaymentPlans: any[] = [];

    paymentPlanPicklist!: PaymentPlanPicklist;

    private readonly route = inject(ActivatedRoute);

    constructor(
        private communityService: CommunityService,
        private confirmationService: ConfirmationService,
        private messageService: MessageService,
        private projectService: ProjectService,
        private propertyService: PropertyService,
        private paymentPlanService: PaymentplanService,
        private router: Router,
        private _location: Location,
        private fb: FormBuilder
    ) {
        this.recordForm = this.fb.group({
            id: new FormControl(null),
            name: new FormControl(null, { validators: [Validators.required] }),
            description: new FormControl(null),
            communityId: new FormControl(null),
            community: new FormControl(null)
        });
    }

    ngOnInit() {
        this.recordId = this.route.snapshot.paramMap.get('id');
        if (this.recordId) {
            this.projectService.getProjectById(this.recordId).then((result) => {
                this.record.set(result as Project);

                this.recordForm.patchValue(result as Project);
            });

            this.propertyService.getPropertyByProject(this.recordId).then((data) => {
                this.properties.set(data);
            });
        } else {
            this.editMode = true;
            this.editPaymentPlan = true;
        }

        this.paymentPlanService.getPaymentPlanByProject(this.recordId).then((result) => {
            this.paymentPlanPicklist = result;
            this.sourcePaymentPlans = [...result.source];
            this.targetPaymentPlans = [...result.target];
        });

        this.route.queryParams.subscribe((params) => {
            this.queryParams = params;

            this.tabValue = Number(this.queryParams['tab'] ?? 0);
        });

        this.types = [
            { label: 'Unit', value: 'Unit' },
            { label: 'Villa', value: 'Villa' },
            { label: 'Plot', value: 'Plot' }
        ];
    }

    get recordFormValue() {
        return this.recordForm.getRawValue();
    }

    get recordFormControl() {
        return this.recordForm.controls;
    }

    goBack() {
        this._location.back();
    }

    filterCommunity(event: AutoCompleteCompleteEvent) {
        const query = event.query;
        this.communityService.getCommunitiesByName(query).then((data) => (this.autoFilteredValue = data));
    }

    saveRecord() {
        this.submitted = true;
        if (this.recordForm.valid) {
            this.editMode = false;
            this.submitted = false;

            alert('Form Submitted succesfully!!!\n Check the values in browser console.');
            console.table(this.recordForm.value);
        }
    }

    editPaymentPlanRecord() {
        this.editPaymentPlan = true;
    }

    cancelEditPaymentPlan() {
        this.editPaymentPlan = false;
        this.sourcePaymentPlans = [...this.paymentPlanPicklist.source];
        this.targetPaymentPlans = [...this.paymentPlanPicklist.target];
    }

    savePaymentPlan() {
        this.paymentPlanPicklist.source = [...this.sourcePaymentPlans];
        this.paymentPlanPicklist.target = [...this.targetPaymentPlans];

        this.editPaymentPlan = false;
    }

    editRecord() {
        this.editMode = true;
    }

    cancelEdit() {
        if (!this.recordId) {
            this.goBack();
            return;
        }

        this.editMode = false;
        this.recordForm.reset(this.record);
        this.submitted = false;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    clear(table: Table) {
        table.clear();
        if (this.filter) this.filter.nativeElement.value = '';
    }

    deleteProperty(record: Project) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + record.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.properties.set(this.properties().filter((val) => val.id !== record.id));
                // this.record = {};
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Record Deleted',
                    life: 3000
                });
            }
        });
    }

    eventTabChange(event: any) {
        this.tabValue = event;

        this.router.navigate([], {
            queryParams: { tab: event },
            queryParamsHandling: 'merge' // Merge with existing query params
        });
    }
}
