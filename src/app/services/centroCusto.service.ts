import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Activity } from '../models/activities';

@Injectable({
    providedIn: 'root'
})
export class CentroCustoService {

    constructor(private http: HttpClient) { };

    private readonly apiUrl = 'http://localhost:3000/centroCusto';

    create(centroCusto) {
        return this.http.post(`${this.apiUrl}`, centroCusto);
    }

    list() {
        return this.http.get(`${this.apiUrl}/list`);
    }
}
