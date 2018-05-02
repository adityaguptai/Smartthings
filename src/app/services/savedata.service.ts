import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SavedataService {

  constructor(private http: Http) { }

  save(post) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/new', post, {headers: headers})
      .map(res => res.json());
  }
  fetchData() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('/users', { headers: headers })
      .map(res => res.json());
  }
  edit(post) {

  }
}
