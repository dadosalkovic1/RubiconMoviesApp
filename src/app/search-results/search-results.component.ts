import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search-results-movie',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent implements OnInit{
  baseUrl: string = 'https://image.tmdb.org/t/p/w200/';
  
  searchResults: any[]=[];
  searchTerm: string='';
  routeValue:any;
  constructor(private router:Router, private route: ActivatedRoute, private searchService: SearchService) {}
  onMovieClick(movieId:number, movieTitle:any, DetailsposterPath:string, overview:string):void{

    this.router.navigate(['/movie-details', movieId], {state:{id:movieId,title:movieTitle, posterPath:DetailsposterPath, movieOverview: overview}});
  }
 
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'];
      
      this.searchService.searchMovies(this.searchTerm).subscribe((results: any[]) => {
        this.searchResults = results;
        
      });
    });
  }

}