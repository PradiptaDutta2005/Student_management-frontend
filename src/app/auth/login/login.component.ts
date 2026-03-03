import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms"; 
import {RouterModule} from "@angular/router"; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  id=0;
  password='';
  roles= ['Student', 'Admin', 'Teacher'];
  selectedRoles: string='';

  onSubmit() {
    console.log('Login Data', {
      id: this.id,
      password:this.password,
      roles:this.selectedRoles
    })
  }

}
