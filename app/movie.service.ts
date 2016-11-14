import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Movie } from './movie';

@Injectable()
export class MovieService {
	private moviesUrl = 'app/movies';  // URL to web api
	private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getMovies(): Promise<Movie[]> {
    return this.http.get(this.moviesUrl)
               .toPromise()
               .then(response => response.json().data as Movie[])
               .catch(this.handleError);
  }

  getMovie(id: number): Promise<Movie> {
  return this.getMovies()
             .then(movies => movies.find(movie => movie.id === id));
	}

	update(movie: Movie): Promise<Movie> {
  	const url = `${this.moviesUrl}/${movie.id}`;
  	return this.http
    	.put(url, JSON.stringify(movie), {headers: this.headers})
    	.toPromise()
    	.then(() => movie)
    	.catch(this.handleError);
	}

	create(title: string): Promise<Movie> {
  	return this.http
    	.post(this.moviesUrl, JSON.stringify({title: title}), {headers: this.headers})
    	.toPromise()
    	.then(res => res.json().data)
    	.catch(this.handleError);
	}

	delete(id: number): Promise<void> {
  	const url = `${this.moviesUrl}/${id}`;
  	return this.http.delete(url, {headers: this.headers})
    	.toPromise()
    	.then(() => null)
    	.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
  	console.error('An error occurred', error); // for demo purposes only
  	return Promise.reject(error.message || error);
	}
}