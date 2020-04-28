import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Activity } from '../models/activities';

@Injectable({
    providedIn: 'root'
})
export class ActivityTypeService {

    constructor(private http: HttpClient) { };

    private readonly apiUrl = 'http://localhost:3000/activityType';

    create(activityType) {
        return this.http.post(`${this.apiUrl}`, activityType);
    }

    list() {
        return this.http.get(`${this.apiUrl}/list`);
    }
}
