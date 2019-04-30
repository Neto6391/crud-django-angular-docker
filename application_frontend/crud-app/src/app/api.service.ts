import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  baseurl = "http://localhost:8000/api"
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'} )

  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<any> {
    return this.http.get(this.baseurl + "/movies/", {headers: this.httpHeaders});
  }
}
