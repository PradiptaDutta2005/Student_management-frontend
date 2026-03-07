import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teacherdashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './teacherdashboard.component.html',
  styleUrls: ['./teacherdashboard.component.css']
})
export class TeacherdashboardComponent implements OnInit {

  api = "http://localhost:8080/teacher";

  subjects: any[] = [];
  students: any[] = [];
  notes: any[] = [];

  attendance: any = {};
  note: any = {};
  selectedFile: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadSubjects();
    this.loadStudents();
    this.loadNotes();
  }

  // 🔑 JWT HEADER
  getAuthHeaders() {
    const token = localStorage.getItem("token");

    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }

  // MARK ATTENDANCE
  markAttendance() {

    const body = {
      student: { id: this.attendance.studentId },
      subject: { id: this.attendance.subjectId },
      status: this.attendance.status
    };

      this.http.post(
    `${this.api}/mark-attendance`,
    body,
    {
      ...this.getAuthHeaders(),
      responseType: 'text'
    }
  ).subscribe((res:any) => {

    alert(res);   // backend message will appear

    this.attendance = {};

  });
  }

  // FILE SELECT
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // LOAD NOTES
  loadNotes() {
    this.http.get<any[]>(
      `${this.api}/notes`,
      this.getAuthHeaders()
    ).subscribe(res => {
      this.notes = res;
    });
  }

  // UPLOAD NOTES
  uploadNotes() {

    const formData = new FormData();

    formData.append("file", this.selectedFile);
    formData.append("subjectId", this.note.subjectId);
    formData.append("title", this.note.title);

    this.http.post(
      `${this.api}/upload-notes`,
      formData,
      this.getAuthHeaders()
    ).subscribe(() => {

      alert("Notes uploaded successfully");

      this.note = {};
      this.selectedFile = null;

      this.loadNotes();

    });
  }

  // LOAD SUBJECTS
  loadSubjects() {
    this.http.get<any[]>(
      "http://localhost:8080/teacher/subjects",
      this.getAuthHeaders()
    ).subscribe(res => {
      this.subjects = res;
    });
  }

  // LOAD STUDENTS
  loadStudents() {
    this.http.get<any[]>(
      "http://localhost:8080/teacher/students",
      this.getAuthHeaders()
    ).subscribe(res => {
      
      this.students = res;
    });
  }

  // DOWNLOAD NOTES
  download(fileName: string) {

  const token = localStorage.getItem("token");

  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });

  this.http.get(
    `http://localhost:8080/teacher/download/${fileName}`,
    { headers, responseType: 'blob' }
  ).subscribe((blob:any) => {

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();

    window.URL.revokeObjectURL(url);

  });

}

}