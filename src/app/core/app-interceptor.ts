import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.startsWith('/api')) {
            return next.handle(req.clone({
                url: req.url.replace('/api/', API_URL),
                withCredentials: true
            }));
        }

        return next.handle(req);
    }

}

export const appInterceptorProviders: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
}