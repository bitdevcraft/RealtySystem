import { Component, signal, ViewChild } from '@angular/core';
import { Button, ButtonModule } from 'primeng/button';
import { Card, CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataView, DataViewModule } from 'primeng/dataview';
import { Property, PropertyService } from '../../service/property.service';
import { SelectButton, SelectButtonModule } from 'primeng/selectbutton';
import { CurrencyPipe, DecimalPipe, NgClass, NgForOf } from '@angular/common';
import { Product, ProductService } from '../../service/product.service';
import { TagModule } from 'primeng/tag';
import { PrefixSuffixPipe } from '../../../utils/pipe/prefixsuffix.pipe';
import { Select } from 'primeng/select';
import { MultiSelectChangeEvent, MultiSelectModule } from 'primeng/multiselect';
import { ComparisonOperator, FilterCriterion, MatchType } from '../../service/generic.service';
import { Fluid, FluidModule } from 'primeng/fluid';
import { InputText } from 'primeng/inputtext';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { ProjectService } from '../../service/project.service';
import { CommunityService } from '../../service/community.service';
import { Popover } from 'primeng/popover';
import { TableModule } from 'primeng/table';
import { InputNumber } from 'primeng/inputnumber';

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
        InputNumber
    ],
    template: `
        <div class="card min-w-96">
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
                                    <p-button [outlined]="true" severity="secondary" label="Room" (click)="op.toggle($event)"></p-button>
                                    <p-popover #op>
                                        <div class="flex flex-col gap-4 w-[12rem] ">
                                            <p-select [(ngModel)]="matchValue" [options]="matchTypeOption" optionLabel="name" optionValue="code" placeholder="Select match type" fluid></p-select>
                                            <p-select [(ngModel)]="numberOperatorValue" [options]="numberOperator" optionLabel="name" optionValue="code" placeholder="operator" fluid></p-select>
                                            <p-inputNumber [(ngModel)]="numberValue" fluid></p-inputNumber>
                                            <p-button size="small" label="Add rule" [text]="true" fluid icon="pi pi-plus"></p-button>
                                            <div class="flex flex-row justify-between">
                                                <p-button size="small" label="Clear" [outlined]="true" fluid icon="pi pi-filter-slash"></p-button>
                                                <p-button size="small" label="Apply" fluid (onClick)="addRoomFilter($event)"></p-button>
                                            </div>
                                        </div>
                                    </p-popover>
                                </div>
                            </div>
                        </div>
                    </p-fluid>
                </ng-template>

                <ng-template #list let-items>
                    <div class="flex flex-col">
                        <div *ngFor="let item of items; let i = index">
                            <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" [ngClass]="{ 'border-t border-surface': i !== 0 }">
                                {{ item.name }}
                            </div>
                        </div>
                    </div>
                </ng-template>

                <ng-template #grid let-items>
                    <div class="grid grid-cols-12 gap-4">
                        <div *ngFor="let item of items; let i = index" class="col-span-12 sm:col-span-6 lg:col-span-4 p-2">
                            <div class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded flex flex-col">
                                <div class="pt-12">
                                    <div class="flex flex-row justify-between items-start gap-2">
                                        <div>
                                            <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ item.type }}</span>
                                            <div class="text-lg font-medium mt-1">{{ item.name }}</div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-6 mt-6">
                                        <span class="text-2xl font-semibold">{{ item.price | number: '1.0-0' | prefixSuffix: 'AED' : '' }}</span>
                                        <div class="flex gap-2">
                                            <p-button icon="pi pi-book" label="Book Now" class="flex-auto whitespace-nowrap" styleClass="w-full"></p-button>
                                            <p-button icon="pi pi-search" styleClass="h-full" [outlined]="true"></p-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ng-template>
            </p-dataview>
        </div>
    `,
    providers: [PropertyService, ProductService, ProjectService, CommunityService]
})
export class BookingNew {
    @ViewChild('op') op!: Popover;

    layout: 'grid' | 'list' = 'grid';

    options = ['list', 'grid'];

    products = signal<any>([]);

    records = signal<Property[]>([]);

    types: any[] = [];

    sortOption: any[] = [];

    selectedTypes: any[] = [];

    autoFilteredValue: any[] = [];

    roomsFilter: any[] = [];

    matchTypeOption: any[] = [];

    matchValue: MatchType = 'all';

    numberOperator: any[] = [];

    numberOperatorValue: ComparisonOperator = 'eq';

    typeFilter: FilterCriterion<Property> = {
        field: 'type',
        filters: [
            {
                operator: 'in',
                value: ['Unit', 'Villa', 'Plot']
            }
        ],
        fieldMatchType: 'all'
    };

    numberValue!: number;

    filterCriteria: FilterCriterion<Property>[] = [this.typeFilter];

    constructor(
        private propertyService: PropertyService,
        private productService: ProductService,
        private projectService: ProjectService,
        private communityService: CommunityService
    ) {}

    ngOnInit() {
        this.loadDemoData();

        this.types = [
            { name: 'Unit', code: 'Unit' },
            { name: 'Villa', code: 'Villa' },
            { name: 'Plot', code: 'Plot' }
        ];

        this.sortOption = [
            { name: 'Default', code: 'Default' },
            { name: 'Price lower to higher', code: 'Price lower to higher' },
            { name: 'Price higher to lower', code: 'Price higher to lower' }
        ];

        this.matchTypeOption = [
            { name: 'Match Any', code: 'any' },
            { name: 'Match All', code: 'all' }
        ];
        this.numberOperator = [
            { name: 'Equals', code: 'eq' },
            { name: 'Not equals', code: 'neq' },
            { name: 'Less than', code: 'lt' },
            { name: 'Less than or equal to', code: 'lte' },
            { name: 'Greater than', code: 'gt' },
            { name: 'Greater than or equal to', code: 'gte' }
        ];
    }

    loadDemoData(): void {
        this.propertyService.getPropertiesXLarge().then((result) => {
            this.records.set(result);
        });

        this.productService.getProducts().then((data) => {
            this.products.set([...data.slice(0, 12)]);
        });
    }

    filterByType(event: MultiSelectChangeEvent) {
        if (event.value.length === 0) {
            this.loadDemoData();
            return;
        }

        this.filterCriteria = [
            {
                field: 'type',
                filters: [
                    {
                        operator: 'in',
                        value: event.value
                    }
                ],
                fieldMatchType: 'all'
            }
        ];

        this.propertyService.getFilteredProperty(this.filterCriteria, 'any').then((result) => {
            this.records.set(result);
        });
    }

    filterProjects(event: AutoCompleteCompleteEvent) {
        const query = event.query;
        this.projectService.getProjectsByName(query).then((data) => (this.autoFilteredValue = data));
    }

    filterCommunity(event: AutoCompleteCompleteEvent) {
        const query = event.query;
        this.communityService.getCommunitiesByName(query).then((data) => (this.autoFilteredValue = data));
    }

    toggle(event: any) {
        this.op.toggle(event);
    }

    addRoomFilter(event: any) {
        this.toggle(event);

        const filter = this.filterCriteria.filter((criteria) => criteria.field === 'rooms');
        const roomFilter: FilterCriterion<Property> = {
            field: 'rooms',
            filters: [
                {
                    operator: this.numberOperatorValue,
                    value: this.numberValue
                }
            ],
            fieldMatchType: this.matchValue
        };

        if (filter.length > 0) {
            filter[0].filters.push({
                operator: this.numberOperatorValue,
                value: this.numberValue
            });
        } else {
            this.filterCriteria.push(roomFilter);
        }

        console.log(this.filterCriteria);
    }
}
