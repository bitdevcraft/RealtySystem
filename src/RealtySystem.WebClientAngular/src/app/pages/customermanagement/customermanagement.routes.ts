import { Routes } from '@angular/router';
import { AccountView } from './account/account.view';
import { LeadView } from './lead/lead.view';
import { ContactView } from './contact/contact.view';
import { OpportunityView } from './opportunity/opportunity.view';

export default [
    { path: 'lead', component: LeadView },
    { path: 'account', component: AccountView },
    { path: 'contact', component: ContactView },
    { path: 'opportunity', component: OpportunityView }
] as Routes;
