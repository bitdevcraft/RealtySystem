import { Routes } from '@angular/router';
import {CommunityView} from "./community/community.view";
import {PropertyView} from "./property/property.view";
import {PaymentplanView} from "./paymentplan/paymentplan.view";
import {ProjectView} from "./project/project.view";
import {PropertyEdit} from "./property/property.edit";

export default [
    { path: 'community', component: CommunityView },
    { path: 'project', component: ProjectView },
    { path: 'property', component: PropertyView },
    { path: 'property/add', component: PropertyEdit },
    { path: 'payment-plan', component: PaymentplanView }
] as Routes;
