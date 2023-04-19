import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path:'',component:NavBarComponent, canActivate : [AuthGuard],
  children:[
    {
      path:'home',component:HomeComponent,

    },
    {
      path:'card', component:CardsComponent
    },
   ],
  },
  {
    path:'login', component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
