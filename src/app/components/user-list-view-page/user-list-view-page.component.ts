import { Component } from '@angular/core';
import { UserListViewPageService } from './service/user-list-view-page.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list-view-page',
  templateUrl: './user-list-view-page.component.html',
  styleUrls: ['./user-list-view-page.component.scss']
})
export class UserListViewPageComponent {

  dataUser: any;
  isLoading = false

  mensagemSucessoError: string = 'Usuário removido!';
  mensagemErro: string = 'Erro ao remover, tente novamente mais tarde!';
  alertSucessError = false;
  alertError = false;

  constructor(
    private userListViewPageService: UserListViewPageService,

  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.isLoading = true;
    this.userListViewPageService.getUser().subscribe(response => {
      this.dataUser = response.data
      this.isLoading = false;
    });
  }

  deleteUser(idUser: any) {
    this.userListViewPageService.deleteUser(idUser).subscribe(res => {
      if (res) {
        this.alertSucessError = true;
        setTimeout(() => {
          this.dataUser.push(res);
          this.dataUser.splice(this.dataUser.indexOf(idUser), 1);
          this.getUser();
          this.alertSucessError = false;

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
