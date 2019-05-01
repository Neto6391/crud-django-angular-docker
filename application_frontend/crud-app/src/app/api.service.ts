import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  baseurl = environment.apiUrl
  httpHeaders = new HttpHeaders({"Content-type": "application/json"} )
  
  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<any> {
    return this.http.get(this.baseurl + "/movies", {headers: this.httpHeaders});
  }

  getOneMovie(id): Observable<any> {
    return this.http.get(this.baseurl + `/movies/${id}`, {headers: this.httpHeaders});
  }

  updateMovie(movie): Observable<any> {
    const body = {title: movie.title, desc: movie.desc, year: movie.year}
    return this.http.put(this.baseurl + `/movies/${movie.id}`,body, {headers: this.httpHeaders});
  }
}
