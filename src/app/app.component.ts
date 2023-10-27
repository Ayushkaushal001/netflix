import { Component, HostListener } from '@angular/core';
import{Router} from '@angular/router';
  @Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
 showImage:boolean = true;
  navbg: any;
 constructor(private router :Router) {}
  @HostListener('document:scroll') scrollover(){

    console.log(document.body.scrollTop, 'scrollLength#');

    if (document.documentElement.scrollTop > 0 || document.documentElement.scrollTop <0) {
      this.navbg = {
        'background-color': '#000000'
      };
    }
     else {
      this.navbg = {};
    }
  }

showLogin() {
    this.showImage = false;
    this.router.navigate(['login']);
  }

  showRegister() {
    this.showImage = false;
    this.router.navigate(['register']);
  }
   
}


