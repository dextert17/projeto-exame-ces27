import { Component } from '@angular/core';

import { MovieService } from './movie.service';

@Component({
  selector: 'movies-app',
  template: `
  	<h1>{{title}}</h1>
  	<nav>
  		<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
   		<a routerLink="/movies" routerLinkActive="active">Movies</a>
  	</nav>
		<router-outlet></router-outlet>
	`,
	styleUrls: [ 'app/styles/movie-app.component.css' ],
  providers: [MovieService]
})

export class MovieAppComponent {
  title = 'Tour of Movies';
}