import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})
export class AppComponent {
  movies = [];

  constructor(private api:ApiService) {
    this.getMovies(this.api);
  }

  getMovies = (api) => {
    api.getAllMovies().subscribe(
      res => {
        this.movies = res;
      },
      error => {
        console.log(error.message);
      }
    )
  }
}
