import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Corrected the import statement
import { BannerData } from './movie-api';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  constructor(private http: HttpClient) {}

  baseurl = "https://api.themoviedb.org/3";
  apikey = "a4f179ed7cf995d886d236419b5012c1";

  bannerApiData(): Observable<any> { 
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`); // Corrected the template string
  }

 
  trendingMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`); // Corrected the template string
  }

  getSearchMovie(data:any) :Observable<any>{
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }


  getMovieDetail(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }


// getMovieVideo
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

   getMovieCast(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`);
  }


 fetchActionMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  // adventure
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }

  // animation
  fetchAnimationMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  }

  // comedy
  fetchComedyMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }

  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
  }

  // science-fiction:878

  fetchScienceFictionMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
  }

  // thriller:53
  fetchThrillerMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
  }

  reviews() :Observable<any> {
    return this.http.get(`${this.baseurl}/discover/mnovie?api_key = ${this.apikey}&with_genres =90`)
  }
}


