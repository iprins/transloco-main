import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

        var requestToForward = req.clone(
            {
                headers : req.headers
                  .set('X-Testing', 'Bearer MYFIRSTTOKEN')
            }
        );

    return next.handle(requestToForward);
  }
}