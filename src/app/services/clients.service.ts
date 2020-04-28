import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Activity } from '../models/activities';

@Injectable({
    providedIn: 'root'
})
export class ClientsService {

    constructor(private http: HttpClient) { };

    private readonly apiUrl = 'http://localhost:3000/clients';

    create(client) {
        return this.http.post(`${this.apiUrl}`, client);
    }

    list() {
        return this.http.get(`${this.apiUrl}/list`);
    }
}
