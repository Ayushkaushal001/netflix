import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';

import { ResetComponent } from './reset/reset.component';
import { RegistorComponent } from './registor/registor.component';


import { SavedComponent } from './saved/saved.component';
const routes: Routes = [
 
    { path: 'saved', component: SavedComponent },
      { path: 'register', component: RegistorComponent },
    { path: 'login', component: LoginComponent },

    { path: 'reset', component: ResetComponent },
 {path :'home',component : HomeComponent},
 {path :'movie/:id' , component : MovieDetailsComponent},
 {path:'search' , component : SearchComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 