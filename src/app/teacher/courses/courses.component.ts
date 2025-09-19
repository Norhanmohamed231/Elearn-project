import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from '../aside/aside.component';
import { ProfileService } from '../aside/profile.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CoursesComponent,RouterModule,AsideComponent,CardComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  cards:any;
  constructor(private _cardservice:ProfileService){}
  ngOnInit(){
  this.cards=this._cardservice.index().courses;
  }

}
