import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKey = '5e1ed90c95e0ac41fa9d2817783fab51'
  constructor(private http: HttpClient) {}

  searchMovies(query: string, ): Observable<any[]> {
    const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${query}`;
    return this.http.get<any[]>(url).pipe(
      
      map((response: any) => response.results)
    );
  }
  searchShows(query: string): Observable<any[]> {
    const url = `${this.baseUrl}/search/tv?api_key=${this.apiKey}&query=${query}`;
    return this.http.get<any[]>(url).pipe(
      map((response: any) => response.results)
    );
  }
  
  }