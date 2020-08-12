import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model'


interface AuthResponse {
    email: string;
    expiresIn: string;
    idToken: string;
    kind: string;
    localId: string;
    refreshToken: string;
}
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    endpoint = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDd3sMTZVkweZaEUE3JXCEyxnnaSQXhOzk';
    constructor(private http: HttpClient) {}
    signup(user: User) {
        user.returnSecureToken = true;
        return this.http.post<AuthResponse>(this.endpoint, user);
    }
}
