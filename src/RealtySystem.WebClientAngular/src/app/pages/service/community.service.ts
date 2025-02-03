import { Injectable } from '@angular/core';
import { Project } from './project.service';
import { HttpClient } from '@angular/common/http';

export interface Community {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    city?: string | null;
    country?: string | null;
    project?: Project[];
}

@Injectable({
    providedIn: 'root'
})
export class CommunityService {
    constructor(private http: HttpClient) {}

    private apiUrl = '/api/communities';
    private communities: Community[] = [];

    getCommunities() {
        return this.http.get<Community[]>(this.apiUrl);
    }

    getCommunitiesByName(name: string) {
        return this.http.get<Community[]>(`${this.apiUrl}?name_like=${name}`);
    }

    postCommunity(community: Community) {
        return this.http.post<Community>(this.apiUrl, community);
    }

    putCommunity(id: string, community: Community) {
        return this.http.put<Community>(`${this.apiUrl}/${id}`, community);
    }

    deleteCommunity(id: string) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
