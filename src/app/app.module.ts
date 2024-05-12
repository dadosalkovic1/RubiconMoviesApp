import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { TopRatedShowsComponent } from './top-rated-shows/top-rated-shows.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RouterModule } from '@angular/router';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchResultShowsComponent } from './search-result-shows/search-result-shows.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    TopRatedMoviesComponent,
    TopRatedShowsComponent,
    MovieDetailsComponent,
    ShowDetailsComponent,
    SearchResultsComponent,
    SearchResultShowsComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   BrowserModule,
   BrowserAnimationsModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
