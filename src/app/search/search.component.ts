import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchForm: FormGroup;
searchResult:any;
  constructor(private fb: FormBuilder, private srvc: MovieApiService) {
    this.searchForm = this.fb.group({
      'movieName': new FormControl(null) // Use FormControl here
    });
  }

  submitForm() {
    console.log(this.searchForm.value, 'searchForm#');
    this.srvc.getSearchMovie(this.searchForm.value).subscribe((result) => {
  this.searchResult = result.results;
    });
  }
}
