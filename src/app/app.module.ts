import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListViewPageComponent } from './components/user-list-view-page/user-list-view-page.component';
import { SingleUserViewPageComponent } from './components/single-user-view-page/single-user-view-page.component';
import { UserCreationPageComponent } from './components/user-creation-page/user-creation-page.component';
import { UpdateUserDataPageComponent } from './components/update-user-data-page/update-user-data-page.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { DateMaskPipe } from './utils/date-mask.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListViewPageComponent,
    SingleUserViewPageComponent,
    UserCreationPageComponent,
    UpdateUserDataPageComponent,
    DateMaskPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
