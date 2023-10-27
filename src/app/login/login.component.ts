import { Component } from '@angular/core';
import{FormGroup , FormBuilder,FormControl, Validators} from '@angular/forms';
import{Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

form:FormGroup;
msg = "";

constructor( private fb: FormBuilder, private router:Router, private http :HttpClient){
  this.form = this.fb.group({

    emailId:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]],
  });
}
 

onSubmit(){
  console.log('Form values:', this.form.value);    
 this.http.get ( 'https://ayush-netflix-d0f76-default-rtdb.firebaseio.com/user.json').subscribe(users => {
  console.log(users);
  this.router.navigateByUrl('/home');
  this.form.reset();
 })
}

}