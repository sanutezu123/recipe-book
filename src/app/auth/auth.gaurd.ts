import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { ActivatedRoute, ActivatedRouteSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { take, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthGaurd implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    // tslint:disable-next-line:max-line-length
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
        | Observable<boolean | UrlTree>
        | Promise<boolean> {
        return this.authService.user.pipe(
            take(1),
            map(user => {
                const isAuthenticated = !!user;
                if (isAuthenticated) {
                    return true;
                } else {
                    return this.router.createUrlTree(['/auth']);
                }
            }));
    }
}
