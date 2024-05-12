import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrl: './top-rated-movies.component.css'
})
export class TopRatedMoviesComponent implements OnInit {
  

  baseUrl: string = 'https://image.tmdb.org/t/p/w200/';
  
topRatedMovies: any []=[];
 

constructor(private movieService: MovieService, private router: Router){}

onMovieClick(movieId:number, movieTitle:any, DetailsposterPath:string, overview:string, movieVideo: any):void{
  this.router.navigate(['/movie-details', movieId], {state:{id:movieId,title:movieTitle, posterPath:DetailsposterPath, movieOverview: overview}});
}


ngOnInit(): void {
  this.getTopRatedMovies();

  
}
getTopRatedMovies() {
  this.movieService.getTopRatedMovies().subscribe((data: any) => {
  this.topRatedMovies = data.results.slice(0, 10);
    

  
  });
}


}