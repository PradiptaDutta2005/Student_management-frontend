import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],   // ✅ add FormsModule
  templateUrl: './login.component.html'
})
export class LoginComponent {

  loginData:any={
    username:'',
    password:'',
    role:''
  }

  constructor(private http:HttpClient, private router:Router){}

  login(){

    this.http.post("http://localhost:8080/auth/login", this.loginData)
    .subscribe((res:any)=>{

      // store JWT
      localStorage.removeItem("token");
      localStorage.setItem("token", res.token)
      console.log("Login success");
      // redirect by role
      if(this.loginData.role==="ADMIN"){
        this.router.navigate(['/admin'])
      }

      if(this.loginData.role==="TEACHER"){
        this.router.navigate(['/teacher'])
      }

      if(this.loginData.role==="STUDENT"){
        this.router.navigate(['/student'])
      }

    })

  }

}