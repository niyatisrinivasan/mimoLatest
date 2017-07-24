import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, Headers } from '@angular/http';
import 'rxjs';
import { AppGlobals } from '../../global';

@Injectable()
export class BookmarkServiceProvider {
  // headers = new Headers({ 'Content-Type': 'application/json', 'x-access-token': this._appGlobals.accessToken });

  constructor(public http: Http, public _appGlobals: AppGlobals) {
    console.log('Hello BookmarkServiceProvider Provider');
  }

  getBookmarks() {
    let headers = new Headers({ 'Content-Type': 'application/json', 'userid': this._appGlobals.userId });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this._appGlobals.baseUrl + "api/bookmark", options).toPromise();
  }

  addBookmark(jobId) {
    let self = this;
    let headers = new Headers({ 'Content-Type': 'application/json', 'userid': self._appGlobals.userId });
    let options = new RequestOptions({ headers: headers });
    let bookmarksData = { "JobID": jobId }
    console.log(bookmarksData)
    return self.http.post(self._appGlobals.baseUrl + "api/bookmark/", bookmarksData, options).toPromise();
  }

  removeBookmark(jobId) {
    let headers = new Headers({ 'Content-Type': 'application/json', 'userid': this._appGlobals.userId });
    let options = new RequestOptions({ headers: headers });
    let bookmarksData = { "jobID": jobId }
    return this.http.post(this._appGlobals.baseUrl + "api/bookmark/" +jobId, bookmarksData, options).toPromise();
  }
}
