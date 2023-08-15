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
      // 'Content-Type': 'application/json',
      'app-id': '64cbeddd253549dc8b990b71'
    });
  }

  getData(): Observable<any> {
    const url = `${this.baseUrl}/user`;
    const headers = this.getHeaders();
    return this.http.get(url, { headers });
  }

  deleteUser(params: {}): Observable<any> {
    const url = `${this.baseUrl}/user/${params}`;
    const headers = this.getHeaders();
    return this.http.delete(url, { headers });
  }


}
