import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserCreationPageService } from '../user-creation-page/service/user-creation-page.service';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userCreationPageService: UserCreationPageService,
    private userListViewPageService: UserListViewPageService,
    private datePipe: DatePipe
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
    // Verifique se a data é válida antes de tentar formatá-la
    const date = new Date(dataString);
    if (isNaN(date.getTime())) {
      return 'Data inválida';
    }

    return this.datePipe.transform(dataString, 'MM/dd/yyyy');
  }

  getUser() {
    this.isLoading = true;
    this.userListViewPageService.listSpecificUser(this.idUser).subscribe(data => {

      // const formattedDate = this.datePipe.transform(data.dateOfBirth, 'yyyy/MM/dd');

      const formattedDate = this.formatarData(data.dateOfBirth)

      // Use o patchValue para definir campos específicos retornados da API
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

  editUser(event: any) {
    event.preventDefault();
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
      console.log('usuario editado', res)
    })
  }
  onSubmit(event: Event): void {
    event.preventDefault(); // Impede o comportamento padrão de submissão
    // Seu código de envio de formulário aqui
  }

}
