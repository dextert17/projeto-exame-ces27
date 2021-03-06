import { Component, OnInit } from '@angular/core';

import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './templates/dashboard.component.html',
  styleUrls: [ './styles/dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies()
      .then(movies => this.movies = movies.slice(1, 5));
  }
}