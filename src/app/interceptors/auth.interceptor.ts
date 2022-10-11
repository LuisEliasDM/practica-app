import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { StorageHelper } from '../libs/helpers/storage.helper';
import { ApiService } from '../services/api.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private apiService: ApiService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.includes("/mirror/")){
      request = request.clone({
        setHeaders: {
          Authorization: "Bearer " + StorageHelper.getItem("session").token
        }
      })
      return next.handle(request).pipe(
        catchError((error: any) => {
          if(error instanceof HttpErrorResponse && error.status === 401){
            return this.expiredHandler(request, next)
          }
          return throwError(() => error)
        })
      )
    }
    return next.handle(request)
  }

  private expiredHandler(originalRequest: HttpRequest<unknown>, next: HttpHandler){
    return this.apiService.refreshToken().pipe(
      switchMap((response: any) => {
        StorageHelper.setItem('session', response)

        originalRequest = originalRequest?.clone({
          setHeaders: {
            Authorization: 'Bearer ' + StorageHelper.getItem('session').token
          }
        })

        return next.handle(originalRequest!)
      })
    )
  }
}
