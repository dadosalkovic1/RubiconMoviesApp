import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.css'
})
export class ShowDetailsComponent implements OnInit{

  constructor(private sanitizer:DomSanitizer,private route:ActivatedRoute, private router:Router, private movieService:MovieService){}
 
showName:string='';
completeUrl:string='';
Description:string='';
VideoKey:any;
showId:any;
HaveTrailer!: boolean;
VideoUrl:any='https://www.youtube.com/embed/';

  ngOnInit(): void {
    this.showId=history.state.id;
    this.getShowVideo();
    this.showName=history.state.title;
    this.completeUrl=history.state.posterPath;
    this.Description=history.state.ShowOverview;
    
  }
  goBack(): void {
    this.router.navigateByUrl('/shows');
  }

  getShowVideo(){
    this.movieService.getShowVideo(this.showId).subscribe((data:any)=>{
    this.VideoKey = data.results[0]['key'];
    this.VideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.VideoUrl + this.VideoKey);
  if(this.VideoKey){
    this.HaveTrailer = true;
      }
  else{
    this.HaveTrailer = false;
      }
      
    });
  }
  
 
}
