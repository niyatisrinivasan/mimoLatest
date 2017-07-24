import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, Headers } from '@angular/http';
import 'rxjs';
import { AppGlobals } from '../../global';

/*
  Generated class for the NotificationServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NotificationServiceProvider {
  headers = new Headers({ 'Content-Type': 'application/json', 'userid': this._appGlobals.userId });
  // headers = new Headers({ 'Content-Type': 'application/json', 'x-access-token': this._appGlobals.accessToken });

  constructor(public http: Http, public _appGlobals: AppGlobals) {
    console.log('Hello NotificationServiceProvider Provider');
  }

  //getNotifications()
  getNotifications() {
    let options = new RequestOptions({ headers: this.headers });
    return this.http.get(this._appGlobals.baseUrl + "api/notifications", options).toPromise();
  }
}
