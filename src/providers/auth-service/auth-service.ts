import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, Headers } from '@angular/http';
import 'rxjs';
import { AppGlobals } from '../../global';

@Injectable()
export class AuthServiceProvider {
  // headers = new Headers({ 'Content-Type': 'application/json' });
  // headers = new Headers({ 'Content-Type': 'application/json', 'x-access-token': this._appGlobals.accessToken });

  constructor(public http: Http, public _appGlobals: AppGlobals) {
    console.log('Hello TempServiceProvider Provider');
  }

  login(credentials) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._appGlobals.baseUrl + "signin", credentials, options).toPromise();
  }

  register(credentials) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._appGlobals.baseUrl + "signup", credentials, options).toPromise();
  }

  fbUser() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._appGlobals.baseUrl + "facebook", this._appGlobals.accessToken, options).toPromise();
  }

  checkToken() {
    let headers = new Headers({ 'Content-Type': 'application/json', 'x-access-token': this._appGlobals.accessToken });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this._appGlobals.baseUrl + "checktoken", options).toPromise();
  }

  renewToken(credentials) {
    let headers = new Headers({ 'Content-Type': 'application/json', 'x-access-token': this._appGlobals.accessToken });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._appGlobals.baseUrl + "renewtoken", credentials, options).toPromise();
  }
}