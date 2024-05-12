import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search-result-shows',
  templateUrl: './search-result-shows.component.html',
  styleUrl: './search-result-shows.component.css'
})
export class SearchResultShowsComponent {
  baseUrl: string = 'https://image.tmdb.org/t/p/w200/';
  
  searchResults: any[]=[];
  searchTerm: string='';
  
  constructor(private router:Router, private route: ActivatedRoute, private searchService: SearchService) {}
  onMovieClick(movieId:number, movieTitle:any, DetailsposterPath:string, overview:string):void{

    this.router.navigate(['/movie-details', movieId], {state:{title:movieTitle, posterPath:DetailsposterPath, movieOverview: overview}});
  }
  onShowClick(showId:number, showTitle:any, DetailsposterPath:string, overview:string):void{
    this.router.navigate(['/show-details', showId], {state:{title:showTitle, posterPath:DetailsposterPath, ShowOverview: overview,id:showId}});
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'];
      
      this.searchService.searchShows(this.searchTerm).subscribe((results: any[]) => {
        this.searchResults = results;
        
      });
    });
  }
}
