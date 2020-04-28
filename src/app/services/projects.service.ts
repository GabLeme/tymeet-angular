import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Activity } from '../models/activities';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {

    constructor(private http: HttpClient) { };

    private readonly apiUrl = 'http://localhost:3000/projects';

    create(project) {
        return this.http.post(`${this.apiUrl}`, project);
    }

    list(user) {
        return this.http.get(`${this.apiUrl}/list?user=${user}`);
    }
}
