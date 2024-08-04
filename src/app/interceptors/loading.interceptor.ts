import { HttpResponse, type HttpInterceptorFn } from '@angular/common/http';
import { catchError, delay, tap } from 'rxjs';
import { inject } from '@angular/core';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.requestStarted();
  return next(req).pipe(
    delay(150),
    tap((event) => {
      if (event instanceof HttpResponse) {
        loadingService.requestEnded();
      }
    }),
    catchError((err) => {
      loadingService.resetLoader();
      throw err;
    })
  );
};
