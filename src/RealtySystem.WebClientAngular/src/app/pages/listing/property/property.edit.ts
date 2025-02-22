import { Component, inject, OnInit, signal } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { AccordionModule } from 'primeng/accordion';
import { Button, ButtonDirective, ButtonIcon, ButtonLabel } from 'primeng/button';
import { PlusIcon } from 'primeng/icons';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Toolbar } from 'primeng/toolbar';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { TabsModule } from 'primeng/tabs';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { Textarea } from 'primeng/textarea';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Fluid, FluidModule } from 'primeng/fluid';
import { CountryService } from '../../service/country.service';
import { Country } from '../../service/customer.service';
import { MenuItem, MessageService } from 'primeng/api';
import { SplitButton, SplitButtonModule } from 'primeng/splitbutton';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { Project, ProjectService } from '../../service/listing/project.service';
import { Feature, Property, PropertyService } from '../../service/listing/property.service';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { InputNumberModule } from 'primeng/inputnumber';
import { CurrencyPipe, Location, NgFor, NgIf } from '@angular/common';
import { PaymentPlan } from '../../service/listing/paymentplan.service';
import { PrefixSuffixPipe } from '../../../utils/pipe/prefixsuffix.pipe';
import { OptionService } from '../../service/option.service';
import { Toast } from 'primeng/toast';

@Component({
    selector: 'property-edit',
    imports: [
        AccordionModule,
        FieldsetModule,
        Button,
        Toolbar,
        ButtonGroupModule,
        TabsModule,
        InputText,
        Select,
        Textarea,
        FormsModule,
        FluidModule,
        AutoComplete,
        TableModule,
        SplitButtonModule,
        PanelModule,
        InputNumberModule,
        ReactiveFormsModule,
        NgIf,
        CurrencyPipe,
        PrefixSuffixPipe,
        NgFor,
        Toast
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
                    <p-button icon="pi pi-arrow-left" [rounded]="true" variant="outlined" class="mr-2"
                              (onClick)="goBack()"></p-button>
                </div>
                <div class="flex flex-col pl-2 pt-0">
                    <div class="text-sm text-surface-500 dark:text-surface-400">Property</div>
                    <div>{{ propertyValue.name }}</div>
                </div>
            </ng-template>

            <ng-template #end></ng-template>
        </p-toolbar>

        <div class="mb-6">
            <p-tabs value="0" scrollable>
                <p-tablist>
                    <p-tab value="0">Details</p-tab>
                    <p-tab value="1" disabled>Marketing and Media</p-tab>
                    <p-tab value="2" disabled>Documents</p-tab>
                </p-tablist>
                <p-tabpanels>
                    <p-tabpanel value="0">
                        <form [formGroup]="recordForm" (ngSubmit)="saveRecord()">
                            <div class="mb-6">
                                <p-fieldset legend="Property Details" [toggleable]="true">
                                    <p-fluid>
                                        <div class="mb-4 mt-4">
                                            <div class=" flex flex-col gap-6 w-full">
                                                <div class="flex flex-col md:flex-row gap-6">
                                                    <div class="flex flex-col gap-2 w-full">
                                                        <label class="font-bold" for="name">Name</label>
                                                        <input pInputText id="name" type="text" formControlName="name"
                                                               *ngIf="editMode" />
                                                        <small class="text-red-500"
                                                               *ngIf="recordFormControl['name'].invalid && (recordFormControl['name'].dirty || recordFormControl['name'].touched)">Name
                                                            is required.</small>

                                                        <div
                                                            class=" border-b w-full pl-2.5 pr-2.5 flex justify-between items-center parent-container"
                                                            *ngIf="!editMode">
                                                            <div>
                                                                {{ propertyValue.name }}
                                                            </div>
                                                            <div class="button-container">
                                                                <p-button icon="pi pi-pencil" [text]="true" size="small"
                                                                          [rounded]="true" severity="secondary"
                                                                          (onClick)="editRecord()"></p-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-col gap-2 w-full">
                                                        <label class="font-bold" for="project">Project</label>
                                                        <p-autocomplete
                                                            inputId="project"
                                                            [suggestions]="autoFilteredValue"
                                                            optionLabel="name"
                                                            placeholder="Search"
                                                            (completeMethod)="filterProjects($event)"
                                                            formControlName="project"
                                                            *ngIf="editMode"
                                                        ></p-autocomplete>
                                                        <small class="text-red-500"
                                                               *ngIf="recordFormControl['project'].invalid && (recordFormControl['project'].dirty || recordFormControl['project'].touched)">Project
                                                            is required.</small>

                                                        <div
                                                            class=" border-b w-full pl-2.5 pr-2.5 flex justify-between items-center parent-container"
                                                            *ngIf="!editMode">
                                                            <div>
                                                                {{ propertyValue.project?.name }}
                                                            </div>
                                                            <div class="button-container">
                                                                <p-button icon="pi pi-pencil" [text]="true" size="small"
                                                                          [rounded]="true" severity="secondary"
                                                                          (onClick)="editRecord()"></p-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="flex  flex-col gap-2 w-full">
                                                        <label class="font-bold" for="listingType">Status</label>
                                                        <p-select
                                                            id="listingType"
                                                            formControlName="status"
                                                            *ngIf="editMode"
                                                            [options]="statuses"
                                                            optionLabel="name"
                                                            optionValue="code"
                                                            placeholder="Current Status"
                                                            class="w-full"
                                                            appendTo="body"
                                                        ></p-select>

                                                        <div
                                                            class=" border-b w-full pl-2.5 pr-2.5 flex justify-between items-center parent-container"
                                                            *ngIf="!editMode">
                                                            <div>
                                                                {{ propertyValue.status }}
                                                            </div>
                                                            <div class="button-container">
                                                                <p-button icon="pi pi-pencil" [text]="true" size="small"
                                                                          [rounded]="true" severity="secondary"
                                                                          (onClick)="editRecord()"></p-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex flex-wrap">
                                                    <label class="font-bold" for="description">Description</label>
                                                    <textarea pTextarea id="description" rows="4"
                                                              formControlName="description" *ngIf="editMode"></textarea>

                                                    <div
                                                        class=" border-b w-full pl-2.5 pr-2.5 flex justify-between items-center parent-container"
                                                        *ngIf="!editMode">
                                                        <div>
                                                            {{ propertyValue.description }}
                                                        </div>
                                                        <div class="button-container">
                                                            <p-button icon="pi pi-pencil" [text]="true" size="small"
                                                                      [rounded]="true" severity="secondary"
                                                                      (onClick)="editRecord()"></p-button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="flex flex-col md:flex-row gap-6">
                                                    <div class="flex flex-wrap gap-2 w-full">
                                                        <label class="font-bold" for="unitNo">Unit No</label>
                                                        <input pInputText id="unitNo" type="text"
                                                               formControlName="unitNo" *ngIf="editMode" />
                                                        <div
                                                            class=" border-b w-full pl-2.5 pr-2.5 flex justify-between items-center parent-container"
                                                            *ngIf="!editMode">
                                                            <div>
                                                                {{ propertyValue.unitNo }}
                                                            </div>
                                                            <div class="button-container">
                                                                <p-button icon="pi pi-pencil" [text]="true" size="small"
                                                                          [rounded]="true" severity="secondary"
                                                                          (onClick)="editRecord()"></p-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-wrap gap-2 w-full">
                                                        <label class="font-bold" for="villaNo">Villa No</label>
                                                        <input pInputText id="villaNo" type="text"
                                                               formControlName="villaNo" *ngIf="editMode" />
                                                        <div
                                                            class=" border-b w-full pl-2.5 pr-2.5 flex justify-between items-center parent-container"
                                                            *ngIf="!editMode">
                                                            <div>
                                                                {{ propertyValue.villaNo }}
                                                            </div>
                                                            <div class="button-container">
                                                                <p-button icon="pi pi-pencil" [text]="true" size="small"
                                                                          [rounded]="true" severity="secondary"
                                                                          (onClick)="editRecord()"></p-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-wrap gap-2 w-full">
                                                        <label class="font-bold" for="buildingNo">Building No</label>
                                                        <input pInputText id="buildingNo" type="text"
                                                               formControlName="buildingNo" *ngIf="editMode" />
                                                        <div
                                                            class=" border-b w-full pl-2.5 pr-2.5 flex justify-between items-center parent-container"
                                                            *ngIf="!editMode">
                                                            <div>
                                                                {{ propertyValue.buildingNo }}
                                                            </div>
                                                            <div class="button-container">
                                                                <p-button icon="pi pi-pencil" [text]="true" size="small"
                                                                          [rounded]="true" severity="secondary"
                                                                          (onClick)="editRecord()"></p-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-wrap gap-2 w-full">
                                                        <label class="font-bold" for="plotNo">Plot No</label>
                                                        <input pInputText id="plotNo" type="text"
                                                               formControlName="plotNo" *ngIf="editMode" />
                                                        <div
                                                            class=" border-b w-full pl-2.5 pr-2.5 flex justify-between items-center parent-container"
                                                            *ngIf="!editMode">
                                                            <div>
                                                                {{ propertyValue.plotNo }}
                                                            </div>
                                                            <div class="button-container">
                                                                <p-button icon="pi pi-pencil" [text]="true" size="small"
                                                                          [rounded]="true" severity="secondary"
                                                                          (onClick)="editRecord()"></p-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex flex-col md:flex-row gap-6">
                                                    <div class="flex flex-wrap gap-2 w-full">
                                                        <label class="font-bold" for="type">Property Type</label>
                                                        <p-select id="type" formControlName="type" *ngIf="editMode"
                                                                  [options]="propertyTypes" optionLabel="name"
                                                                  optionValue="code" placeholder="Select Type"
                                                                  class="w-full" appendTo="body"></p-select>

                                                        <div
                                                            class=" border-b w-full pl-2.5 pr-2.5 flex justify-between items-center parent-container"
                                                            *ngIf="!editMode">
                                                            <div>
                                                                {{ propertyValue.type }}
                                                            </div>
                                                            <div class="button-container">
                                                                <p-button icon="pi pi-pencil" [text]="true" size="small"
                                                                          [rounded]="true" severity="secondary"
                                                                          (onClick)="editRecord()"></p-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-wrap gap-2 w-full">
                                                        <label class="font-bold" for="listingType">Listing Type</label>
                                                        <p-select
                                                            id="listingType"
                                                            formControlName="listing"
                                                            *ngIf="editMode"
                                                            [options]="listingTypes"
                                                            optionLabel="name"
                                                            optionValue="code"
                                                            placeholder="Select Listing Type"
                                                            class="w-full"
                                                            appendTo="body"
                                                        ></p-select>

                                                        <div
                                                            class=" border-b w-full pl-2.5 pr-2.5 flex justify-between items-center parent-container"
                                                            *ngIf="!editMode">
                                                            <div>
                                                                {{ propertyValue.listing }}
                                                            </div>
                                                            <div class="button-container">
                                                                <p-button icon="pi pi-pencil" [text]="true" size="small"
                                                                          [rounded]="true" severity="secondary"
                                                                          (onClick)="editRecord()"></p-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </p-fluid>
                                </p-fieldset>
                            </div>
                            <div class="mb-6">
                                <p-fieldset legend="Address" [toggleable]="true">
                                    <p-fluid>
                                        <div class="mb-4 mt-4" formGroupName="address">
                                            <div class=" flex flex-col gap-6 w-full" *ngIf="editMode">
                                                <div class="flex flex-wrap">
                                                    <label class="font-bold" for="street">Street</label>
                                                    <input pInputText id="street" type="text"
                                                           formControlName="street" />
                                                </div>
                                                <div class="flex flex-col md:flex-row gap-6">
                                                    <div class="flex flex-wrap gap-2 w-full">
                                                        <label class="font-bold" for="city">City</label>
                                                        <input pInputText id="city" type="text"
                                                               formControlName="city" />
                                                    </div>
                                                    <div class="flex flex-wrap gap-2 w-full">
                                                        <label class="font-bold" for="state">State</label>
                                                        <input pInputText id="state" type="text"
                                                               formControlName="state" />
                                                    </div>
                                                </div>
                                                <div class="flex flex-col md:flex-row gap-6">
                                                    <div class="flex flex-wrap gap-2 w-full">
                                                        <label class="font-bold" for="country">Country</label>
                                                        <p-select
                                                            id="country"
                                                            formControlName="country"
                                                            [options]="countryList"
                                                            optionLabel="name"
                                                            [filter]="true"
                                                            filterBy="name"
                                                            optionValue="name"
                                                            placeholder="Select Country"
                                                            class="w-full"
                                                            appendTo="body"
                                                        ></p-select>
                                                    </div>
                                                    <div class="flex flex-wrap gap-2 w-full">
                                                        <label class="font-bold" for="postal">Postal Code</label>
                                                        <input pInputText id="postal" type="text"
                                                               formControlName="postalCode" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class=" border-b w-full pl-2.5 pr-2.5 flex justify-between items-center parent-container"
                                                *ngIf="!editMode">
                                                <div>{{ propertyValue.address.street }}
                                                    , {{ propertyValue.address.city }}
                                                    , {{ propertyValue.address.state }}
                                                    , {{ propertyValue.address.country }}
                                                    , {{ propertyValue.address.postalCode }}
                                                </div>
                                                <div class="button-container">
                                                    <p-button icon="pi pi-pencil" [text]="true" size="small"
                                                              [rounded]="true" severity="secondary"
                                                              (onClick)="editRecord()"></p-button>
                                                </div>
                                            </div>
                                        </div>
                                    </p-fluid>
                                </p-fieldset>
                            </div>
                            <div class="mb-6">
                                <p-fieldset legend="Pricing" [toggleable]="true">
                                    <p-fluid>
                                        <div class="mb-4 mt-4">
                                            <div class=" flex flex-col gap-6 w-full">
                                                <div class="flex flex-col md:flex-row gap-6">
                                                    <div class="flex flex-wrap gap-2 w-full">
                                                        <div class="flex flex-wrap gap-2 w-full">
                                                            <label class="font-bold" for="originalPrice">Original
                                                                Price</label>
                                                            <p-inputnumber id="originalPrice" mode="currency"
                                                                           *ngIf="editMode"
                                                                           formControlName="originalPrice"
                                                                           currency="AED"></p-inputnumber>

                                                            <div
                                                                class=" border-b w-full pl-2.5 pr-2.5 flex justify-between items-center parent-container"
                                                                *ngIf="!editMode">
                                                                <div>
                                                                    {{ propertyValue.originalPrice | currency: 'AED ' }}
                                                                </div>
                                                                <div class="button-container">
                                                                    <p-button icon="pi pi-pencil" [text]="true"
                                                                              size="small" [rounded]="true"
                                                                              severity="secondary"
                                                                              (onClick)="editRecord()"></p-button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="flex flex-wrap gap-2 w-full">
                                                            <label class="font-bold" for="listingPrice">Listing
                                                                Price</label>
                                                            <p-inputnumber inputId="listingPrice" mode="currency"
                                                                           *ngIf="editMode" formControlName="price"
                                                                           currency="AED"></p-inputnumber>

                                                            <div
                                                                class=" border-b w-full pl-2.5 pr-2.5 flex justify-between items-center parent-container"
                                                                *ngIf="!editMode">
                                                                <div>
                                                                    {{ propertyValue.price | currency: 'AED ' }}
                                                                </div>
                                                                <div class="button-container">
                                                                    <p-button icon="pi pi-pencil" [text]="true"
                                                                              size="small" [rounded]="true"
                                                                              severity="secondary"
                                                                              (onClick)="editRecord()"></p-button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-wrap gap-2 w-full">
                                                        <div class="flex flex-wrap gap-2 w-full">
                                                            <label class="font-bold" for="totalArea">Total Area (ft<sup>2</sup>)</label>
                                                            <p-inputnumber inputId="totalArea" *ngIf="editMode"
                                                                           formControlName="totalArea"></p-inputnumber>

                                                            <div
                                                                class=" border-b w-full pl-2.5 pr-2.5 flex justify-between items-center parent-container"
                                                                *ngIf="!editMode">
                                                                <div>
                                                                    {{ propertyValue.totalArea | prefixSuffix: '' : 'ft&sup2;' }}
                                                                </div>
                                                                <div class="button-container">
                                                                    <p-button icon="pi pi-pencil" [text]="true"
                                                                              size="small" [rounded]="true"
                                                                              severity="secondary"
                                                                              (onClick)="editRecord()"></p-button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="flex flex-wrap gap-2 w-full">
                                                            <label class="font-bold" for="ratePerArea">Rate Per
                                                                Area</label>
                                                            <p-inputnumber inputId="ratePerArea" *ngIf="editMode"
                                                                           formControlName="ratePerArea"></p-inputnumber>

                                                            <div
                                                                class=" border-b w-full pl-2.5 pr-2.5 flex justify-between items-center parent-container"
                                                                *ngIf="!editMode">
                                                                <div>
                                                                    {{ propertyValue.ratePerArea | currency: 'AED ' }}
                                                                </div>
                                                                <div class="button-container">
                                                                    <p-button icon="pi pi-pencil" [text]="true"
                                                                              size="small" [rounded]="true"
                                                                              severity="secondary"
                                                                              (onClick)="editRecord()"></p-button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </p-fluid>
                                </p-fieldset>
                            </div>
                            <div class="mb-6">
                                <p-fieldset legend="Features" [toggleable]="true">
                                    <p-fluid *ngIf="editMode">
                                        <ng-container formArrayName="features">
                                            <ng-container *ngFor="let feature of featureForms.controls; let i = index">
                                                <div [formGroupName]="i" class="flex flex-col md:flex-row gap-6">
                                                    <div class="flex flex-col gap-2 w-full">
                                                        <label for="feature-{{ i }}">Feature</label>
                                                        <input pInputText id="feature-{{ i }}" type="text"
                                                               formControlName="name" />
                                                        <small class="text-red-500" *ngIf="isInvalidFeature('name', i)">Name
                                                            is required.</small>
                                                    </div>
                                                    <div class="flex flex-col gap-2 w-full">
                                                        <label for="featureDescription-{{ i }}">Description</label>
                                                        <textarea pTextarea id="featureDescription-{{ i }}" rows="2"
                                                                  formControlName="description"></textarea>
                                                    </div>
                                                    <div class="flex flex-wrap items-center">
                                                        <p-button (onClick)="removeFeature(i)" icon="pi pi-trash"
                                                                  severity="danger" [rounded]="true"
                                                                  [outlined]="true"></p-button>
                                                    </div>
                                                </div>
                                            </ng-container>
                                        </ng-container>

                                        <div class="flex flex-wrap gap-2 w-full">
                                            <p-button label="Add" variant="outlined" (onClick)="addFeature()" />
                                        </div>
                                    </p-fluid>

                                    <p-table *ngIf="!editMode" [value]="propertyValue.features" [scrollable]="true">
                                        <ng-template #header>
                                            <tr>
                                                <th>
                                                    <div
                                                        class="w-full flex justify-between items-center parent-container">
                                                        Feature
                                                        <div class="button-container">
                                                            <p-button icon="pi pi-pencil" [text]="true" size="small"
                                                                      [rounded]="true" severity="secondary"
                                                                      (onClick)="editRecord()"></p-button>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div
                                                        class="w-full flex justify-between items-center parent-container">
                                                        Description
                                                        <div class="button-container">
                                                            <p-button icon="pi pi-pencil" [text]="true" size="small"
                                                                      [rounded]="true" severity="secondary"
                                                                      (onClick)="editRecord()"></p-button>
                                                        </div>
                                                    </div>
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
                                </p-fieldset>
                            </div>

                            <div class="flex gap-2 justify-center mt-4" *ngIf="editMode">
                                <p-button label="Cancel" severity="danger" [text]="true" icon="pi pi-times" class="mr-2"
                                          (onClick)="cancelEdit()" />
                                <p-button label="Save" variant="outlined" icon="pi pi-pencil" type="submit" />
                            </div>
                        </form>
                    </p-tabpanel>
                    <p-tabpanel value="1">
                        <p class="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed
                            quia non numquam eius modi.
                        </p>
                    </p-tabpanel>
                    <p-tabpanel value="2">
                        <p class="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in
                            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                            rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
                            optio cumque nihil impedit quo minus.
                        </p>
                    </p-tabpanel>
                </p-tabpanels>
            </p-tabs>
        </div>
        <p-toast />
    `,
    providers: [CountryService, OptionService, ProjectService, PropertyService, MessageService]
})
export class PropertyEdit implements OnInit {
    propertyTypes: any[] = [];

    listingTypes: any[] = [];

    statuses: any[] = [];

    country = null;

    project = null;

    countryService = inject(CountryService);

    countryList: Country[] | undefined;

    autoFilteredValue: any[] = [];

    record = signal<Property>({});

    recordId!: string | null;

    private readonly route = inject(ActivatedRoute);

    recordForm: FormGroup;

    editMode: boolean = false;

    submitted: boolean = false;

    constructor(
        private projectService: ProjectService,
        private propertyService: PropertyService,
        private optionService: OptionService,
        private messageService: MessageService,
        private _location: Location,
        private fb: FormBuilder
    ) {
        this.recordForm = this.fb.group({
            id: new FormControl(null),
            name: new FormControl(null, { validators: [Validators.required] }),
            description: new FormControl(null),
            price: new FormControl(null),
            originalPrice: new FormControl(null),
            totalArea: new FormControl(null),
            ratePerArea: new FormControl(null),
            rooms: new FormControl(null),
            type: new FormControl(null),
            projectId: new FormControl(null),
            project: new FormControl(null, { validators: [Validators.required] }),
            listing: new FormControl(null),
            unitNo: new FormControl(null),
            plotNo: new FormControl(null),
            villaNo: new FormControl(null),
            buildingNo: new FormControl(null),
            address: this.fb.group({
                street: [''],
                city: [''],
                state: [''],
                country: [''],
                postalCode: ['']
            }),
            status: new FormControl(null),
            features: this.fb.array([])
        });
    }

    ngOnInit() {
        this.loadRecord();

        this.loadOptions();
    }

    loadRecord() {
        this.recordId = this.route.snapshot.paramMap.get('id');
        if (this.recordId) {
            this.propertyService.getPropertyById(this.recordId).subscribe({
                next: (result) => {
                    this.record.set(result);
                    this.recordForm.patchValue(result);
                    this.record().features?.map((data) => this.addFeature(data));
                }
            });
        } else {
            this.editMode = true;
        }
    }

    loadOptions() {
        this.countryService.getCountries().then((countries) => {
            this.countryList = countries;
        });

        this.optionService.getPropertyTypes().subscribe({
            next: (result) => {
                this.propertyTypes = result;
            }
        });
        this.optionService.getPropertyListing().subscribe({
            next: (result) => {
                this.listingTypes = result;
            }
        });
        this.optionService.getPropertyStatus().subscribe({
            next: (result) => {
                this.statuses = result;
            }
        });
    }

    get featureForms() {
        return this.recordForm.controls['features'] as FormArray;
    }

    private createFeature(feature?: Feature): FormGroup {
        return this.fb.group({
            name: [feature?.name || null, Validators.required],
            description: [feature?.description || null]
        });
    }

    addFeature(feature?: Feature) {
        this.featureForms.push(this.createFeature(feature));
    }

    removeFeature(index: number) {
        this.featureForms.removeAt(index);
    }

    featuresIndex(index: number) {
        return this.featureForms.controls.at(index);
    }

    // Check if a control is invalid
    isInvalidFeature(controlName: string, index: number): boolean {
        const control = (this.featuresIndex(index) as FormGroup).get(controlName);
        return (control?.invalid && (control?.dirty || control?.touched)) || false;
    }

    goBack() {
        this._location.back();
    }

    filterProjects(event: AutoCompleteCompleteEvent) {
        const query = event.query;
        this.projectService.getProjectsByName(query).subscribe({
            next: (data) => {
                this.autoFilteredValue = data;
            }
        });
    }

    get propertyValue() {
        return this.recordForm.getRawValue();
    }

    editRecord() {
        this.editMode = true;
    }

    cancelEdit() {
        if (!this.recordId) {
            this._location.back();
            return;
        }
        this.editMode = false;
        this.recordForm.reset(this.record());
        this.featureForms.clear();
        this.record().features?.map((data) => this.addFeature(data));

        this.submitted = false;
    }

    saveRecord() {
        this.submitted = true;

        if (this.recordForm.valid) {
            if (this.recordId) {
                this.propertyService.putProperty(this.recordId, this.recordForm.value).subscribe({
                    next: () => {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Successful',
                            detail: 'Record Update',
                            life: 3000
                        });
                        this.editMode = false;
                        this.submitted = false;
                    },
                    error: (err) => {
                        this.editMode = false;
                        this.recordForm.reset(this.record());
                        this.submitted = false;

                        this.errorMessage();
                    }
                });
            } else {
                const property: Property = this.recordForm.value;
                property.projectId = property.project?.id;
                this.propertyService.postProperty(this.recordForm.value).subscribe({
                    next: () => {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Successful',
                            detail: 'Record Created',
                            life: 3000
                        });
                        this.editMode = false;
                        this.submitted = false;
                    },
                    error: (err) => {
                        this.errorMessage();
                    }
                });
            }
        } else {
            this.markAllAsTouched(this.recordForm);
        }
    }

    markAllAsTouched(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach((field) => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.markAllAsTouched(control); // Recursive call for nested FormGroup
            } else if (control instanceof FormArray) {
                control.controls.forEach((ctrl) => {
                    if (ctrl instanceof FormGroup) {
                        this.markAllAsTouched(ctrl);
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

    get recordFormControl() {
        return this.recordForm.controls;
    }
}
