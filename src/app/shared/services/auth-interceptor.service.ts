import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, finalize, Observable } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private _loaderService : LoaderService
  ) { }

  intercept(req: HttpRequest<any>, 
    next: HttpHandler): Observable<HttpEvent<any>> {
    
      this._loaderService.loaderStatus$.next(true)
      const token = `JWT Get token form LS`;

      // set header >> token through header

      const reqClone = req.clone({
        setHeaders : {
          'content-type' : 'Application/json',
           'Token' : token
        }
      })
      return next.handle(reqClone)
                    .pipe(
                      // delay(500),
                      finalize(() => {
                        this._loaderService.loaderStatus$.next(false)
                      })
                    )
  }
}
