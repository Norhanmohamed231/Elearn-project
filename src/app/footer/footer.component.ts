import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ServerService } from '../server.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule,NgIf],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  user: any = null;

  constructor(private service: ServerService, private router: Router) {
    this.service.user.subscribe((res) => {
      if (res && res.role) {
        this.user = res;
      }
    });
  }
}
