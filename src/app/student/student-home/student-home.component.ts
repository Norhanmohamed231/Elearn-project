import { Component } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';
import { DataService } from '../data.service';
import { NgClass, NgIf } from '@angular/common';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-student-home',
  standalone: true,
  imports: [AsideComponent, NgClass, NgIf],
  templateUrl: './student-home.component.html',
  styleUrl: './student-home.component.css',
})
export class StudentHomeComponent {
  studentData: any;
  studentCourses: any = [
    'JavaScript',
    'HTML',
    'CSS',
    'TypeScript',
    'SQL',
    'Bootstrap',
  ];

  constructor(private _studentData: ServerService) {}

  ngOnInit() {
    this._studentData.getLogin().subscribe((res) => (this.studentData = res));
  }
}
