import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApplicationServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ApplicationServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ApplicationServiceProvider Provider');
  }

  // getApplication() {
  //   let headers = new Headers({ 'Content-Type': 'application/json', 'x-access-token': this._appGlobals.accessToken });
  //   let options = new RequestOptions({ headers: headers });

  //   return this.http.get(this._appGlobals.baseUrl + "api/apply", options).toPromise();
  // }

  // addApplication(jobId, userId, resumeId) {
  //   let headers = new Headers({ 'Content-Type': 'application/json', 'x-access-token': this._appGlobals.accessToken });
  //   let options = new RequestOptions({ headers: headers });

  //   let application = {
  //     "jobId": jobId,
  //     "userId": userId,
  //     "resumeId": resumeId
  //   }
  //   return this.http.post(this._appGlobals.baseUrl + "api/apply", application, options).toPromise();
  // }
}
