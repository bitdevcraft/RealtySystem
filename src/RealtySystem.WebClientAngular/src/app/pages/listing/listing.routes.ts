import { Routes } from '@angular/router';
import { CommunityView } from './community/community.view';
import { PropertyView } from './property/property.view';
import { PaymentplanView } from './paymentplan/paymentplan.view';
import { ProjectView } from './project/project.view';
import { PropertyEdit } from './property/property.edit';
import { PaymentplanEdit } from './paymentplan/paymentplan.edit';
import { ProjectEdit } from './project/project.edit';

export default [
    { path: 'community', component: CommunityView },
    { path: 'project', component: ProjectView },
    { path: 'project/add', component: ProjectEdit },
    { path: 'project/details/:id', component: ProjectEdit },
    { path: 'property', component: PropertyView },
    { path: 'property/add', component: PropertyEdit },
    { path: 'property/details/:id', component: PropertyEdit },
    { path: 'payment-plan', component: PaymentplanView },
    { path: 'payment-plan/add', component: PaymentplanEdit },
    { path: 'payment-plan/details/:id', component: PaymentplanEdit }
] as Routes;
