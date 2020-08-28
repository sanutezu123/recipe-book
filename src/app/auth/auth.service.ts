import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { tap } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';
import { RecipeService } from '../recipes/recipe.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
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
    endpoint = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseConfig.apiKey;
    loginEndpoint = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+ environment.firebaseConfig.apiKey;
    private tokeExpirationTimer: any;
    constructor(private http: HttpClient,
                private recipeService: RecipeService,
                private router: Router) { }

    signup(email: string, password: string) {
        return this.http.post<AuthResponse>(this.endpoint, {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(
                tap( responseData => {
                    this.handleAuthentication(responseData.email,
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
                this.handleAuthentication(responseData.email,
                    +responseData.expiresIn,
                    responseData.idToken,
                    responseData.localId);
            }
        )
    );
    }

    private handleAuthentication(email: string, expiresIn: number, idToken: string, localId: string) {
        const expirationDate = new Date(new Date().getTime() + expiresIn*1000);
        const user  = new User(email, localId, idToken,  expirationDate);
        this.autoLogout(expiresIn * 1000);
        this.user.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
    }

    logout() {
        this.user.next(null);
        localStorage.removeItem('userData');
        this.recipeService.clear();
        this.router.navigate(['/auth']);
        if (this.tokeExpirationTimer) {
            clearTimeout(this.tokeExpirationTimer);
        }
        this.tokeExpirationTimer = null;
    }
    /**
     * method to keep the user logged in
     */
    autoLogin() {
        const userData: {
            email: string,
            id: string,
            _tokeExpirationDate: string,
            _token: string,} = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }
        const loadedUSer = new User(
            userData.email,
            userData.id,
            userData._token,
            new Date(userData._tokeExpirationDate)
        );
        if (loadedUSer.token) {
            this.user.next(loadedUSer);
            const expiratonDuration = loadedUSer.tokeExpirationDate.getTime() - new Date().getTime();
            this.autoLogout(expiratonDuration);
        }

    }

    autoLogout(expirationDuration: number) {
        this.tokeExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration);
    }
}
