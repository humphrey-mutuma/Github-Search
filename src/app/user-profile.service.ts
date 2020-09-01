import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { User } from './user';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ProfileRequestService {

  // tslint:disable-next-line:no-inferrable-types
  fromURL: string = 'https://api.github.com';
  constructor(private http: HttpClient) {
  }

  getUsers(userName: string): Observable<User[]> {
    return this.http.get<User[]>(this.fromURL + '/users/' + userName);

}

}
