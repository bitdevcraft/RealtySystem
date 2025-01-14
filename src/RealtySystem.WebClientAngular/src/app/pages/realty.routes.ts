import { Routes } from '@angular/router';


export default [
    { path: 'listing', loadChildren: () => import("./listing/listing.routes")},
    { path: 'customer-management', loadChildren: () => import("./customermanagement/customermanagement.routes")}
] as Routes;
