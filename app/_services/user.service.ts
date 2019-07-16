import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models';

@Injectable()
export class UserService {

    headers = new HttpHeaders();

    base: string = 'http://localhost:62549/';

    apiUserLogin: string = this.base + 'api/User/Login';

    constructor(private http: HttpClient) {

        this.headers = this.headers.append('Content-Type', 'application/json'); 
    }

    userLogin(username,password) 
    {
        debugger
        return this.http.get(this.apiUserLogin, {headers: this.headers});

    }
    getAll() {
        return this.http.get<User[]>(`/users`);
    }

    getById(id: number) {
        return this.http.get(`/users/` + id);
    }

    register(user: User) {
        debugger
        return this.http.post(`/api/User/Add`, user);
    }

    update(user: User) {
        return this.http.put(`/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`/users/` + id);
    }
}