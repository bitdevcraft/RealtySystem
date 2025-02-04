import { Injectable } from '@angular/core';
import { Community } from './community.service';
import { Property } from './property.service';
import { HttpClient, HttpParams } from '@angular/common/http';
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

    getProjects(params: HttpParams) {
        return this.http.get<Project[]>(`${this.apiUrl}`, { params, observe: 'response' });
    }

    getProjectsWithCommunity(): Observable<Project[]> {
        return this.http.get<Project[]>(`${this.apiUrl}?_expand=community`);
    }

    getProjectsWithCommunityWithPage(page: number, pageSize: number) {
        return this.http.get<Project[]>(`${this.apiUrl}?_expand=community&_page=${page}&_limit=${pageSize}`, { observe: 'response' });
    }

    getProjectsByName(name: string) {
        return this.http.get<Project[]>(`${this.apiUrl}?name_like=${name}`);
    }

    getProjectById(id: string) {
        return this.http.get<Project>(`${this.apiUrl}/${id}?_expand=community`);
    }

    postProject(project: Project) {
        return this.http.post<Project>(this.apiUrl, project);
    }

    putProject(id: string, project: Project) {
        return this.http.put<Project>(`${this.apiUrl}/${id}`, project);
    }

    deleteProject(id: string) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
