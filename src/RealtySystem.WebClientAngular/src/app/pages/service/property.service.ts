import { inject, Injectable } from '@angular/core';
import { Project } from './project.service';
import { Address } from './interface/address';
import { IForm, ToFormControls } from './type/IForm';
import { FilterCriterion, GenericService, MatchType } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { Community } from './community.service';
import { map } from 'rxjs/operators';

export interface Feature {
    name?: string | null;
    description?: string | null;
}

export interface Property {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    price?: number | null; // product of totalArea and ratePerArea
    originalPrice?: number | null;
    totalArea?: number | null;
    ratePerArea?: number | null;
    rooms?: number | null;
    type?: string | null; // Unit, Plot, Villa
    projectId?: string | null;
    project?: Project | null;
    features?: Feature[];
    listing?: string | null; // Rental, Sale
    address?: Address | any;
    status?: string | null; // Available, Sold, Hold, Not Available, Draft, Rented
    unitNo?: string | null;
    plotNo?: string | null;
    villaNo?: string | null;
    buildingNo?: string | null;
}

export type PropertyForm = ToFormControls<Property>;

@Injectable({
    providedIn: 'root'
})
export class PropertyService {
    genericService = inject(GenericService);

    private apiUrl = '/api/properties';
    private apiUrlProjects = '/api/projects';

    constructor(private http: HttpClient) {}

    getProperties() {
        return this.http.get<Property[]>(this.apiUrl);
    }

    getPropertiesWithProject(): Observable<Property[]> {
        return this.http.get<Property[]>(`${this.apiUrl}?_expand=project`);
    }

    getPropertyById(id: string) {
        return this.http.get<Property>(`${this.apiUrl}/${id}?_expand=project`);
    }

    getPropertyByProject(projectId: string) {
        return this.http.get<Property[]>(`${this.apiUrl}?projectId=${projectId}`);
    }

    getFilteredProperty(criteria: FilterCriterion<Property>[], matchType: MatchType) {
        return this.getPropertiesWithProject().pipe(
            map((data: any) => {
                return this.genericService.filterWithOperators(data, criteria, matchType);
            })
        );
    }
}
