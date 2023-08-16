import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListViewPageComponent } from './components/user-list-view-page/user-list-view-page.component';
import { SingleUserViewPageComponent } from './components/single-user-view-page/single-user-view-page.component';
import { UpdateUserDataPageComponent } from './components/update-user-data-page/update-user-data-page.component';
import { UserCreationPageComponent } from './components/user-creation-page/user-creation-page.component';


const routes: Routes = [
  { path: '', component: UserListViewPageComponent },
  { path: 'user-detail/:id', component: SingleUserViewPageComponent },
  { path: 'edit-user/:id', component: UpdateUserDataPageComponent },
  { path: 'registration-new-user', component: UserCreationPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
