import {Component, inject} from '@angular/core';
import {FieldsetModule} from "primeng/fieldset";
import {AccordionModule} from "primeng/accordion";
import {Button, ButtonDirective, ButtonIcon, ButtonLabel} from "primeng/button";
import {PlusIcon} from "primeng/icons";
import {RouterLink} from "@angular/router";
import {Toolbar} from "primeng/toolbar";
import {ButtonGroupModule} from "primeng/buttongroup";
import {TabsModule} from "primeng/tabs";
import {InputText} from "primeng/inputtext";
import {Select} from "primeng/select";
import {Textarea} from "primeng/textarea";
import {FormsModule} from "@angular/forms";
import {Fluid, FluidModule} from "primeng/fluid";
import {CountryService} from "../../service/country.service";
import {Country} from "../../service/customer.service";
import {MenuItem} from "primeng/api";
import {SplitButton, SplitButtonModule} from "primeng/splitbutton";
import {AutoComplete, AutoCompleteCompleteEvent} from "primeng/autocomplete";
import {ProjectService} from "../../service/project.service";
import {Feature} from "../../service/property.service";
import {TableModule} from "primeng/table";
import {PanelModule} from "primeng/panel";
import {InputNumberModule} from "primeng/inputnumber";

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
        InputNumberModule
    ],
    template: `
        <p-toolbar styleClass="mb-6">
            <ng-template #start>
                <div class="flex flex-col pl-2">
                    <div>
                        Property
                    </div>
                    <div>
                        Name
                    </div>
                </div>
            </ng-template>

            <ng-template #end>
                <div>
                    <p-buttongroup>
                        <!--                        <p-button label="Save" variant="outlined" icon="pi pi-pencil"/>-->
                        <!--                        <p-button label="Cancel" severity="danger" variant="outlined" icon="pi pi-times"/>-->
                        <!--                        <p-button label="Edit" severity="secondary" variant="outlined" icon="pi pi-pencil"/>-->
                        <!--                        <p-button label="Quick Action" severity="secondary" variant="outlined"/>-->
                        <!--                        <p-button label="Preview" severity="secondary" variant="outlined"/>-->
                    </p-buttongroup>

                </div>
            </ng-template>
        </p-toolbar>

        <div class="mb-6">
            <p-tabs value="0" scrollable>
                <p-tablist>
                    <p-tab value="0">Details</p-tab>
                    <p-tab value="1">Marketing and Media</p-tab>
                    <p-tab value="2">Documents</p-tab>
                </p-tablist>
                <p-tabpanels>
                    <p-tabpanel value="0">
                        <div class="mb-6">
                            <p-fieldset legend="Property Details" [toggleable]="true">
                                <p-fluid>
                                    <div class="mb-4">
                                        <div class=" flex flex-col gap-6 w-full">
                                            <div class="flex flex-col md:flex-row gap-6">
                                                <div class="flex flex-wrap gap-2 w-full">
                                                    <label for="name">Name</label>
                                                    <input pInputText id="name" type="text"/>
                                                </div>
                                                <div class="flex flex-wrap flex-col gap-2 w-full">
                                                    <label for="project">Project</label>
                                                    <p-autocomplete inputId="project" [(ngModel)]="project"
                                                                    [suggestions]="autoFilteredValue"
                                                                    optionLabel="name" placeholder="Search"
                                                                    (completeMethod)="filterProjects($event)"
                                                    ></p-autocomplete>
                                                </div>
                                            </div>

                                            <div class="flex flex-wrap">
                                                <label for="description">Description</label>
                                                <textarea pTextarea id="description" rows="4"></textarea>
                                            </div>

                                            <div class="flex flex-col md:flex-row gap-6">
                                                <div class="flex flex-wrap gap-2 w-full">
                                                    <label for="type">Property Type</label>
                                                    <p-select id="type" [(ngModel)]="propertyType"
                                                              [options]="propertyTypes" optionLabel="name"
                                                              placeholder="Select Type" class="w-full"
                                                              appendTo="body"
                                                    ></p-select>
                                                </div>
                                                <div class="flex flex-wrap gap-2 w-full">
                                                    <label for="listingType">Listing Type</label>
                                                    <p-select id="listingType" [(ngModel)]="listingType"
                                                              [options]="listingTypes" optionLabel="name"
                                                              placeholder="Select Listing Type" class="w-full"
                                                              appendTo="body"
                                                    ></p-select>
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
                                    <div class="mb-4">
                                        <div class=" flex flex-col gap-6 w-full">

                                            <div class="flex flex-wrap">
                                                <label for="street">Street</label>
                                                <input pInputText id="street" type="text"/>
                                            </div>

                                            <div class="flex flex-col md:flex-row gap-6">
                                                <div class="flex flex-wrap gap-2 w-full">
                                                    <label for="city">City</label>
                                                    <input pInputText id="city" type="text"/>
                                                </div>
                                                <div class="flex flex-wrap gap-2 w-full">
                                                    <label for="state">State</label>
                                                    <input pInputText id="state" type="text"/>
                                                </div>
                                            </div>

                                            <div class="flex flex-col md:flex-row gap-6">
                                                <div class="flex flex-wrap gap-2 w-full">
                                                    <label for="country">Country</label>
                                                    <p-select id="country" [(ngModel)]="country"
                                                              [options]="countryList" optionLabel="name"
                                                              [filter]="true"
                                                              filterBy="name"
                                                              optionValue="name"
                                                              placeholder="Select Country" class="w-full"
                                                              appendTo="body"
                                                    ></p-select>
                                                </div>
                                                <div class="flex flex-wrap gap-2 w-full">
                                                    <label for="postal">Postal Code</label>
                                                    <input pInputText id="postal" type="text"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </p-fluid>
                            </p-fieldset>
                        </div>

                        <div class="mb-6">
                            <p-fieldset legend="Pricing" [toggleable]="true">
                                <p-fluid>
                                    <div class="mb-4">
                                        <div class=" flex flex-col gap-6 w-full">

                                            <div class="flex flex-col md:flex-row gap-6">
                                                <div class="flex flex-wrap gap-2 w-full">
                                                    <div class="flex flex-wrap gap-2 w-full">
                                                        <label for="originalPrice">Original Price</label>
                                                        <p-inputnumber id="originalPrice" mode="currency" currency="AED"/>
                                                    </div>
                                                    <div class="flex flex-wrap gap-2 w-full">
                                                        <label for="listingPrice">Listing Price</label>
                                                        <p-inputnumber id="listingPrice" mode="currency" currency="AED"/>
                                                    </div>
                                                </div>

                                                <div class="flex flex-wrap gap-2 w-full">
                                                    <div class="flex flex-wrap gap-2 w-full">
                                                        <label for="totalArea">Total Area (ft<sup>2</sup>)</label>
                                                        <p-inputnumber inputId="totalArea" />
                                                    </div>
                                                    <div class="flex flex-wrap gap-2 w-full">
                                                        <label for="ratePerArea">Rate Per Area</label>
                                                        <p-inputnumber inputId="ratePerArea" />
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
                                <p-fluid>
                                    <div class="mb-4">
                                        <div class=" flex flex-col gap-6 w-full">

                                            <div class="flex flex-col md:flex-row gap-6">
                                                <div class="flex flex-wrap gap-2 w-full">
                                                    <div class="flex flex-wrap gap-2 w-full">
                                                        <label for="Feature">Feature</label>
                                                        <input pInputText id="city" type="text"/>
                                                    </div>
                                                    <div class="flex flex-wrap gap-2 w-full">
                                                        <label for="featureDescription">Description</label>
                                                        <textarea pTextarea id="featureDescription"
                                                                  rows="4"></textarea>
                                                    </div>
                                                    <div class="flex flex-wrap gap-2 w-full">
                                                        <p-button label="Add" variant="outlined"/>

                                                    </div>
                                                </div>

                                                <div class="flex flex-wrap gap-2 w-full">
                                                    <div class="flex flex-wrap gap-2 w-full">
                                                        <p-table [value]="features" stripedRows
                                                                 [tableStyle]="{'min-width': '50rem'}">
                                                            <ng-template #header>
                                                                <tr>
                                                                    <th>Feature</th>
                                                                    <th>Description</th>
                                                                    <th></th>

                                                                </tr>
                                                            </ng-template>
                                                            <ng-template #body let-feature>
                                                                <tr>
                                                                    <td>{{ feature.name }}</td>
                                                                    <td>{{ feature.description }}</td>
                                                                    <td>
                                                                        <p-button icon="pi pi-pencil" class="mr-2"
                                                                                  [rounded]="true"
                                                                                  [outlined]="true"/>
                                                                        <p-button icon="pi pi-trash"
                                                                                  severity="danger" [rounded]="true"
                                                                                  [outlined]="true"/>
                                                                    </td>
                                                                </tr>
                                                            </ng-template>
                                                        </p-table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </p-fluid>
                            </p-fieldset>
                        </div>


                    </p-tabpanel>
                    <p-tabpanel value="1">
                        <p class="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem
                            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni
                            dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non
                            numquam eius
                            modi.
                        </p>
                    </p-tabpanel>
                    <p-tabpanel value="2">
                        <p class="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti
                            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                            provident, similique
                            sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
                            quidem rerum
                            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                            cumque nihil
                            impedit quo minus.
                        </p>
                    </p-tabpanel>
                </p-tabpanels>
            </p-tabs>
        </div>

        <div class="card">
            <p-fluid>
                <div class="flex gap-2 justify-center">
                    <p-button label="Save" variant="outlined" icon="pi pi-pencil"/>
                    <p-button label="Cancel" severity="danger" variant="outlined" icon="pi pi-times"/>
                </div>
            </p-fluid>
        </div>


    `,
    providers: [CountryService]

})
export class PropertyEdit {
    propertyTypes = [
        {name: 'Unit', code: 'Unit'},
        {name: 'Villa', code: 'Villa'},
        {name: 'Plot', code: 'Plot'}
    ];

    listingTypes = [
        {name: 'Sale', code: 'Sale'},
        {name: 'Rental', code: 'Rental'}
    ];

    propertyType = null;
    listingType = null;
    country = null;
    project = null;

    countryService = inject(CountryService);

    countryList: Country[] | undefined

    items: MenuItem[] = [];

    autoFilteredValue: any[] = [];

    features: Feature[] = []

    constructor(private projectService: ProjectService) {
    }

    ngOnInit() {
        this.countryService.getCountries().then((countries) => {
            this.countryList = countries;
        });

        this.items = [{label: 'Update', icon: 'pi pi-refresh'}, {
            label: 'Delete',
            icon: 'pi pi-times'
        }, {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'}, {separator: true}, {
            label: 'Setup',
            icon: 'pi pi-cog'
        }];

    }

    filterProjects(event: AutoCompleteCompleteEvent) {
        const query = event.query;
        this.projectService.getProjectsByName(query)
            .then(data => this.autoFilteredValue = data);
    }
}
