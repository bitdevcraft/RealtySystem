import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class OptionService {
    constructor() {}

    getPropertyTypes() {
        return Promise.resolve([
            { name: 'Unit', code: 'Unit' },
            { name: 'Villa', code: 'Villa' },
            { name: 'Plot', code: 'Plot' }
        ]);
    }

    getPropertyStatus() {
        return Promise.resolve([
            { name: 'Draft', code: 'Draft' },
            { name: 'Available', code: 'Available' },
            { name: 'Sold', code: 'Sold' },
            { name: 'Hold', code: 'Hold' },
            { name: 'Not For Sale', code: 'Not For Sale' }
        ]);
    }

    getPropertyListing() {
        return Promise.resolve([
            { name: 'Sale', code: 'Sale' },
            { name: 'Rental', code: 'Rental' }
        ]);
    }

    getNumberComparisonOperator() {
        return Promise.resolve([
            { name: 'Equals', code: 'eq' },
            { name: 'Not equals', code: 'neq' },
            { name: 'Less than', code: 'lt' },
            { name: 'Less than or equal to', code: 'lte' },
            { name: 'Greater than', code: 'gt' },
            { name: 'Greater than or equal to', code: 'gte' }
        ]);
    }

    getMatchType() {
        return Promise.resolve([
            { name: 'Match Any', code: 'any' },
            { name: 'Match All', code: 'all' }
        ]);
    }

    getIntervalType() {
        return Promise.resolve([
            { name: 'day', code: 'day' },
            { name: 'week', code: 'week' },
            { name: 'month', code: 'month' },
            { name: 'year', code: 'year' }
        ]);
    }
}
