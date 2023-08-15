import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-user-view-page',
  templateUrl: './single-user-view-page.component.html',
  styleUrls: ['./single-user-view-page.component.scss']
})
export class SingleUserViewPageComponent {

  idUser: any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.idUser = this.route.snapshot.params['id'];
    console.log('this.idUser', this.idUser)
  }

}
