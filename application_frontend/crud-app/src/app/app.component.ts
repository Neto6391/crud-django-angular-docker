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

  constructor(private api:ApiService) {
    this.getMovies();
    this.selectedMovie = {id: -1, title: '', desc: '', year: 0}
  }

  getMovies = () => {
    this.api.getAllMovies().subscribe(
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
        this.getMovies();
      },
      error => {
        console.log(error.message);
      }
    )
  }

  createMovie = () => {
    this.api.createMovie(this.selectedMovie).subscribe(
      res => {
        this.movies.push(res);
      },
      error => {
        console.log(error.message);
      }
    )
  }

  deleteMovie = () => {
    this.api.deleteMovie(this.selectedMovie.id).subscribe(
      res => {
        this.getMovies();
        this.clearFields();
      },
      error => {
        console.log(error.message);
      }
    )
  }

  clearFields = () => {
    this.selectedMovie = {id: -1, title: '', desc: '', year: 0}
  }
}
