import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

import { ProfileService } from '../services/ProfileService';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private profileService: ProfileService) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.profileService.showLoader.next(true);

    const token = this.profileService.getToken();
    let newHeaders = req.headers;
    if (token) {
      newHeaders = newHeaders.append('Authorization', 'Bearer ' + token);
    }
    const authReq = req.clone({ headers: newHeaders });

    return next.handle(authReq).pipe(
      finalize(() => {
        this.profileService.showLoader.next(false);
      })
    );
  }
}
