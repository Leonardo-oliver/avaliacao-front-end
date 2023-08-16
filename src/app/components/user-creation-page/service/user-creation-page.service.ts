import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../model/user-creation-page.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCreationPageService {

  private baseUrl = 'https://dummyapi.io/data/v1';

  constructor(
    private http: HttpClient
  ) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'app-id': '64cbeddd253549dc8b990b71'
    });
  }

  createUser(user: UserModel): Observable<any> {
    const url = `${this.baseUrl}/user/create`;
    const headers = this.getHeaders();

    return this.http.post(url, user, { headers });
  }

  updateUser(user: UserModel, idUser: any): Observable<any> {
    const url = `${this.baseUrl}/user/${idUser}`;
    const headers = this.getHeaders();

    return this.http.put(url, user, { headers });
  }

}
