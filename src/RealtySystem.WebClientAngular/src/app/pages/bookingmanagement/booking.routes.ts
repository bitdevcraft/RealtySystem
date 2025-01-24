import { Routes } from '@angular/router';
import { BookingView } from './booking/booking.view';
import { BookingNew } from './booking/booking.new';
import { BookingEdit } from './booking/booking.edit';

export default [
    {
        path: 'booking',
        component: BookingView
    },
    {
        path: 'booking/new',
        component: BookingNew
    },
    {
        path: 'booking/details/:id',
        component: BookingEdit
    }
] as Routes;
