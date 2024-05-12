import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-top-rated-shows',
  templateUrl: './top-rated-shows.component.html',
  styleUrl: './top-rated-shows.component.css'
})
export class TopRatedShowsComponent implements OnInit {

 baseUrl: string = 'https://image.tmdb.org/t/p/w200/';
topRatedShows: any []=[];

constructor(private movieService: MovieService,private router:Router){}

onShowClick(showId:number, showTitle:any, DetailsposterPath:string, overview:string):void{
  this.router.navigate(['/show-details', showId], {state:{id:showId,title:showTitle, posterPath:DetailsposterPath, ShowOverview: overview}});
}
  ngOnInit(): void {
  this.getTopRatedShows();
}

getTopRatedShows(){
  this.movieService.getTopRatedShows().subscribe((data:any)=>{
  this.topRatedShows=data.results.slice(0,10);
  this.topRatedShows.forEach(show=>{
  show.completeUrl=this.baseUrl+show.poster_path;
});

});
  }

}
