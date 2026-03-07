import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-studentdashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {

  api = "http://localhost:8080/student";

  attendance:any[] = [];
  notes:any[] = [];

  constructor(private http:HttpClient){}

  ngOnInit(){
    this.loadAttendance();
    this.loadNotes();
  }

  getAuthHeaders(){
    const token = localStorage.getItem("token");

    return {
      headers: new HttpHeaders({
        Authorization:`Bearer ${token}`
      })
    };
  }

  // -------------------------
  // LOAD ATTENDANCE
  // -------------------------
  loadAttendance(){

    this.http.get<any[]>(
      `${this.api}/attendance`,
      this.getAuthHeaders()
    ).subscribe(res=>{
      this.attendance = res;
    });

  }

  // -------------------------
  // LOAD NOTES
  // -------------------------
  loadNotes(){

    this.http.get<any[]>(
      `${this.api}/notes`,
      this.getAuthHeaders()
    ).subscribe(res=>{
      this.notes = res;
    });

  }

  // -------------------------
  // DOWNLOAD FILE
  // -------------------------
  download(fileName:string){

    const headers = new HttpHeaders({
      Authorization:`Bearer ${localStorage.getItem("token")}`
    });

    this.http.get(
      `${this.api}/download/${fileName}`,
      {headers, responseType:'blob'}
    ).subscribe(blob => {

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();

      window.URL.revokeObjectURL(url);

    });

  }

  // -------------------------
  // ATTENDANCE STATS
  // -------------------------
  get presentCount(){
    return this.attendance.filter(a=>a.status==="PRESENT").length;
  }

  get attendancePercent(){

    if(this.attendance.length===0) return 0;

    return Math.round(
      (this.presentCount / this.attendance.length) * 100
    );

  }

}