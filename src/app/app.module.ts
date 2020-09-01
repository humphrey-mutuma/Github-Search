// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { UserReposService } from './user-repos.service';
import {ProfileRequestService} from './user-profile.service';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [ UserReposService, ProfileRequestService],

  bootstrap: [AppComponent]
})
export class AppModule { }
