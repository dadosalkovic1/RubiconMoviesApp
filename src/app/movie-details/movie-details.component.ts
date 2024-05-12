import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router,ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})

export class MovieDetailsComponent  implements OnInit{
 constructor(private sanitizer:DomSanitizer,private route:ActivatedRoute, private router:Router,private movieService:MovieService){}

  movieName:string='';
  completeUrl:string='';
  Description:string='';
  movieId:any;
  VideoUrl:any='https://www.youtube.com/embed/';
  VideoKey:any;
  HaveTrailer!: boolean;

ngOnInit(): void {
  this.movieId=history.state.id;
  this.getMovieVideo();
  this.movieName=history.state.title;
  this.completeUrl=history.state.posterPath;
  this.Description=history.state.movieOverview;
  
}

goBack(): void {
  this.router.navigateByUrl('/movies');
} 
getMovieVideo(){
  this.movieService.getMovieVideo(this.movieId).subscribe((data:any)=>{
  this.VideoKey=data.results[0]['key'];
  this.VideoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(this.VideoUrl+this.VideoKey);
if(this.VideoKey){
  this.HaveTrailer = true;
}
else{
  this.HaveTrailer = false;
  
}
})   
  };
}