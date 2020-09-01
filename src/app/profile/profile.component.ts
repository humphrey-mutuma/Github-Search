
// tslint:disable-next-line:import-blacklist
import { Observable} from 'rxjs/Rx';
import { Repos} from '../repos';
import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { UserReposService } from '../user-repos.service';
import {environment} from '../../environments/environment';
import {ProfileRequestService} from '../user-profile.service';
import { User } from '../user';
import  { from } from 'rxjs'; from
import * as _operators from 'rxjs/operators';

// import { DOCUMENT } from '@angular/platform-browser';
// import { from } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ UserReposService, ProfileRequestService],
  
})
export class ProfileComponent implements OnInit {
  userName = 'humphrey-mutuma';
  repos: Repos[];
  users: User[];

  loading = false;
  errorMessage;
  windowScrolled: boolean;

  constructor( private githubService: UserReposService, private profileRequest: ProfileRequestService,  ) {
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }
  scrollToTop() {
      (function smoothscroll() {
          const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
          })();
      }

public getRepos(event: any) {
  this.loading = true;

  let promise = new Promise((resolve , reject) => {
   this.githubService.getRepos (this.userName).toPromise().then(response => {
     this.repos = response; this.loading = false; // this will push all data to array [repo]
      resolve();
    },
    error => {
      this.errorMessage = 'An error was encountered';
      this.loading = false;
    }
  );
  });
  return promise;
}
public getUsers(event: any) {
  this.loading = true;
  // tslint:disable-next-line:prefer-const
  let promise = new Promise((resolve , reject) => {
   this.profileRequest.getUsers(this.userName).toPromise().then(response => {
     this.users = response; this.loading = false; // this will push all data to array [repo]
      resolve();
    },
    error => {
      this.errorMessage = 'An error was encountered';
      this.loading = false;
    }
  );
  });
  return promise;
}


  ngOnInit() {
  }

}
