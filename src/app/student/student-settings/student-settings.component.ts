import { Component } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';
import { DataService } from '../data.service';
import { ServerService } from '../../server.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-student-settings',
  standalone: true,
  imports: [AsideComponent, ReactiveFormsModule],
  templateUrl: './student-settings.component.html',
  styleUrl: './student-settings.component.css',
})
export class StudentSettingsComponent {
  studentData: any;

  // formData!: FormGroup;
  // loginUser!: any;

  constructor(private server: ServerService) {
    // this.server.user.subscribe((res) => {
    //   if (res && res.role) {
    //     this.loginUser = res;
    //     console.log(this.loginUser);
    //   }
    // });
  }

  ngOnInit() {
    this.server.getLogin().subscribe((res) => (this.studentData = res));
    // this.formData = new FormGroup({
    //   firstName: new FormControl(this.studentData.username, [
    //     Validators.required,
    //     Validators.minLength(3),
    //   ]),
    //   email: new FormControl(this.studentData.email, [
    //     Validators.email,
    //     Validators.required,
    //   ]),
    //   phone: new FormControl(this.studentData.phone, [Validators.required]),
    //   address: new FormControl(this.studentData.address, [Validators.required]),
    //   password: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(5),
    //   ]),
    // });
  }

  // updateData() {
  //   const model = {
  //     username: this.formData.value.firstName,
  //     email: this.formData.value.email,
  //     phone: this.formData.value.phone,
  //     address: this.formData.value.address,
  //     password: this.formData.value.password,
  //   };
  //   this.server
  //     .updateData(this.loginUser.id, this.loginUser.role, model)
  //     .subscribe((res) => {});
  // }
}
