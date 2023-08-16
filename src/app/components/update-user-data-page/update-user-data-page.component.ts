import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserCreationPageService } from '../user-creation-page/service/user-creation-page.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserListViewPageService } from '../user-list-view-page/service/user-list-view-page.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-user-data-page',
  templateUrl: './update-user-data-page.component.html',
  styleUrls: ['./update-user-data-page.component.scss'],
  providers: [DatePipe]
})
export class UpdateUserDataPageComponent {

  form!: FormGroup

  idUser: any
  dataUser: any[] = [];

  isLoading = false

  mensagemSucessoError: string = 'Alteração feita com sucesso!';
  mensagemErro: string = 'Erro ao alterar, tente novamente mais tarde!';
  alertSucessError = false;
  alertError = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userCreationPageService: UserCreationPageService,
    private userListViewPageService: UserListViewPageService,
    private datePipe: DatePipe,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.idUser = this.route.snapshot.params['id'];
    this.getUser()
    this.startForm()
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

  formatarData(dataString: any) {
    const date = new Date(dataString);
    if (isNaN(date.getTime())) {
      return 'Data inválida';
    }
    return this.datePipe.transform(dataString, 'MM/dd/yyyy');
  }

  getUser() {
    this.isLoading = true;
    this.userListViewPageService.listSpecificUser(this.idUser).subscribe(data => {

      const formattedDate = this.formatarData(data.dateOfBirth)

      this.form.patchValue({
        title: data.title,
        firstName: data.firstName,
        lastName: data.lastName,
        picture: data.picture,
        gender: data.gender,
        email: data.email,
        dateOfBirth: formattedDate,
        phone: data.phone,
        street: data.location.street,
        city: data.location.city,
        state: data.location.state,
        country: data.location.country,
        timezone: data.location.timezone

      });

      this.isLoading = false;

    });
  }

  editUser() {

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

    this.userCreationPageService.updateUser(payload, this.idUser).subscribe(res => {
      if (res) {
        this.alertSucessError = true;
        setTimeout(() => {
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
