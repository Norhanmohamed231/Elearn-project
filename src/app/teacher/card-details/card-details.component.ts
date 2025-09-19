import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../aside/profile.service';


@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent {
  courseId: any;
  course: any;
  constructor(private _courseData: ProfileService,private _activatedRoute: ActivatedRoute ) {}

 ngOnInit(): void {
  this.courseId = parseInt(this._activatedRoute.snapshot.params['id'], 10);
  console.log('Course ID:', this.courseId); 
  this.course = this._courseData.show(this.courseId);
  console.log('Course Data:', this.course); 
}
}
