import { Component, signal } from '@angular/core';
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
import { FilterCriterion } from '../../service/generic.service';
import { Fluid, FluidModule } from 'primeng/fluid';
import { InputText } from 'primeng/inputtext';

@Component({
    selector: 'booking-new',
    imports: [ButtonModule, CardModule, ReactiveFormsModule, DataViewModule, FormsModule, SelectButtonModule, NgClass, TagModule, NgForOf, PrefixSuffixPipe, DecimalPipe, MultiSelectModule, FluidModule, InputText, Select],
    template: `
        <div class="card">
            <p-dataview [value]="records()" [layout]="layout" [lazyLoadOnInit]="true" [rows]="12" [paginator]="true" [rowsPerPageOptions]="[12, 24, 36, 48]">
                <ng-template #header>
                    <div class="flex justify-between">
                        <div class="font-semibold text-xl">Available Properties</div>
                        <p-select-button [(ngModel)]="layout" [options]="options" [allowEmpty]="false">
                            <ng-template #item let-option>
                                <i class="pi " [ngClass]="{ 'pi-bars': option === 'list', 'pi-table': option === 'grid' }"></i>
                            </ng-template>
                        </p-select-button>
                    </div>
                    <p-fluid>
                        <div class="flex flex-col md:flex-row gap-6">
                            <div class="flex flex-col gap-2 w-full">
                                <label for="types">Type</label>
                                <p-multiselect inputId="types" [options]="types" [(ngModel)]="selectedTypes" optionLabel="name" optionValue="code" placeholder="Select Type" (onChange)="filterByType($event)"></p-multiselect>
                            </div>
                            <div class="flex flex-col gap-2 w-full">
                                <label for="project">Project</label>
                                <input pInputText type="text" />
                            </div>
                            <div class="flex flex-col gap-2 w-full">
                                <label for="community">Community</label>
                                <input pInputText type="text" />
                            </div>
                            <div class="flex flex-col gap-2 w-full">
                                <label for="room">Room</label>
                                <input pInputText type="text" />
                            </div>
                            <div class="flex flex-col gap-2 w-full">
                                <label for="Sort">Sort</label>
                                <input pInputText type="text" />
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
    providers: [PropertyService, ProductService]
})
export class BookingNew {
    layout: 'grid' | 'list' = 'grid';

    options = ['list', 'grid'];

    products = signal<any>([]);

    records = signal<Property[]>([]);

    types: any[] = [];

    sortOption: any[] = [];

    selectedTypes: any[] = [];

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

    filterCriteria: FilterCriterion<Property>[] = [this.typeFilter];

    constructor(
        private propertyService: PropertyService,
        private productService: ProductService
    ) {}

    ngOnInit() {
        this.loadDemoData();

        this.types = [
            { name: 'Unit', code: 'Unit' },
            { name: 'Villa', code: 'Villa' },
            { name: 'Plot', code: 'Plot' }
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
}
