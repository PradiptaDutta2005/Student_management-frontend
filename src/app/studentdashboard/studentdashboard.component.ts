import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studentdashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studentdashboard.component.html',
  styleUrl: './studentdashboard.component.css'
})
export class StudentdashboardComponent {

  attendance = [
    {
      subject: "Mathematics",
      date: "12 Feb 2026",
      status: "PRESENT"
    },
    {
      subject: "Physics",
      date: "13 Feb 2026",
      status: "ABSENT"
    },
    {
      subject: "Computer Science",
      date: "14 Feb 2026",
      status: "PRESENT"
    }
  ];

  notes = [
    {
      title: "Algebra Lecture 1",
      subject: "Mathematics",
      date: "10 Feb 2026",
      file: "abc123.pdf"
    },
    {
      title: "Thermodynamics Intro",
      subject: "Physics",
      date: "11 Feb 2026",
      file: "xyz456.pdf"
    }
  ];

  get presentCount() {
    return this.attendance.filter(a => a.status === 'PRESENT').length;
  }

  get attendancePercent() {
    if (this.attendance.length === 0) return 0;

    return Math.round(
      (this.presentCount / this.attendance.length) * 100
    );
  }

}