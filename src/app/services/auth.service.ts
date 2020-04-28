import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { };

  private readonly apiUrl = 'http://localhost:3000/users';

  login(user: User) {
      return this.http.post(`${this.apiUrl}/authenticate`, {
        "email": user.email,
        "senha": user.senha
      });
  }

  
  listAll() {
    return this.http.get(`${this.apiUrl}/list`);
  }
}
