import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Activity } from '../models/activities';

@Injectable({
    providedIn: 'root'
})
export class ActivitiesService {

    constructor(private http: HttpClient) { };

    private readonly apiUrl = 'http://localhost:3000/activities';

    create(activity: Activity) {
        return this.http.post(`${this.apiUrl}`, activity);
    }

    listTotalHours(user) {
        return this.http.get(`${this.apiUrl}/totalHours?user=${user}`);
    }
    
    totalByProject(user) {
        return this.http.get(`${this.apiUrl}/totalByProject?user=${user}`);
    }

    totalByActivityType(user) {
        return this.http.get(`${this.apiUrl}/totalByActivityType?user=${user}`)
    }

    listByUser(user) {
        return this.http.get(`${this.apiUrl}?user=${user}`);
    }

    listActivityById(id) {
        return this.http.get(`${this.apiUrl}/findby/${id}`);
    }

}
