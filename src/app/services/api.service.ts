import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ApiService {

  // api server
  public URL = 'http://0.0.0.0:3000/api/v1/';

  constructor(public http: HttpClient) {
  }


  getPositions(): Observable<any> {
    return this.http
      .get(`${this.URL}/positions`)
      .pipe(
        (map(response => response)),
        catchError((error: any) => Observable.throw(error))
      );
  }
}
