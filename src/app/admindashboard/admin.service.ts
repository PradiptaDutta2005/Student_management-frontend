import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  api = "http://localhost:8080/admin";

  constructor(private http: HttpClient) {}

  registerStudent(data:any){
    return this.http.post(this.api + "/register-student", data);
  }

  registerTeacher(data:any){
    return this.http.post(this.api + "/register-teacher", data);
  }

  createSubject(data:any){
    return this.http.post(this.api + "/create-subject", data);
  }

  assignTeacher(data:any){
    return this.http.post(this.api + "/assign-subject", data);
  }

  getUsers(){
    return this.http.get<any[]>(this.api + "/all-users");
  }

  getSubjects(){
    return this.http.get<any[]>(this.api + "/subjects");
  }

}