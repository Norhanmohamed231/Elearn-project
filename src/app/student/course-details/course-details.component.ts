import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent {
  courseId: any;
  courseData: any;
  constructor(
    private _StudentData: DataService,
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.subscribe(
      (param) => (this.courseId = Number(param['id']))
    );
    this.courseData = _StudentData.show(this.courseId);
  }
}
