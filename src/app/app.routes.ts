import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "register",
        component: RegisterComponent,
    },
    {
        path: "admindashboard",
        component: AdmindashboardComponent,
    },
    {
        path: "teacherdashboard",
        component: TeacherdashboardComponent,
    },
    {
        path: "studentdashboard",
        component: StudentdashboardComponent,
    }
    // {
    //     path: "home",
    //     component: HomeComponent,
    // }

];
