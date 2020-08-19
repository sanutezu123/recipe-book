import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { tap } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';
export interface AuthResponse {
    email: string;
    expiresIn: string;
    idToken: string;
    kind: string;
    localId: string;
    refreshToken: string;
    registered?: boolean;
}
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user = new BehaviorSubject<User>(null);
    endpoint = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDd3sMTZVkweZaEUE3JXCEyxnnaSQXhOzk';
    loginEndpoint = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDd3sMTZVkweZaEUE3JXCEyxnnaSQXhOzk';
    constructor(private http: HttpClient) { }

    signup(email: string, password: string) {
        return this.http.post<AuthResponse>(this.endpoint, {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(
                tap( responseData => {
                    this.registerUser(responseData.email,
                        +responseData.expiresIn,
                        responseData.idToken,
                        responseData.localId);
                }
            )
        );
    }
    login(email: string, password: string) {
        return this.http.post<AuthResponse>(this.loginEndpoint, {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(
            tap( responseData => {
                this.registerUser(responseData.email,
                    +responseData.expiresIn,
                    responseData.idToken,
                    responseData.localId);
            }
        )
    );
    }

    private registerUser(email: string, expiresIn: number, idToken: string, localId: string) {
        const expirationDate = new Date(new Date().getTime() + expiresIn*1000);
        const user  = new User(email, localId, idToken,  expirationDate);
        this.user.next(user);
    }

    logout() {
        this.user.next(null);
    }
}
