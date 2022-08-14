import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from '../models/root-object';

@Injectable({
  providedIn: 'root'
})
export class DevFinderService {
public user:string = "discord";
 public baseURL = `https://api.github.com/users/`;
  constructor(private http:HttpClient) { }

  public getDevs():Observable<RootObject> {
    return this.http.get<RootObject>(this.baseURL);
  }
  public changeUrl(user:string) {
    return this.http.get<RootObject>(this.baseURL+user);
  }
}
