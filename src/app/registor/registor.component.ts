import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; // Corrected import statement

@Component({
  selector: 'app-registor',
  templateUrl: './registor.component.html',
  styleUrls: ['./registor.component.css'],
})
export class RegistorComponent {
  form: FormGroup;
  msg = '';

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute) { // Corrected variable name
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[A-Za-z]{2,20}')]],
      lastName: ['', Validators.pattern('[A-Za-z]{2,20}')],
      emailId: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    console.log(this.form.value);

    this.http.post('https://ayush-netflix-d0f76-default-rtdb.firebaseio.com/user.json', this.form.value).subscribe(
      (response) => {
        console.log(response);
        this.form.reset();
        this.router.navigate(['../', 'login'], {
          relativeTo: this.activatedRoute,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
