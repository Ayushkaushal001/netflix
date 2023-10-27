import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MylistService } from 'src/app/services/mylist.service'; // Import your MylistService
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  getMovieDetailResult: any = {};
  movieId: any;
  getMovieVideoResult: any;
  getMovieCastResult: any;
  userId :any;

  constructor(
    private service: MovieApiService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  
    private mylistService: MylistService // Inject your MylistService
  ) {}

  ngOnInit(): void {
    let getParamsId = this.route.snapshot.paramMap.get('id');
    console.log(getParamsId);
    this.getMovie(getParamsId);
    this.getVideo(getParamsId);
    this.getMovieCast(getParamsId);
  }

  getMovie(id: any) {
    this.service.getMovieDetail(id).subscribe((result) => {
      console.log(result, 'getMovieDetail#');
      this.getMovieDetailResult = result;
    });
  }

  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      console.log(result, 'getMovieVideo#');
      result.results.forEach((element: any) => {
        if (element.type == 'Trailer') {
          this.getMovieVideoResult = element.key;
        }
      });
    });
  }

  getMovieCast(id: any) {
    this.service.getMovieCast(id).subscribe((result) => {
      this.getMovieCastResult = result.cast;
    });
  }

  /*saveMovieToUser(movieId: string): void {
  aveMovieToUser(userId: string, movieId: string): void {
    const url = 'http://localhost:3001/user"/save-movie'; // Replace with your API endpoint
    const data = { userId, movieId }; // Data to send to the API

    // Send an HTTP POST request to your API to save the movie for the user
    this.http.post(url, data).subscribe((response) => {
      // Handle the response as needed
      console.log(response);

      // Optionally, you can navigate to another page after saving the movie.
      // this.router.navigateByUrl('/saved');
    });
  }
}

*/



}
