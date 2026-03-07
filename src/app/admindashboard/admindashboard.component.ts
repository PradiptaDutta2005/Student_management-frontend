import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  api = "http://localhost:8080/admin";

  student:any = {};
  teacher:any = {};
  subject:any = {};
  assign:any = {};

  users:any[] = [];
  filteredUsers:any[] = [];
  teachers:any[] = [];
  subjects:any[] = [];

  searchText:string = "";
  filterType:string = "newest";

  constructor(private http:HttpClient){}

  ngOnInit(){
    this.loadUsers();
    this.loadTeachers();
    this.loadSubjects();
  }

  registerStudent(){
    const body = {
      username:this.student.username,
      password:this.student.password,
      email:this.student.email,
      role:"STUDENT"
    };

    this.http.post(`${this.api}/create-user`,body)
    .subscribe(()=>{
      alert("Student Registered");
      this.student = {};   // ✅ clear form
      this.loadUsers();
    });
  }

  registerTeacher(){
    const body = {
      username:this.teacher.username,
      password:this.teacher.password,
      email:this.teacher.email,
      role:"TEACHER"
    };

    this.http.post(`${this.api}/create-user`,body)
    .subscribe(()=>{
      alert("Teacher Registered");
      this.teacher = {};   // ✅ clear form
      this.loadTeachers();
      this.loadUsers();
    });
  }

  createSubject(){
    this.http.post(`${this.api}/create-subject`,this.subject)
    .subscribe(()=>{
      alert("Subject Created");
      this.subject = {};  // ✅ clear form

      this.loadSubjects();
    });
  }

  assignTeacher(){

    const body = {
      subjectId:this.assign.subjectId,
      teacherId:this.assign.teacherId
    };

    this.http.post(`${this.api}/assign-subject`,body)
    .subscribe(()=>{
      alert("Teacher Assigned");
      this.assign = {};  // ✅ clear dropdown
    });
  }

  loadUsers(){
    this.http.get<any[]>(`${this.api}/all-users`)
    .subscribe(res=>{
      this.users = res;
      this.filteredUsers = res;
    });
  }

  loadTeachers(){
    this.http.get<any[]>(`${this.api}/teachers`)
    .subscribe(res=>{
      this.teachers = res;
    });
  }

  loadSubjects(){
    this.http.get<any[]>(`${this.api}/subjects`)
    .subscribe(res=>{
      this.subjects = res;
    });
  }

  searchUsers(){
    this.filteredUsers = this.users.filter(u =>
      u.username.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  applyFilter(){
    if(this.filterType==="newest"){
      this.filteredUsers = [...this.users].reverse();
    }
  }

}