import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { TopRatedShowsComponent } from './top-rated-shows/top-rated-shows.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchResultShowsComponent } from './search-result-shows/search-result-shows.component';

const routes: Routes = [
{path: 'movies', component:TopRatedMoviesComponent},
{path: 'shows', component:TopRatedShowsComponent},
{path:'', redirectTo:'/shows', pathMatch: 'full'},
{path:'movie-details/:id', component:MovieDetailsComponent},
{path:'show-details/:id', component:ShowDetailsComponent},
{path:'search-results', component:SearchResultsComponent},
{path:'search-result-shows', component:SearchResultShowsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
