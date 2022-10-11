import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StorageHelper } from '../libs/helpers/storage.helper';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any>{
    return this.http.post("http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/api/login",{
      username: username,
      password: password
    })
  }

  searchCharacter(name: string): Observable<any>{
    return this.http.post("http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/mirror/rickandmorty",{
      endpoint: "/character/?name=" + name
    })
  }

  refreshToken(): Observable<any>{
    return this.http.post("http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/api/refresh",{
      session: StorageHelper.getItem("session")
    })
  }
}
