import { Component, OnInit } from '@angular/core';
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
  constructor(private auth: AuthService) {  }
  openedNavMob: boolean = false;
  ngOnInit() {
    this.auth.user.subscribe(user => {
      this.user = user;
      console.log(user)
    })
  }

  activeMobileNav(){
    this.openedNavMob = !this.openedNavMob
  }
  logIn(){
    this.auth.googleLogin()
    setTimeout(()=>{ console.log(this.auth.user)},5000)
  }
  logOut(){
    this.auth.logout();
  }
}
