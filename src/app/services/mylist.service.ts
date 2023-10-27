import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MylistService {
  userId:any;
  baseurl = "http://localhost:3001/user";
 getUser(): Observable<string> {
    return of(this.userId); 
  }
  constructor(private http: HttpClient) {}

  savedMovie(userId: string, movieId: string): Observable<any> {
    const url = `${this.baseurl}/saved/${userId}/${movieId}`;
    return this.http.get(url);
  }

  addItem(data: any): Observable<any> {
    return this.http.post(this.baseurl, data);
  }
}

