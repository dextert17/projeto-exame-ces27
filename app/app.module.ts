import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import './rxjs-extensions';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }   from './app.component';
import { MovieAppComponent } from './movie-app.component';
import { DashboardComponent } from './dashboard.component';
import { MovieListComponent } from './movie-list.component';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieSearchComponent } from './movie-search.component';
import { MovieService } from './movie.service';

@NgModule({
  imports:      [
  	BrowserModule,
  	FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
  	AppComponent,
    MovieAppComponent,
    DashboardComponent,
  	MovieListComponent,
  	MovieDetailComponent,
    MovieSearchComponent
  ],
  bootstrap:    [
  	AppComponent,
    MovieAppComponent
  ],
  providers: [MovieService]
})

export class AppModule { }