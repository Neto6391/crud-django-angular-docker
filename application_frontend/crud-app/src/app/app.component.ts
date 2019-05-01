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
  selectedMovie;
  id;
  title;
  desc;
  year;

  constructor(private api:ApiService) {
    this.getMovies(this.api);
    this.selectedMovie = {id: -1, title: '', desc: '', year: 0}
  }

  getMovies = (api) => {
    api.getAllMovies().subscribe(
      res => {
        this.movies = res
      },
      error => {
        console.log(error.message);
      }
    )
  }

  movieClicked = (movie) => {
    this.api.getOneMovie(movie.id).subscribe(
      res => {
        this.selectedMovie = res
      },
      error => {
        console.log(error.message);
      }
    )
  }

  updateMovie = () => {
    this.api.updateMovie(this.selectedMovie).subscribe(
      res => {
        this.selectedMovie = res
      },
      error => {
        console.log(error.message);
      }
    )
  }
}
