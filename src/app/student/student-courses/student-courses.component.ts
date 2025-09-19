import { Component } from '@angular/core';
import { StudentCardsComponent } from '../student-cards/student-cards.component';
import { AsideComponent } from '../aside/aside.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student-courses',
  standalone: true,
  imports: [StudentCardsComponent, AsideComponent],
  templateUrl: './student-courses.component.html',
  styleUrl: './student-courses.component.css',
})
export class StudentCoursesComponent {
  studentData: any;
  constructor(private _studentData: DataService) {
    this.studentData = _studentData.index();
  }
}
