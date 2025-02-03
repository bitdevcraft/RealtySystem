import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Option {
    id?: string | null;
    type?: string | null;
    order?: number | null;
    label?: string | null;
    code?: string | null;
}

@Injectable({
    providedIn: 'root'
})
export class OptionService {
    constructor(private http: HttpClient) {}

    private apiUrl = 'api/options';

    getPropertyTypes() {
        const type = 'PropertyType';
        return this.http.get<Option[]>(`${this.apiUrl}?type=${type}`);
    }

    getPropertyStatus() {
        const type = 'PropertyStatus';
        return this.http.get<Option[]>(`${this.apiUrl}?type=${type}`);
    }

    getPropertyListing() {
        const type = 'ListingType';
        return this.http.get<Option[]>(`${this.apiUrl}?type=${type}`);
    }

    getNumberComparisonOperator() {
        const type = 'NumberComparison';
        return this.http.get<Option[]>(`${this.apiUrl}?type=${type}`);
    }

    getMatchType() {
        const type = 'MatchType';
        return this.http.get<Option[]>(`${this.apiUrl}?type=${type}`);
    }

    getIntervalType() {
        const type = 'IntervalType';
        return this.http.get<Option[]>(`${this.apiUrl}?type=${type}`);
    }
}
