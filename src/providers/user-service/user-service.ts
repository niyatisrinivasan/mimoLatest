import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, Headers } from '@angular/http';
import 'rxjs';
import { AppGlobals } from '../../global';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserServiceProvider {
  headers = new Headers({ 'Content-Type': 'application/json', 'userid': this._appGlobals.userId });
  // headers = new Headers({ 'Content-Type': 'application/json', 'x-access-token': this._appGlobals.accessToken });

  constructor(public http: Http, public _appGlobals: AppGlobals) {
    console.log('Hello UserServiceProvider Provider');
  }

  //getUser
  getUser() {
    let self = this;
    let headers = new Headers({ 'Content-Type': 'application/json', 'userid': this._appGlobals.userId });
    console.log(this._appGlobals.userId)
    let options = new RequestOptions({ headers: headers });
    return self.http.get(self._appGlobals.baseUrl + "api/user", options).toPromise();
  }

  //updateUser(userId, user)
  updateUser(userId, user) {
    let options = new RequestOptions({ headers: this.headers });
    return this.http.put(this._appGlobals.baseUrl + "api/user", user, options).toPromise();
  }

  updateDeviceToken(deviceToken) {
    let options = new RequestOptions({ headers: this.headers });
    return this.http.put(this._appGlobals.baseUrl + "api/user/devicetoken", deviceToken, options).toPromise();
  }
}
