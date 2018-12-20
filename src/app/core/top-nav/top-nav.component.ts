import { Component, OnInit,ElementRef, HostListener } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  user:User;
  openedNavMob: boolean = false;

  constructor(private auth: AuthService, private eRef: ElementRef) {  }
  
 
  ngOnInit() {
    this.auth.user.subscribe(user => {
      this.user = user;
    })
  }

  activeMobileNav(){
    this.openedNavMob = !this.openedNavMob
  }
  logIn(){
    this.auth.googleLogin()
  }
  logOut(){
    this.auth.logout();
  }
}

