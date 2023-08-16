import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserListViewPageService } from '../user-list-view-page/service/user-list-view-page.service';

@Component({
  selector: 'app-single-user-view-page',
  templateUrl: './single-user-view-page.component.html',
  styleUrls: ['./single-user-view-page.component.scss']
})
export class SingleUserViewPageComponent {

  idUser: any
  dataUser: any[] = [];

  isLoading = false

  constructor(
    private route: ActivatedRoute,
    private userListViewPageService: UserListViewPageService,
  ) { }

  ngOnInit(): void {
    this.idUser = this.route.snapshot.params['id'];
    this.getUser();
  }



  getUser() {
    this.isLoading = true;
    this.userListViewPageService.listSpecificUser(this.idUser).subscribe(response => {
      this.dataUser.push(response)

      this.isLoading = false;
    });
  }

}
