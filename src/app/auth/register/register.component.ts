import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})


export class RegisterComponent {

  password='';

  roles= ['Student', 'Admin', 'Teacher'];
  selectedRoles: string='';


  onSubmit(){
    console.log('Registration form submitted!',{

      password:this.password,
      roles:this.selectedRoles
    })
  }
}
