import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  username: string;
  role: 'STUDENT' | 'TEACHER';
  createdAt: Date;
}

@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {

  searchText = '';
  filterType = 'newest';

  users: User[] = [
    { id: 1, username: 'Rahul', role: 'STUDENT', createdAt: new Date('2026-01-20') },
    { id: 2, username: 'Amit', role: 'TEACHER', createdAt: new Date('2026-02-12') },
    { id: 3, username: 'Sneha', role: 'STUDENT', createdAt: new Date('2026-02-18') },
    { id: 4, username: 'Priya', role: 'TEACHER', createdAt: new Date('2026-03-01') }
  ];

  pendingStudents = [
    { username: 'Riya' },
    { username: 'Kunal' }
  ];

  pendingTeachers = [
    { username: 'Dr Sharma' },
    { username: 'Prof Sen' }
  ];

  get filteredUsers() {

    let filtered = this.users.filter(u =>
      u.username.toLowerCase().includes(this.searchText.toLowerCase())
    );

    if (this.filterType === 'newest') {
      filtered = filtered.sort((a,b)=> b.createdAt.getTime()-a.createdAt.getTime());
    }

    if (this.filterType === 'oldest') {
      filtered = filtered.sort((a,b)=> a.createdAt.getTime()-b.createdAt.getTime());
    }

    if (this.filterType === '2months') {
      const twoMonthsAgo = new Date();
      twoMonthsAgo.setMonth(twoMonthsAgo.getMonth()-2);

      filtered = filtered.filter(u => u.createdAt > twoMonthsAgo);
    }

    return filtered;
  }

  approveStudent(student:any){
    alert(student.username + " approved");
  }

  approveTeacher(teacher:any){
    alert(teacher.username + " approved");
  }

  rejectUser(user:any){
    alert(user.username + " rejected");
  }

}