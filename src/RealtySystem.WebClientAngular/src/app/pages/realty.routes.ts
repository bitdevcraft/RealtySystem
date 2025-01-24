import { Routes } from '@angular/router';

export default [
    { path: 'listing', loadChildren: () => import('./listing/listing.routes') },
    { path: 'booking', loadChildren: () => import('./bookingmanagement/booking.routes') },
    { path: 'customer-management', loadChildren: () => import('./customermanagement/customermanagement.routes') }
] as Routes;
