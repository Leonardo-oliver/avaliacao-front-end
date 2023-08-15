import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserCreationPageService } from './service/user-creation-page.service';


@Component({
  selector: 'app-user-creation-page',
  templateUrl: './user-creation-page.component.html',
  styleUrls: ['./user-creation-page.component.scss']
})
export class UserCreationPageComponent implements OnInit {

  form!: FormGroup

  constructor(
    private fb: FormBuilder,
    private userCreationPageService: UserCreationPageService
  ) {
  }

  ngOnInit(): void {
    this.startForm();
  }

  startForm() {
    this.form = this.fb.group({
      title: [""],
      firstName: [""],
      lastName: [""],
      gender: [""],
      email: [""],
      dateOfBirth: [""],
      registerDate: [""],
      phone: [""],
      picture: [""],
      street: [""],
      city: [""],
      state: [""],
      country: [""],
      timezone: [""],
      location: [""],
    });

  }


  registerUser() {

    const locationData = {
      street: this.form.get('street')?.value,
      city: this.form.get('city')?.value,
      state: this.form.get('state')?.value,
      country: this.form.get('country')?.value,
      timezone: this.form.get('timezone')?.value,
    }

    const payload: any = {
      title: this.form.get('title')?.value,
      firstName: this.form.get('firstName')?.value,
      lastName: this.form.get('lastName')?.value,
      picture: this.form.get('picture')?.value,
      gender: this.form.get('gender')?.value,
      email: this.form.get('email')?.value,
      dateOfBirth: this.form.get('dateOfBirth')?.value,
      phone: this.form.get('phone')?.value,
      location: locationData,
    };

    this.userCreationPageService.createUser(payload).subscribe(response => {

    })
  }
}
