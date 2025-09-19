import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from '../aside/aside.component';
import { ProfileService } from '../aside/profile.service';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [SettingComponent, RouterModule, AsideComponent],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css',
})
export class SettingComponent {
  teacherData: any;

  constructor(private server: ServerService) {}
  ngOnInit() {
    this.server.getLogin().subscribe((res) => (this.teacherData = res));
  }
}
