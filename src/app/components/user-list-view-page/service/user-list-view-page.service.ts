import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserListViewPageService {

  private baseUrl = 'https://dummyapi.io/data/v1';

  constructor(
    private http: HttpClient
  ) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'app-id': '64cbeddd253549dc8b990b71'
    });
  }

  getUser(): Observable<any> {
    const url = `${this.baseUrl}/user`;
    const headers = this.getHeaders();
    return this.http.get(url, { headers });
  }


  listSpecificUser(idUser: any): Observable<any> {
    const url = `${this.baseUrl}/user/${idUser}`;
    const headers = this.getHeaders();
    return this.http.get(url, { headers });
  }

  deleteUser(idUser: any): Observable<any> {
    const url = `${this.baseUrl}/user/${idUser}`;
    const headers = this.getHeaders();
    return this.http.delete(url, { headers });
  }


}
