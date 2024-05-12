import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
private baseUrl = 'https://api.themoviedb.org/3';
private apiKey = '5e1ed90c95e0ac41fa9d2817783fab51'

  constructor(private http: HttpClient) { }

  getTopRatedMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}`);
  }

  getMovieDetails(movieId: number):Observable<any>{
  return this.http.get(`${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`);
  }

  getTopRatedShows():Observable<any>{
  return this.http.get(`${this.baseUrl}/tv/top_rated?api_key=${this.apiKey}`);
  }

  getShowVideo(movieId:any):Observable<any>{
  return this.http.get(`${this.baseUrl}/tv/${movieId}/videos?api_key=${this.apiKey}`);
  }

  getMovieVideo(movieId:any):Observable<any>{
  return this.http.get(`${this.baseUrl}/movie/${movieId}/videos?api_key=${this.apiKey}`);
  }

  }
