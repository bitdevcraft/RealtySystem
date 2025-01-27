import { Routes } from '@angular/router';
import { BookingView } from './booking/booking.view';
import { BookingNew } from './booking/booking.new';
import { BookingEdit } from './booking/booking.edit';

export default [
    {
        path: '',
        component: BookingView
    },
    {
        path: 'new',
        component: BookingNew
    },
    {
        path: 'details/:id',
        component: BookingEdit
    }
] as Routes;
