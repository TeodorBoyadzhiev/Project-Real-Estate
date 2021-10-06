import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../../user/user.service";

@Injectable()
export class AuthActivate implements CanActivate {

    constructor(private router: Router, private userService: UserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const { authenticationRequired, authenticationFailureRedirectUrl } = route.data;



        if (authenticationRequired === this.userService.isLogged) {
            console.log('Are de')
            return true;
        }

        console.log(authenticationRequired, 'proba')
        console.log(this.userService.isLogged, 'druga proba')
        console.log(authenticationRequired === 'boolean', '=====>', authenticationRequired, '=====>', route.data)
        console.log(Boolean(authenticationRequired) === Boolean(this.userService.isLogged), 'molq')

        let authRedirectUrl = authenticationFailureRedirectUrl;

        if (authenticationRequired) {
            console.log(route.url)
            const loginRedirectUrl = route.url.reduce((acc, s) => `${acc}/${s.path}`, '');

            authRedirectUrl += `?redirectUrl=${loginRedirectUrl}`;
        }

        return this.router.parseUrl(authRedirectUrl || '/');
    }

}