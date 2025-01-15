import {Component} from '@angular/core';
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
        FluidModule
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
                        <p-button label="Edit" severity="secondary" variant="outlined" icon="pi pi-pencil"/>
                        <p-button label="Quick Action" severity="secondary" variant="outlined"/>
                        <p-button label="Preview" severity="secondary" variant="outlined"/>
                    </p-buttongroup>

                </div>
            </ng-template>
        </p-toolbar>

        <div class="">
            <p-tabs value="0" scrollable>
                <p-tablist>
                    <p-tab value="0">Details</p-tab>
                    <p-tab value="1">Marketing and Media</p-tab>
                    <p-tab value="2">Documents</p-tab>
                </p-tablist>
                <p-tabpanels>
                    <p-tabpanel value="0">
                        <p-accordion [value]="['0', '1', '2','3']" [multiple]="true">
                            <p-accordion-panel value="0" >
                                <p-accordion-header>Property Details</p-accordion-header>
                                <p-accordion-content>
                                    <p-fluid>
                                        <div class="mb-4">
                                            <div class=" flex flex-col gap-6 w-full">
                                                <div class="flex flex-col md:flex-row gap-6">
                                                    <div class="flex flex-wrap gap-2 w-full">
                                                        <label for="name">Name</label>
                                                        <input pInputText id="name" type="text"/>
                                                    </div>
                                                    <div class="flex flex-wrap gap-2 w-full">
                                                        <label for="project">Project</label>
                                                        <input pInputText id="project" type="text"/>
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
                                </p-accordion-content>
                            </p-accordion-panel>
                            <p-accordion-panel value="1">
                                <p-accordion-header>Address</p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore
                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut
                                        aliquip
                                        ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu
                                        fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                        officia deserunt
                                        mollit anim id est
                                        laborum.
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>

                            <p-accordion-panel value="2">
                                <p-accordion-header>Pricing</p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore
                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut
                                        aliquip
                                        ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu
                                        fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                        officia deserunt
                                        mollit anim id est
                                        laborum.
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>

                            <p-accordion-panel value="3">
                                <p-accordion-header>Features</p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut
                                        labore et dolore
                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut
                                        aliquip
                                        ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu
                                        fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                        officia deserunt
                                        mollit anim id est
                                        laborum.
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>

                        </p-accordion>
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




    `
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
}
