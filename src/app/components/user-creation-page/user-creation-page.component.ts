import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserCreationPageService } from './service/user-creation-page.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-creation-page',
  templateUrl: './user-creation-page.component.html',
  styleUrls: ['./user-creation-page.component.scss']
})
export class UserCreationPageComponent implements OnInit {

  form!: FormGroup

  mensagemSucessoError: string = 'Usuário Cadastrado com sucesso!';
  mensagemErro: string = 'Erro ao cadastrar, tente novamente mais tarde!';
  alertSucessError = false;
  alertError = false;

  constructor(
    private fb: FormBuilder,
    private userCreationPageService: UserCreationPageService,
    private router: Router
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

    this.userCreationPageService.createUser(payload).subscribe(res => {
      if (res) {
        this.alertSucessError = true;
        setTimeout(() => {
          this.startForm();
          this.alertSucessError = false;
          this.router.navigate(['/']);
        }, 2000)
      }
    }, error => {
      this.alertError = true;
      setTimeout(() => {
        this.alertError = false;
      }, 2000);
    })
  }
}
