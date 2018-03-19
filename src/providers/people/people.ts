import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class PeopleProvider {

  constructor(public http: HttpClient) {
  }

  getPeople() {
    return this.http.get('https://randomuser.me/api/?results=5')
      .map( (res: any) => res.results || []);
  }
}
