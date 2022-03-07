import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

// DEPENDENCY INJECTION USING CONSTRUCTOR
  constructor(private _http: HttpClient) { }

  public loginUserFromRemote(user: User):Observable<any>{
    return this._http.post<any>("http://localhost:9090/api/v1.0/tweets/login",user);

  }
}
