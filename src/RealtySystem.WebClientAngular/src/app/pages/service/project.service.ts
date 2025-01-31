import { Injectable } from '@angular/core';
import { Community } from './community.service';
import { Property } from './property.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';

export interface Project {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    communityId?: string | null;
    community?: Community | null;
    properties?: Property[];
}

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    constructor(private http: HttpClient) {}

    private apiUrl = '/api/projects';
    private apiUrlCommunities = '/api/communities';

    getProjects() {
        return this.http.get<Project[]>(`${this.apiUrl}`);
    }

    getProjectsWithCommunity(): Observable<Project[]> {
        return this.http.get<Project[]>(`${this.apiUrl}?_expand=community`);
    }

    getProjectsByName(name: string) {
        return this.http.get<Project[]>(`${this.apiUrl}?name_like=${name}`);
    }

    getProjectById(id: string) {
        return this.http.get<Project>(`${this.apiUrl}/${id}?_expand=community`);
    }
}
