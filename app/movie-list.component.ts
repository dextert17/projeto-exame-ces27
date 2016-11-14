import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  moduleId: module.id,
  selector: 'my-movies',
  templateUrl: './templates/movie-list.component.html',
  styleUrls: [ './styles/movie-list.component.css' ]
})

export class MovieListComponent implements OnInit {
  movies: Movie[];
  selectedMovie: Movie;

  constructor(
    private router: Router,
    private movieService: MovieService) { }

  getMovies(): void {
    this.movieService.getMovies().then(movies => this.movies = movies);
  }

  add(title: string, rating: number, synopsis: string): void {
    title = title.trim();
    synopsis = synopsis.trim();
    if (!title) { return; }
    if (!rating ) { return; }
    if (!synopsis) { return; }
    this.movieService.create(title, rating, synopsis)
      .then(movie => {
        this.movies.push(movie);
        this.selectedMovie = null;
      });
  }

  delete(movie: Movie): void {
    this.movieService
      .delete(movie.id)
      .then(() => {
        this.movies = this.movies.filter(h => h !== movie);
        if (this.selectedMovie === movie) { this.selectedMovie = null; }
      });
  }

  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedMovie.id]);
  }
}