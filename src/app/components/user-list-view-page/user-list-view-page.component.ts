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
      console.log('data', response); // Lida com a resposta da API
    });
  }

  deleteUser(idUser: any) {
    this.userListViewPageService.deleteUser(idUser).subscribe(response => {
      this.dataUser.push(response);
      this.dataUser.splice(this.dataUser.indexOf(idUser), 1);
      this.getUser();
    })
  }

}
