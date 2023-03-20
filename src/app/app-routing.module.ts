import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginSignUpComponent } from './login-sign-up/login-sign-up.component';
import { ServicesComponent } from './services/services.component';

//Adding The Routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Services', component: ServicesComponent },
  { path: 'About-Us', component: AboutUsComponent },
  { path: 'Contact-Us', component: ContactUsComponent },
  { path: 'Login/SignUp', component: LoginSignUpComponent },
  { path: '**', component: LoginSignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
