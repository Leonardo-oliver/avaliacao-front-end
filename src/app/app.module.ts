import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListViewPageComponent } from './components/user-list-view-page/user-list-view-page.component';
import { SingleUserViewPageComponent } from './components/single-user-view-page/single-user-view-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListViewPageComponent,
    SingleUserViewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
