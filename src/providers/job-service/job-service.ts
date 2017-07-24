import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, Headers } from '@angular/http';
import 'rxjs';
import { AppGlobals } from '../../global';

@Injectable()
export class JobServiceProvider {
  bookmarks = []
  // headers = new Headers({ 'Content-Type': 'application/json', 'userId': this._appGlobals.userId });
  // headers = new Headers({ 'Content-Type': 'application/json', 'x-access-token': this._appGlobals.accessToken });

  constructor(public http: Http, public _appGlobals: AppGlobals) {
    console.log('Hello JobServiceProvider Provider');
  }

  getJobs() {
    let headers = new Headers({ 'Content-Type': 'application/json', 'userid': this._appGlobals.userId });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this._appGlobals.baseUrl + "api/job", options).toPromise();
  }
}
