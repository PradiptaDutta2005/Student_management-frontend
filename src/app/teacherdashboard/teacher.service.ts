import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class TeacherService{

  api="http://localhost:8080"

  constructor(private http:HttpClient){}

  getSubjects(){
    return this.http.get<any[]>(this.api+"/admin/subjects")
  }

  getStudents(){
    return this.http.get<any[]>(this.api+"/admin/students")
  }

  markAttendance(data:any){
    return this.http.post(this.api+"/teacher/mark-attendance",data)
  }

  uploadNotes(data:any){
    return this.http.post(this.api+"/teacher/upload-notes",data)
  }

  getNotes(){
    return this.http.get<any[]>(this.api+"/teacher/notes")
  }

}