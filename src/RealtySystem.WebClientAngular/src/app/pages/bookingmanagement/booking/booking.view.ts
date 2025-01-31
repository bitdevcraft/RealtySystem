import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { Button, ButtonDirective, ButtonIcon, ButtonLabel } from 'primeng/button';
import { PlusIcon } from 'primeng/icons';
import { RouterLink } from '@angular/router';
import { Toolbar } from 'primeng/toolbar';
import { Booking, BookingService } from '../../service/booking.service';
import { Table, TableModule } from 'primeng/table';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';

@Component({
    selector: 'booking-view',
    imports: [Button, ButtonDirective, ButtonIcon, ButtonLabel, PlusIcon, RouterLink, Toolbar, TableModule, IconField, InputIcon, InputText],
    template: `
        <p-toolbar styleClass="mb-6">
            <ng-template #start>
                <a routerLink="/realty/booking/new" pButton class="mr-2" severity="secondary">
                    <PlusIcon pButtonIcon />
                    <span pButtonLabel>New</span>
                </a>
            </ng-template>

            <ng-template #end></ng-template>
        </p-toolbar>

        <p-table
            #dt
            [value]="records()"
            [rows]="10"
            [paginator]="true"
            [globalFilterFields]="['name', 'description', 'project.name']"
            [tableStyle]="{ 'min-width': '75rem' }"
            [rowHover]="true"
            dataKey="id"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} records"
            [showCurrentPageReport]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
        >
            <ng-template #caption>
                <div class="flex items-center justify-between">
                    <h5 class="m-0">Bookings</h5>
                    <div class="flex gap-2">
                        <p-iconfield>
                            <p-inputicon styleClass="pi pi-search" />
                            <input pInputText type="text" (input)="onGlobalFilter(dt, $event)" placeholder="Search..." />
                        </p-iconfield>
                        <p-button label="Clear" icon="pi pi-filter-slash" severity="secondary" class="p-button-outlined mb-2" (onClick)="clear(dt)" />
                    </div>
                </div>
            </ng-template>
            <ng-template #header>
                <tr>
                    <th style="min-width: 12rem">Name</th>
                    <th style="min-width: 12rem;">Project</th>
                    <th style="min-width: 12rem;">Book Date</th>
                    <th style="min-width: 12rem;">Status</th>
                    <th style="min-width: 4rem;"></th>
                </tr>
            </ng-template>
            <ng-template #body let-record>
                <tr>
                    <td>{{ record.name }}</td>
                    <td>{{ record.project.name }}</td>
                    <td>{{ record.bookingDate }}</td>
                    <td>{{ record.status }}</td>
                    <td>
                        <p-button icon="pi pi-search" [rounded]="true"></p-button>
                    </td>
                </tr>
            </ng-template>
            <ng-template #emptymessage>
                <tr>
                    <td colspan="5" style="text-align: center">There are no bookings found.</td>
                </tr>
            </ng-template>
        </p-table>
    `
})
export class BookingView {
    records = signal<Booking[]>([]);

    record!: Booking;

    @ViewChild('dt') dt!: Table;

    @ViewChild('filter') filter!: ElementRef;

    autoFilteredValue: any[] = [];

    status: any[] = [];

    constructor(private bookingService: BookingService) {}

    ngOnInit() {}

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    clear(table: Table) {
        table.clear();
        if (this.filter) this.filter.nativeElement.value = '';
    }
}
