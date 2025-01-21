import {Component, inject, signal} from '@angular/core';
import {Toolbar, ToolbarModule} from "primeng/toolbar";
import {Milestone, MilestoneFee, PaymentPlan, PaymentplanService} from "../../service/paymentplan.service";
import {Button, ButtonDirective, ButtonModule} from "primeng/button";
import {CommonModule, CurrencyPipe, Location} from "@angular/common";
import {Rating, RatingModule} from "primeng/rating";
import {Ripple, RippleModule} from "primeng/ripple";
import {TableModule, TableRowCollapseEvent, TableRowExpandEvent, TableRowReorderEvent} from "primeng/table";
import {Tag, TagModule} from "primeng/tag";
import {ConfirmationService, MessageService} from "primeng/api";
import {ButtonGroup, ButtonGroupModule} from "primeng/buttongroup";
import {Dialog} from "primeng/dialog";
import {InputText} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputNumber} from "primeng/inputnumber";
import {Fluid} from "primeng/fluid";
import {Select} from "primeng/select";
import {Textarea} from "primeng/textarea";
import {ProgressBarModule} from "primeng/progressbar";
import {ToastModule} from "primeng/toast";
import {Community} from "../../service/community.service";
import {ConfirmDialog} from "primeng/confirmdialog";
import {ActivatedRoute} from "@angular/router";

interface expandedRows {
    [key: string]: boolean;
}

@Component({
    selector: 'paymentplan-edit',
    imports: [
        ToolbarModule,
        ButtonModule,
        ButtonDirective,
        RatingModule,
        RippleModule,
        TableModule,
        TagModule,
        CommonModule,
        ButtonGroupModule,
        Dialog,
        InputText,
        ReactiveFormsModule,
        FormsModule,
        InputNumber,
        Fluid,
        Select,
        Textarea,
        ProgressBarModule,
        ToastModule,
        ConfirmDialog
    ],
    template: `
        <p-toolbar styleClass="mb-6">
            <ng-template #start>
                <div>
                    <p-button icon="pi pi-arrow-left"
                              [rounded]="true"
                              variant="outlined"
                              class="mr-2"
                              (onClick)="goBack()"></p-button>
                </div>
                <div class="flex flex-col pl-2">
                    <div>
                        Payment Plan
                    </div>
                    <div>
                        Name
                    </div>
                </div>
            </ng-template>

            <ng-template #end>
                <div>
                </div>
            </ng-template>
        </p-toolbar>

        <div class=" mb-6">
            <p-table [value]="milestones()" dataKey="id"
                     [expandedRowKeys]="expandedRows"
                     responsiveLayout="scroll"
                     [reorderableColumns]="true"
                     (onRowReorder)="onRowReorder($event)"
            >
                <ng-template #caption>
                    <div class="flex flex-col gap-2 w-full">
                        <div class="flex items-center justify-between gap-6 w-full">
                            <h5 class="m-0">Milestones</h5>
                            <div>
                                <p-buttonGroup>
                                    <p-button label="New Milestone" severity="secondary"
                                              variant="outlined"
                                              [disabled]="paymentPlanTotalPercent >= 100"
                                              (onClick)="addMilestone()"
                                    ></p-button>
                                    <p-button label="{{ isExpanded ? 'Collapse All' : 'Expand All' }}"
                                              variant="outlined"
                                              severity="secondary"
                                              (onClick)="expandAll()"
                                              icon="pi pi-fw {{ isExpanded ? 'pi-minus' : 'pi-plus' }}"
                                    ></p-button>
                                </p-buttonGroup>
                            </div>
                        </div>
                        <div>
                            <p-progressbar [value]="paymentPlanTotalPercent" [showValue]="true"
                                           [color]="progressColor"></p-progressbar>
                        </div>

                    </div>

                </ng-template>
                <ng-template #header>
                    <tr>
                        <th style="width: 3rem"></th>
                        <th style="width: 3rem"></th>
                        <th>
                            Name
                        </th>
                        <th style="text-align: center">
                            Total Percent
                        </th>
                        <th style="text-align: center">
                            Frequency
                        </th>
                        <th style="text-align: center">
                            Percent Per Frequency
                        </th>
                        <th style="text-align: center">
                            Interval
                        </th>
                        <th>
                            Interval Type
                        </th>
                        <th style="width: 4rem"></th>
                    </tr>
                </ng-template>
                <ng-template #body let-milestone let-expanded="expanded" let-index="rowIndex">
                    <tr [ngStyle]="{'fontWeight': 'bold', 'fontStyle': 'italic'}" [pReorderableRow]="index">
                        <td>
                            <span class="pi pi-bars" pReorderableRowHandle></span>
                        </td>
                        <td>
                            <button type="button" pButton pRipple [pRowToggler]="milestone"
                                    class="p-button-text p-button-rounded p-button-plain"
                                    [icon]="expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'"></button>
                        </td>
                        <td style="min-width: 12rem;">{{ milestone.name }}</td>
                        <td style="min-width: 4rem; text-align: right">{{ milestone.totalPercent | number: '1.2' }}%
                        </td>
                        <td style="min-width: 4rem; text-align: right">{{ milestone.frequency }}</td>
                        <td style="min-width: 4rem; text-align: right">{{ milestone.percentPerFrequency | number: '1.2' }}
                            %
                        </td>
                        <td style="min-width: 8rem; text-align: right">{{ milestone.frequencyInterval }}</td>
                        <td style="min-width: 8rem;">{{ milestone.frequencyIntervalType }}</td>
                        <td>
                            <div class="flex justify-end ">
                                <p-button icon="pi pi-pencil" [rounded]="true" class="mr-2"
                                          [outlined]="true"
                                          (onClick)="editMilestone(milestone)"
                                />
                                <p-button icon="pi pi-trash" severity="danger" [rounded]="true"
                                          [outlined]="true"
                                          (onClick)="deleteMilestone(milestone)"
                                />
                            </div>
                        </td>
                    </tr>
                </ng-template>
                <ng-template #expandedrow let-milestone>
                    <tr style="background-color: transparent">
                        <td colspan="1"></td>

                        <td colspan="8">
                            <div class="card">
                                <p-table [value]="milestone.fees" dataKey="id" responsiveLayout="scroll">
                                    <ng-template #caption>
                                        <div class="flex items-center justify-between">
                                            <h6 class="m-0">{{ milestone.name }} Fees</h6>
                                            <p-button label="New Fee" severity="secondary" variant="outlined"
                                                      (onClick)="addMilestoneFee(milestone)"></p-button>
                                        </div>
                                    </ng-template>
                                    <ng-template #header>
                                        <tr>
                                            <th pSortableColumn="id" style="min-width: 10rem">
                                                <div>
                                                    Name
                                                    <p-sortIcon field="price"></p-sortIcon>
                                                </div>
                                            </th>
                                            <th>Fixed Amount</th>
                                            <th>Rate</th>
                                            <th>Is Recurring</th>
                                            <th style="width: 4rem"></th>
                                        </tr>
                                    </ng-template>
                                    <ng-template #body let-fee>
                                        <tr>
                                            <td>{{ fee.name }}</td>
                                            <td>
                                                <div *ngIf="fee.fixedAmount">AED {{ fee.fixedAmount| number: '1.2' }}
                                                </div>
                                            </td>
                                            <td>
                                                <div *ngIf="fee.rate"> {{ fee.rate  | number: '1.2' }}%</div>
                                            </td>
                                            <td>{{ fee.isRecurring }}</td>
                                            <td>
                                                <div class="flex justify-end ">
                                                    <p-button icon="pi pi-pencil" [rounded]="true" class="mr-2"
                                                              [outlined]="true"
                                                              (onClick)="editMilestoneFee(milestone, fee)"
                                                    />
                                                    <p-button icon="pi pi-trash" severity="danger" [rounded]="true"
                                                              [outlined]="true"
                                                              (onClick)="deleteMilestoneFee(milestone, fee)"
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    </ng-template>
                                    <ng-template #emptymessage>
                                        <tr>
                                            <td colspan="8">There are no fees in this milestone.</td>
                                        </tr>
                                    </ng-template>
                                </p-table>
                            </div>
                        </td>
                    </tr>
                </ng-template>
                <ng-template #emptymessage>
                    <tr>
                        <td colspan="9" style="text-align: center">No milestone found.</td>
                    </tr>
                </ng-template>
            </p-table>
        </div>

        <p-dialog [(visible)]="milestoneDialog" [style]="{ width: '450px' }" header="Milestone Details" [modal]="true">
            <ng-template #content>
                <p-fluid>

                    <div class="flex flex-col gap-6 w-full">
                        <div>
                            <label for="name" class="block font-bold mb-3">Name</label>
                            <input type="text" pInputText id="name" [(ngModel)]="milestone.name" required autofocus
                            />
                            <small class="text-red-500" *ngIf="submitted && !milestone.name">Name is required.</small>
                        </div>
                        <div>
                            <label for="description" class="block font-bold mb-3">Description</label>
                            <textarea id="description" pTextarea [(ngModel)]="milestone.description" rows="3"
                                      cols="20" fluid></textarea>
                        </div>
                        <div class="flex flex-col md:flex-row gap-6">
                            <div class="flex flex-wrap w-full">
                                <label for="totalPercent" class="block font-bold mb-3">Total Percent (%)</label>
                                <p-inputnumber inputId="totalPercent" [(ngModel)]="milestone.totalPercent"
                                ></p-inputnumber>
                            </div>
                            <div class="flex flex-wrap w-full">
                                <label for="frequency" class="block font-bold mb-3">Frequency</label>
                                <p-inputnumber inputId="frequency" [(ngModel)]="milestone.frequency"
                                ></p-inputnumber>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row gap-6">
                            <div class="flex flex-wrap w-full">
                                <label for="interval" class="block font-bold mb-3">Interval</label>
                                <p-inputnumber inputId="interval" [(ngModel)]="milestone.frequencyInterval"
                                               [showButtons]="true"
                                ></p-inputnumber>
                            </div>
                            <div class="flex flex-wrap w-full flex-col">
                                <label for="intervalType" class="block font-bold mb-3">Interval Type</label>
                                <p-select [(ngModel)]="milestone.frequencyIntervalType" inputId="intervalType"
                                          [options]="intervalTypes"
                                          optionLabel="label" optionValue="value" placeholder="Select a Interval Type"
                                          fluid appendTo="body"/>
                            </div>
                        </div>
                        <div>
                            <label for="remarks" class="block font-bold mb-3">Remarks</label>
                            <textarea id="remarks" pTextarea [(ngModel)]="milestone.remarks" rows="3"
                                      cols="20" fluid></textarea>
                        </div>
                    </div>
                </p-fluid>
            </ng-template>
            <ng-template #footer>
                <p-button label="Cancel" icon="pi pi-times" text (onClick)="hideDialog()"/>
                <p-button label="Save" icon="pi pi-check" (onClick)="saveMilestone()"/>
            </ng-template>
        </p-dialog>

        <p-dialog [(visible)]="feeDialog" [style]="{ width: '450px' }" header="Fee Details" [modal]="true">
            <ng-template #content>
                <p-fluid>
                    <div class="flex flex-col gap-6 w-full">
                        <div>
                            <label for="name" class="block font-bold mb-3">Name</label>
                            <input type="text" pInputText id="name" [(ngModel)]="fee.name" required autofocus
                            />
                            <small class="text-red-500" *ngIf="submitted && !fee.name">Name is required.</small>
                        </div>
                        <div>
                            <label for="description" class="block font-bold mb-3">Description</label>
                            <textarea id="description" pTextarea [(ngModel)]="fee.description" rows="3"
                                      cols="20" fluid></textarea>
                        </div>


                        <div class="flex flex-col md:flex-row gap-6">

                            <div class="flex flex-wrap w-full flex-col">
                                <label for="intervalType" class="block font-bold mb-3">Interval Type</label>
                                <p-select [(ngModel)]="feeType" inputId="intervalType"
                                          [options]="feeTypes"
                                          optionLabel="label" optionValue="value" placeholder="Select a Fee Type"
                                          fluid appendTo="body"/>
                            </div>
                            <div class="flex flex-wrap w-full" *ngIf="feeType === 'fixed'">
                                <label for="fixedAmount" class="block font-bold mb-3">Amount</label>
                                <p-inputnumber inputId="fixedAmount" [(ngModel)]="fee.fixedAmount"
                                               [disabled]="feeType !== 'fixed'"
                                               mode="decimal" [minFractionDigits]="0" [maxFractionDigits]="5"

                                ></p-inputnumber>
                            </div>
                            <div class="flex flex-wrap w-full" *ngIf="feeType === 'rate'">
                                <label for="rate" class="block font-bold mb-3">Rate</label>
                                <p-inputnumber inputId="rate" [(ngModel)]="fee.rate"
                                               [disabled]="feeType !== 'rate'"
                                               mode="decimal" [minFractionDigits]="0" [maxFractionDigits]="5"

                                ></p-inputnumber>
                            </div>

                        </div>
                    </div>
                </p-fluid>
            </ng-template>
            <ng-template #footer>
                <p-button label="Cancel" icon="pi pi-times" text (onClick)="hideDialog()"/>
                <p-button label="Save" icon="pi pi-check" (onClick)="saveFee()"/>
            </ng-template>
        </p-dialog>


        <p-confirmdialog [style]="{ width: '450px' }"/>
    `,
    providers: [PaymentplanService, MessageService, ConfirmationService]
})
export class PaymentplanEdit {

    record!: PaymentPlan;

    milestones = signal<Milestone[]>([]);

    milestone!: Milestone;

    fee!: MilestoneFee;

    expandedRows: expandedRows = {};

    isExpanded: boolean = false;

    milestoneDialog: boolean = false;

    feeDialog: boolean = false;

    submitted: boolean = false;

    intervalTypes: any[] = [];

    feeType: string = 'fixed';

    feeTypes: any[] = [];

    recordId!: string | null;

    private readonly route = inject(ActivatedRoute);

    constructor(
        private paymentplanService: PaymentplanService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private _location: Location
    ) {
    }

    ngOnInit() {

        this.recordId = this.route.snapshot.paramMap.get('id');
        if (this.recordId) {
            this.paymentplanService.getPaymentPlan(this.recordId).then((result) => {
                this.record = result as PaymentPlan;
                this.milestones.set(this.record.milestones ?? []);
            });
        }

        // this.loadDemoData();

        this.intervalTypes = [
            {label: 'day', value: 'day'},
            {label: 'week', value: 'week'},
            {label: 'month', value: 'month'},
            {label: 'year', value: 'year'},
        ];

        this.feeTypes = [
            {label: 'Fixed Amount', value: 'fixed'},
            {label: 'Rate', value: 'rate'},
        ]
    }

    goBack() {
        this._location.back();
    }

    loadDemoData() {
        this.paymentplanService.getPaymentPlan('1').then((result) => {
            this.record = result as PaymentPlan;
            this.milestones.set(this.record.milestones ?? []);
        });
    }

    expandAll() {
        if (!this.isExpanded) {
            this.milestones()?.forEach((milestone) => (milestone && milestone.id ? (this.expandedRows[milestone.id] = true) : ''));
        } else {
            this.expandedRows = {};
        }
        this.isExpanded = !this.isExpanded;
    }


    onRowReorder(event: TableRowReorderEvent) {
        this.milestones().forEach((milestone, index) => {
            milestone.order = index
        });
    }

    addMilestoneFee(milestone: Milestone) {
        console.log(milestone);
        this.fee = {};
        this.feeType = 'fixed';
        this.milestone = milestone;
        this.feeDialog = true;
    }

    hideDialog() {
        this.milestoneDialog = false;
        this.feeDialog = false;
        this.fee = {};
        this.milestone = {};
    }

    addMilestone() {
        this.milestone = {};
        this.milestoneDialog = true;
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.milestones().length; i++) {
            if (this.milestones()[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    saveMilestone() {
        this.submitted = true;
        let _milestones = this.milestones();
        if (this.milestone.name?.trim()) {
            if (this.milestone.id) {
                this.milestone.percentPerFrequency = (this.milestone.totalPercent ?? 0) / (this.milestone.frequency ?? 1);
                _milestones[this.findIndexById(this.milestone.id)] = this.milestone;
                this.milestones.set([..._milestones]);
            } else {
                this.milestone.id = this.createId();
                this.milestone.percentPerFrequency = (this.milestone.totalPercent ?? 0) / (this.milestone.frequency ?? 1);
                this.milestone.order = this.milestones().length;
                this.milestones.set([..._milestones, this.milestone]);
            }

            this.milestoneDialog = false;
            this.milestone = {};
            this.submitted = false;

        }
    }

    editMilestone(record: Milestone) {
        this.milestone = {...record};
        this.milestoneDialog = true;
    }

    deleteMilestone(record: Milestone) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + record.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.milestones.set(this.milestones().filter((val) => val.id !== record.id));
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Record Deleted',
                    life: 3000
                });
            }
        });
    }

    editMilestoneFee(milestone: Milestone, fee: MilestoneFee) {
        this.milestone = milestone;
        this.fee = {...fee};
        this.feeType = this.fee.rate ? 'rate' : 'fixed';
        this.feeDialog = true;
    }

    saveFee() {
        this.submitted = true;
        let _fees = this.milestone.fees ?? [];

        if (this.fee.name?.trim()) {
            if (!this.milestone.fees) {
                this.milestone.fees = [];
            }

            if (this.feeType === 'fixed') {
                this.fee.rate = null;
            } else if (this.feeType === 'rate') {
                this.fee.fixedAmount = null;
            }

            if (this.fee.id) {
                _fees[this.milestone.fees.findIndex(f => f.id === this.fee.id)] = this.fee;
                // this.milestone.fees[this.findIndexById(this.fee.id)] = {...this.fee};
                this.milestone.fees = [..._fees];
            } else {
                this.fee.id = this.createId();
                this.milestone.fees.push(this.fee);
            }

            this.feeDialog = false;
            this.milestone = {};
            this.fee = {};
            this.submitted = false;
        }
    }

    deleteMilestoneFee(milestone: Milestone, fee: MilestoneFee) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + fee.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                milestone.fees = (milestone.fees?.filter((val) => val.id !== fee.id));
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Record Deleted',
                    life: 3000
                });
            }
        });
    }

    get paymentPlanTotalPercent() {
        let total = 0;
        this.milestones().forEach(milestone => {
            total += (milestone.totalPercent ?? 0);
        });
        return total;
    }

    get progressColor() {
        if (this.paymentPlanTotalPercent === 100) return '#10b981';
        if (this.paymentPlanTotalPercent > 40 && this.paymentPlanTotalPercent < 100) return '#f97316';
        return '#f43f5e';
    }
}
