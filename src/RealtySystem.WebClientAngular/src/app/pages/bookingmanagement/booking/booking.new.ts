import { Component, signal, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataViewModule, DataViewPageEvent } from 'primeng/dataview';
import { Property, PropertyService } from '../../service/listing/property.service';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CurrencyPipe, DecimalPipe, NgClass, NgForOf, NgIf, NgStyle } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { PrefixSuffixPipe } from '../../../utils/pipe/prefixsuffix.pipe';
import { Select } from 'primeng/select';
import { MultiSelectChangeEvent, MultiSelectModule } from 'primeng/multiselect';
import { ComparisonOperator, FilterCriterion, MatchType } from '../../service/generic.service';
import { FluidModule } from 'primeng/fluid';
import { AutoComplete, AutoCompleteCompleteEvent, AutoCompleteSelectEvent } from 'primeng/autocomplete';
import { ProjectService } from '../../service/listing/project.service';
import { CommunityService } from '../../service/listing/community.service';
import { Popover } from 'primeng/popover';
import { TableModule } from 'primeng/table';
import { InputNumber } from 'primeng/inputnumber';
import { Chip } from 'primeng/chip';
import { InputText } from 'primeng/inputtext';
import { Dialog } from 'primeng/dialog';
import { Fee, PaymentPlan, PaymentplanService, SchedulePlan } from '../../service/listing/paymentplan.service';
import { OptionService } from '../../service/option.service';
import { TabsModule } from 'primeng/tabs';
import { ScrollTopModule } from 'primeng/scrolltop';
import { HttpParams } from '@angular/common/http';
import { Skeleton } from 'primeng/skeleton';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
    selector: 'booking-new',
    imports: [
        ButtonModule,
        CardModule,
        ReactiveFormsModule,
        DataViewModule,
        FormsModule,
        SelectButtonModule,
        NgClass,
        TagModule,
        NgForOf,
        PrefixSuffixPipe,
        DecimalPipe,
        MultiSelectModule,
        FluidModule,
        Select,
        AutoComplete,
        Popover,
        TableModule,
        InputNumber,
        Chip,
        InputText,
        Dialog,
        TabsModule,
        NgIf,
        ScrollTopModule,
        Skeleton,
        NgStyle,
        FieldsetModule
    ],
    styles: `
        :host {
            ::ng-deep .p-dataview-content {
                background-color: transparent;
            }
        }
    `,
    template: `
        <div class=" min-w-96">
            <p-dataview [value]="records()" [layout]="layout" [lazyLoadOnInit]="true" [rows]="12" [paginator]="true" [rowsPerPageOptions]="[12, 24, 36, 48]">
                <ng-template #header>
                    <div class="flex flex-col md:flex-row justify-between w-full items-center mb-4">
                        <div class="font-semibold text-xl w-full">Available Properties</div>

                        <div class="flex gap-2 md:flex-row flex-col w-full justify-end items-center">
                            <p-fluid>
                                <div class="flex flex-col md:flex-row gap-6">
                                    <div class="flex flex-wrap flex-row gap-2 w-full items-center justify-end">
                                        <label>Sort</label>
                                        <p-select styleClass="w-full md:w-80" [options]="sortOption" optionLabel="name" optionValue="code" placeholder="Sort"></p-select>
                                    </div>
                                </div>
                            </p-fluid>
                            <p-select-button [(ngModel)]="layout" [options]="options" [allowEmpty]="false">
                                <ng-template #item let-option>
                                    <i class="pi " [ngClass]="{ 'pi-bars': option === 'list', 'pi-table': option === 'grid' }"></i>
                                </ng-template>
                            </p-select-button>
                        </div>
                    </div>

                    <div class="text-end">
                        <p-button size="small" label="Clear" [outlined]="true" icon="pi pi-filter-slash" severity="danger" (onClick)="clearFilter()"></p-button>
                    </div>

                    <p-fluid>
                        <div class="flex flex-col md:flex-row gap-6">
                            <div class="flex flex-col gap-2 w-full">
                                <label for="types">Type</label>
                                <p-multiselect inputId="types" [options]="types" [(ngModel)]="selectedTypes" optionLabel="name" optionValue="code" placeholder="Select Type" (onChange)="filterByType($event)"></p-multiselect>
                            </div>
                            <div class="flex flex-col gap-2 w-full">
                                <label for="project">Project</label>
                                <p-autoComplete multiple optionLabel="name" [suggestions]="autoFilteredValue" (completeMethod)="filterProjects($event)"></p-autoComplete>
                            </div>
                            <div class="flex flex-col gap-2 w-full">
                                <label for="community">Community</label>
                                <p-autoComplete multiple optionLabel="name" [suggestions]="autoFilteredValue" (completeMethod)="filterCommunity($event)"></p-autoComplete>
                            </div>
                            <div class="flex flex-col gap-2 w-full">
                                <label for="room">Room</label>
                                <div>
                                    <!--                                    <p-button [outlined]="true" severity="secondary" [label]="roomFilters.length > 0 ? 'Match ' + matchValue : 'Rooms'" (click)="op.toggle($event)"></p-button>-->
                                    <input pInputText readonly (click)="op.toggle($event)" [value]="roomFilters.length > 0 ? 'Match ' + matchValue : ''" />
                                    <p-popover #op>
                                        <div class="flex flex-col gap-4 w-[12rem] ">
                                            <p-select [(ngModel)]="matchValue" [options]="matchTypeOption" optionLabel="name" optionValue="code" placeholder="Select match type" fluid></p-select>
                                            <p-select [(ngModel)]="numberOperatorValue" [options]="numberOperator" optionLabel="name" optionValue="code" placeholder="operator" fluid></p-select>
                                            <p-inputNumber [(ngModel)]="numberValue" fluid [showButtons]="true" [min]="0"></p-inputNumber>
                                            <div class="flex flex-row justify-between">
                                                <p-button size="small" label="Apply" fluid (onClick)="addRoomFilter($event)"></p-button>
                                            </div>
                                        </div>
                                    </p-popover>
                                    <div class="flex flex-wrap justify-start items-start gap-2 mt-2">
                                        <div *ngFor="let filter of roomFilters; let i = index">
                                            <p-chip [label]="getOperator(filter.operator) + ' ' + filter.value" [removable]="true" (onRemove)="onFilterRemove('rooms', i)"></p-chip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </p-fluid>
                </ng-template>

                <ng-template #list let-items>
                    <div class="mt-6">
                        <p-table [value]="items" [lazy]="true">
                            <ng-template #header>
                                <tr>
                                    <th style="min-width: 12rem">Name</th>
                                    <th style="min-width: 12rem">Type</th>
                                    <th style="min-width: 12rem">Rooms</th>
                                    <th style="min-width: 12rem">Price</th>
                                    <th style="min-width: 12rem">Total Area ft<sup>2</sup></th>
                                    <th></th>
                                </tr>
                            </ng-template>
                            <ng-template #body let-item>
                                <tr>
                                    <td>
                                        {{ item.name }}
                                    </td>
                                    <td>
                                        {{ item.type }}
                                    </td>
                                    <td>
                                        {{ item.rooms }}
                                    </td>
                                    <td>
                                        {{ item.price | number: '1.0-0' | prefixSuffix: 'AED' }}
                                    </td>
                                    <td>
                                        {{ item.totalArea | number: '1.0-0' | prefixSuffix: '' : 'ft&sup2;' }}
                                    </td>
                                    <td>
                                        <p-button label="Book Now" [rounded]="true" icon="pi pi-book" class="mr-2"></p-button>
                                        <p-button [outlined]="true" [rounded]="true" icon="pi pi-search" (onClick)="onOpenPropertyInfo(item)"></p-button>
                                    </td>
                                </tr>
                            </ng-template>
                            <ng-template #loadingbody>
                                <tr style="height:46px">
                                    <td>
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
                                    <td>
                                        <p-skeleton [ngStyle]="{ width: '60%' }" />
                                    </td>
                                    <td>
                                        <p-skeleton [ngStyle]="{ width: '60%' }" />
                                    </td>
                                </tr>
                            </ng-template>
                        </p-table>
                    </div>
                </ng-template>

                <ng-template #grid let-items>
                    <div class="grid grid-cols-12 gap-4 mt-4">
                        <div *ngFor="let item of items; let i = index" class="col-span-12 sm:col-span-6 lg:col-span-4 p-2">
                            <div class="card flex flex-col">
                                <div class="pt-12">
                                    <div class="flex flex-row justify-between items-start gap-2">
                                        <div>
                                            <div class="text-lg font-medium">{{ item?.name }}</div>
                                            <div class="font-medium text-surface-500 dark:text-surface-400 text-sm">
                                                {{ item?.project?.name | prefixSuffix: 'by' }}
                                                &nbsp;
                                            </div>
                                        </div>
                                        <span class="font-medium text-surface-500 dark:text-surface-400 text-sm mt-1">{{ item?.type }} {{ item?.rooms | prefixSuffix: '|' : 'Room' }}</span>
                                    </div>
                                    <div class="flex flex-col gap-6 mt-6">
                                        <span class="text-2xl font-semibold">{{ item?.price | number: '1.0-0' | prefixSuffix: 'AED' : '' }}</span>
                                        <div class="flex gap-2">
                                            <p-button icon="pi pi-book" label="Book Now" class="flex-auto whitespace-nowrap" styleClass="w-full"></p-button>
                                            <p-button icon="pi pi-search" styleClass="h-full" [outlined]="true" (onClick)="onOpenPropertyInfo(item)"></p-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ng-template>
                <ng-template #emptymessage>
                    <div class="text-center p-4">No results found. Please clear your filter</div>
                </ng-template>
            </p-dataview>
        </div>

        <p-dialog [(visible)]="propertyInfoDialog" [style]="{ width: '80rem', height: '75vh' }" header="Property Info" [modal]="true" [maximizable]="true" [breakpoints]="{ '1199px': '90vw', '575px': '90vw' }" (onHide)="onHidePropertyInfo()">
            <div>
                <p-tabs [value]="dialogTabValue">
                    <p-tablist>
                        <p-tab [value]="0">Info</p-tab>
                        <p-tab [value]="1">Sales Offer</p-tab>
                    </p-tablist>
                    <p-tabpanels>
                        <p-tabpanel [value]="0">
                            <div class="mb-6">
                                <p-fieldset legend="Details">
                                    <div class="flex  flex-col  gap-6">
                                        <div class="flex  flex-col md:flex-row gap-6 w-full">
                                            <div class="flex flex-col gap-4 w-full">
                                                <label for="name">Name</label>
                                                <div id="name" class=" border-b h-8 w-full pl-2.5 pr-2.5 flex justify-between items-center p-1">
                                                    <div>
                                                        {{ selectProperty?.name }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-col gap-4 w-full">
                                                <label for="project">Project</label>
                                                <div id="project" class=" border-b h-8 w-full pl-2.5 pr-2.5 flex justify-between items-center p-1">
                                                    <div>
                                                        {{ selectProperty?.project?.name }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex gap-4 w-full">
                                            <div class="flex flex-col gap-4 w-full">
                                                <label for="description">Description</label>
                                                <div id="description" class=" border-b h-8 w-full pl-2.5 pr-2.5 flex justify-between items-center p-1">
                                                    <div>
                                                        {{ selectProperty?.description }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex gap-4 w-full">
                                            <div class="flex flex-col gap-4 w-full">
                                                <label for="unitNo">Unit No</label>
                                                <div id="unitNo" class=" border-b h-8 w-full pl-2.5 pr-2.5 flex justify-between items-center p-1">
                                                    <div>
                                                        {{ selectProperty?.unitNo }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-col gap-4 w-full">
                                                <label for="villaNo">Villa No</label>
                                                <div id="villaNo" class=" border-b h-8 w-full pl-2.5 pr-2.5 flex justify-between items-center p-1">
                                                    <div>
                                                        {{ selectProperty?.villaNo }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-col gap-4 w-full">
                                                <label for="buildingNo">Building No</label>
                                                <div id="buildingNo" class=" border-b h-8 w-full pl-2.5 pr-2.5 flex justify-between items-center p-1">
                                                    <div>
                                                        {{ selectProperty?.buildingNo }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-col gap-4 w-full">
                                                <label for="plotNo">Plot No</label>
                                                <div id="plotNo" class=" border-b h-8 w-full pl-2.5 pr-2.5 flex justify-between items-center p-1">
                                                    <div>
                                                        {{ selectProperty?.plotNo }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </p-fieldset>
                            </div>
                            <div class="mb-6">
                                <p-fieldset legend="Size and Price">
                                    <div class="flex  flex-col  gap-6">
                                        <div class="flex  flex-col md:flex-row gap-6 w-full">
                                            <div class="flex flex-col gap-4 w-full">
                                                <label for="price">Sale Price</label>
                                                <div id="price" class=" border-b h-8 w-full pl-2.5 pr-2.5 flex justify-between items-center p-1">
                                                    <div>
                                                        {{ selectProperty?.price | prefixSuffix: 'AED' }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-col gap-4 w-full">
                                                <label for="totalArea">Total Area</label>
                                                <div id="totalArea" class=" border-b h-8 w-full pl-2.5 pr-2.5 flex justify-between items-center p-1">
                                                    <div>
                                                        {{ selectProperty?.totalArea | prefixSuffix: '' : 'ft&sup2;' }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </p-fieldset>
                            </div>
                            <div class="mb-6">
                                <p-fieldset legend="Features">
                                    <div class="flex  flex-col  gap-6">
                                        <div class="flex  flex-col md:flex-row gap-6 w-full">
                                            <div class="flex flex-col gap-4 w-full">
                                                <p-table [value]="selectProperty?.features ?? []" [scrollable]="true">
                                                    <ng-template #header>
                                                        <tr>
                                                            <th>
                                                                <div class="w-full flex justify-between items-center parent-container">Title</div>
                                                            </th>
                                                            <th>
                                                                <div class="w-full flex justify-between items-center parent-container">Description</div>
                                                            </th>
                                                        </tr>
                                                    </ng-template>
                                                    <ng-template #body let-feature>
                                                        <tr>
                                                            <td>{{ feature.name }}</td>
                                                            <td>{{ feature.description }}</td>
                                                        </tr>
                                                    </ng-template>
                                                </p-table>
                                            </div>
                                        </div>
                                    </div>
                                </p-fieldset>
                            </div>
                        </p-tabpanel>
                        <p-tabpanel [value]="1">
                            <div class="mb-6">
                                <p-autoComplete
                                    [forceSelection]="true"
                                    placeholder="Select Payment Plan"
                                    fluid
                                    dropdown
                                    appendTo="body"
                                    optionLabel="name"
                                    [(ngModel)]="selectedPaymentPlan"
                                    [suggestions]="autoFilteredValue"
                                    (completeMethod)="filterPaymentPlan($event)"
                                    (onSelect)="onPaymentPlanSelected($event)"
                                ></p-autoComplete>
                            </div>
                            <div *ngIf="!!selectedPaymentPlan">
                                <div class="mb-6">
                                    <div class="font-semibold text-xl mb-4">Additional Fees</div>
                                    <p-table [value]="selectedFees()" [rowHover]="true" showGridlines="true">
                                        <ng-template #header>
                                            <tr>
                                                <th style="min-width: 12rem"></th>
                                                <th style="min-width: 12rem">Price</th>
                                                <th style="min-width: 12rem">Remarks</th>
                                            </tr>
                                        </ng-template>
                                        <ng-template #body let-previewData>
                                            <tr>
                                                <td style="min-width: 12rem">{{ previewData.name }}</td>
                                                <td style="min-width: 12rem;">
                                                    {{ previewData.price | number: '1.0-0' | prefixSuffix: 'AED' }}
                                                </td>
                                                <td style="min-width: 12rem">{{ previewData.remarks }}</td>
                                            </tr>
                                        </ng-template>
                                    </p-table>
                                </div>

                                <div>
                                    <div class="font-semibold text-xl mb-4">Payment Plan</div>
                                    <p-table [value]="selectedSchedulePlan()" [rowHover]="true" showGridlines="true">
                                        <ng-template #header>
                                            <tr>
                                                <th style="text-align: center; min-width: 12rem">Name</th>
                                                <th style="text-align: center; min-width: 12rem">Percentage</th>
                                                <th style="text-align: center; min-width: 12rem">Price</th>
                                                <th style="text-align: center; min-width: 12rem">Remarks</th>
                                            </tr>
                                        </ng-template>
                                        <ng-template #body let-previewData>
                                            <tr>
                                                <td>{{ previewData.name }}</td>
                                                <td style="text-align: right; padding-right: 2rem">
                                                    {{ previewData.percentage | number: '1.2' | prefixSuffix: '' : '%' }}
                                                </td>
                                                <td style="text-align: right; padding-right: 2rem">
                                                    {{ previewData.price | number: '1.0-0' | prefixSuffix: 'AED' }}
                                                </td>
                                                <td>{{ previewData.remarks }}</td>
                                            </tr>
                                        </ng-template>
                                    </p-table>
                                </div>
                            </div>
                        </p-tabpanel>
                    </p-tabpanels>
                </p-tabs>
            </div>
            <p-scrolltop [threshold]="100" icon="pi pi-arrow-up" [buttonProps]="{ severity: 'contrast', raised: true, rounded: true }"></p-scrolltop>
        </p-dialog>
    `,
    providers: [PropertyService, ProjectService, CommunityService, OptionService, PaymentplanService]
})
export class BookingNew {
    @ViewChild('op') op!: Popover;

    layout: 'grid' | 'list' = 'list';

    options = ['list', 'grid'];

    products = signal<any>([]);

    records = signal<Property[]>([]);

    params: HttpParams = new HttpParams();

    types: any[] = [];

    sortOption: any[] = [];

    selectedTypes: any[] = [];

    autoFilteredValue: any[] = [];

    roomsFilter: any[] = [];

    matchTypeOption: any[] = [];

    matchValue: MatchType = 'all';

    numberOperator: any[] = [];

    numberOperatorValue: ComparisonOperator = 'eq';

    numberValue!: number | null;

    filterCriteria: FilterCriterion<Property>[] = [];

    propertyInfoDialog: boolean = false;

    dialogTabValue: number = 0;

    selectedPaymentPlan: PaymentPlan | null = null;

    selectProperty: Property | null = null;

    selectedSchedulePlan = signal<SchedulePlan[]>([]);

    selectedFees = signal<Fee[]>([]);

    constructor(
        private propertyService: PropertyService,
        private projectService: ProjectService,
        private communityService: CommunityService,
        private optionService: OptionService,
        private paymentPlanService: PaymentplanService
    ) {}

    ngOnInit() {
        this.loadData();

        this.sortOption = [
            { name: 'Default', code: 'Default' },
            { name: 'Price lower to higher', code: 'Price lower to higher' },
            { name: 'Price higher to lower', code: 'Price higher to lower' }
        ];

        this.optionService.getPropertyTypes().subscribe({
            next: (result) => {
                this.types = result;
            }
        });

        this.optionService.getMatchType().subscribe({
            next: (result) => {
                this.matchTypeOption = result;
            }
        });

        this.optionService.getNumberComparisonOperator().subscribe({
            next: (result) => {
                this.numberOperator = result;
            }
        });
    }

    loadData(): void {
        this.params = this.params.set('_expand', 'project');
        // this.params = this.params.set('_page', 1);
        // this.params = this.params.set('_limit', 12);
        this.params = this.params.set('status', 'Available');

        this.propertyService.getProperties(this.params).subscribe({
            next: (response) => {
                this.records.set(response.body ?? []);
            }
        });
    }

    onPageUpdate(event: DataViewPageEvent) {
        const page = (event.first || 0) / (event.rows || 12) + 1;

        this.params = this.params.set('_expand', 'project');
        this.params = this.params.set('_page', page);
        this.params = this.params.set('_limit', event.rows);

        this.propertyService.getProperties(this.params).subscribe({
            next: (response) => {
                const array = this.records();
                Array.prototype.splice.apply(array, [event.first ?? 0, event.rows ?? 0, ...(response.body ?? [])]);
                this.records.set(array);
            }
        });
    }

    filterByType(event: MultiSelectChangeEvent) {
        if (event.value.length === 0) {
            this.onFilterRemove('type', 0);
            return;
        }

        const filter = this.getFilter('type');

        const filterCriterion: FilterCriterion<Property> = {
            field: 'type',
            filters: [
                {
                    operator: 'in',
                    value: event.value
                }
            ],
            fieldMatchType: 'all'
        };

        if (filter > -1) {
            this.filterCriteria[filter] = { ...filterCriterion };
        } else {
            this.filterCriteria.push(filterCriterion);
        }

        this.getFilterResult();
    }

    filterProjects(event: AutoCompleteCompleteEvent) {
        const query = event.query;
        this.projectService.getProjectsByName(query).subscribe({
            next: (data) => {
                this.autoFilteredValue = data;
            }
        });
    }

    filterCommunity(event: AutoCompleteCompleteEvent) {
        const query = event.query;

        let params = new HttpParams();
        params = params.set('name_like', query);
        this.communityService.getCommunities(params).subscribe({
            next: (data) => {
                this.autoFilteredValue = data.body ?? [];
            }
        });
    }

    filterPaymentPlan(event: AutoCompleteCompleteEvent) {
        const query = event.query;
        let params = new HttpParams();
        this.paymentPlanService.getPaymentPlans(params).subscribe({
            next: (data) => {
                this.autoFilteredValue = data.body ?? [];
            }
        });
    }

    toggle(event: any) {
        this.op.toggle(event);
    }

    addRoomFilter(event: any) {
        this.toggle(event);

        this.addFilter('rooms', this.numberOperatorValue, this.numberValue, this.matchValue);
        this.getFilterResult();

        this.numberOperatorValue = 'eq';
        this.numberValue = null;
    }

    getFilter(field: keyof Property) {
        return this.filterCriteria.findIndex((criteria) => criteria.field === field);
    }

    addFilter(field: keyof Property, operator: ComparisonOperator = 'eq', value: any, matchType: MatchType = 'all') {
        const filter = this.getFilter(field);

        if ((value === undefined || value === null) && filter > -1) {
            this.filterCriteria[filter].fieldMatchType = matchType;
            return;
        }

        if (value === undefined || value === null) return;

        if (filter > -1) {
            this.filterCriteria[filter].filters.push({
                operator: operator,
                value: value
            });

            this.filterCriteria[filter].fieldMatchType = matchType;
            return;
        }

        const filterCriterion: FilterCriterion<Property> = {
            field: field,
            filters: [
                {
                    operator: operator,
                    value: value
                }
            ],
            fieldMatchType: matchType
        };
        this.filterCriteria.push(filterCriterion);
        return;
    }

    get roomFilters() {
        const index = this.getFilter('rooms');
        return index > -1 ? this.filterCriteria[index].filters : [];
    }

    onFilterRemove(field: keyof Property, index: number) {
        const filter = this.getFilter(field);

        if (filter === -1) return;
        const temp = this.filterCriteria[filter].filters.splice(index, 1);

        if (this.filterCriteria[filter].filters.length === 0) {
            this.filterCriteria.splice(filter, 1);
        }

        this.getFilterResult();
    }

    clearFilter() {
        this.filterCriteria = [];
        this.selectedTypes = [];
        this.getFilterResult();
    }

    getFilterResult() {
        console.log(this.filterCriteria);
        this.propertyService.getFilteredProperty(this.filterCriteria, 'all').subscribe({
            next: (data) => {
                this.records.set(data);
            }
        });
    }

    getOperator(operator: ComparisonOperator): string {
        switch (operator) {
            case 'eq':
                return 'equals to';
            case 'neq':
                return 'not equals to';
            case 'gt':
                return 'greater than';
            case 'gte':
                return 'greater than or equal to';
            case 'lt':
                return 'less than';
            case 'lte':
                return 'less than or equal to';
            case 'contains':
                return 'contains';
            case 'startsWith':
                return 'starts with';
            case 'in':
                return 'in';
            default:
                return '';
        }
    }

    onOpenPropertyInfo(property: Property) {
        this.propertyInfoDialog = true;
        this.selectProperty = property;
        this.dialogTabValue = 0;
    }

    onHidePropertyInfo() {
        this.propertyInfoDialog = false;
        this.selectedPaymentPlan = null;
        this.selectProperty = null;
        this.selectedSchedulePlan.set([]);
        this.selectedFees.set([]);
        this.dialogTabValue = 0;
    }

    onPaymentPlanSelected(event: AutoCompleteSelectEvent) {
        console.log(event);

        const paymentPlan = event.value;
        const milestones = paymentPlan.milestones;
        if (this.selectProperty === null) return;
        const schedulePlan = this.paymentPlanService.generateSchedulePlan(milestones, this.selectProperty.price ?? 0, new Date());
        this.selectedSchedulePlan.set(schedulePlan);

        const fees = this.paymentPlanService.generateFees(milestones, this.selectProperty.price ?? 0);
        this.selectedFees.set(fees);
    }
}
