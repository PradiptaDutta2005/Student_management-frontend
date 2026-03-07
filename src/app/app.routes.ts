import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';
import { HomeComponent } from './home/home.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },   // homepage

  { path: 'login', component: LoginComponent },

  { path: 'admin', component: AdmindashboardComponent },

  { path: 'teacher', component: TeacherdashboardComponent },

  { path: 'student', component: StudentdashboardComponent }
];