import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, Headers } from '@angular/http';
import 'rxjs';
import { AppGlobals } from '../../global';

/*
  Generated class for the ResumeServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ResumeServiceProvider {
  // headers = new Headers({ 'Content-Type': 'application/json', 'userId': this._appGlobals.userId });
  // headers = new Headers({ 'Content-Type': 'application/json', 'x-access-token': this._appGlobals.accessToken });

  constructor(public http: Http, public _appGlobals: AppGlobals) {
    console.log('Hello ResumeServiceProvider Provider');
  }

  //getResume
  getResumes() {

    let headers = new Headers({ 'Content-Type': 'application/json', 'userId': this._appGlobals.userId });
    let options = new RequestOptions({ headers: headers });
    // return this.http.get(this._appGlobals.baseUrl + "api/resume", options).toPromise();
  }

  //addResume(resume)
  addResume(resume) {
    let headers = new Headers({ 'Content-Type': 'application/json', 'userid': this._appGlobals.userId });
    let options = new RequestOptions({ headers: headers });
    // return this.http.post(this._appGlobals.baseUrl + "api/resume", resume, options).toPromise();
  }

  //deleteResume(resumeId)
  deleteResume(resumeId) {
    let headers = new Headers({ 'Content-Type': 'application/json', 'userid': this._appGlobals.userId });
    let options = new RequestOptions({ headers: headers });
    // return this.http.delete(this._appGlobals.baseUrl + "api/resume"+ resumeId, options).toPromise();
  }
}
