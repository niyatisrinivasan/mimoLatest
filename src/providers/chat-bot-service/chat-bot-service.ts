import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, Headers } from '@angular/http';
import 'rxjs';
import { AppGlobals } from '../../global';

@Injectable()
export class ChatBotServiceProvider {
  headers = new Headers({ 'Content-Type': 'application/json', 'userId': this._appGlobals.userId });
  // headers = new Headers({ 'Content-Type': 'application/json', 'x-access-token': this._appGlobals.accessToken });

  constructor(public http: Http, public _appGlobals: AppGlobals) {
    console.log('Hello ChatBotServiceProvider Provider');
  }

  sendRequest(request) {
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this._appGlobals.baseUrl + "api/wit", request, options).toPromise();
  }
}
