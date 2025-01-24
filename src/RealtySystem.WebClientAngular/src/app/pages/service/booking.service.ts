import { Injectable, signal } from '@angular/core';
import { Property } from './property.service';
import { SchedulePlan } from './paymentplan.service';
import { Subject } from 'rxjs';

export interface BookingFee {
    name: string | null;
    amount: number | null;
    dueDate: number | null;
}

export interface Booking {
    id?: string | null;
    name?: string | null;
    propertyId?: string | null;
    property?: Property | null;
    // account
    accountId?: string | null;
    // mainBuyer
    mainBuyerId?: string | null;
    coBuyers?: [] | null;

    status?: string | null;
    schedulePlan?: SchedulePlan[] | null;
    salePrice?: number | null;
    totalPrice?: number | null;
    remarks?: string | null;

    nextPaymentAmount?: number | null;
    nextPaymentDate?: Date | null;
}

@Injectable({
    providedIn: 'root'
})
export class BookingService {
    booking = signal<Booking>({});

    private bookingUpdate = new Subject<Booking>();

    bookingUpdate$ = this.bookingUpdate.asObservable();

    constructor() {}
}
