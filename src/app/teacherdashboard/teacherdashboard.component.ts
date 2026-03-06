import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacherdashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacherdashboard.component.html',
  styleUrl: './teacherdashboard.component.css'
})
export class TeacherdashboardComponent {

  notes = [
    {
      id: 1,
      title: "Algebra Notes",
      subject: "Mathematics",
      date: "12 Feb 2026"
    },
    {
      id: 2,
      title: "Quantum Mechanics Intro",
      subject: "Physics",
      date: "18 Feb 2026"
    }
  ];

}