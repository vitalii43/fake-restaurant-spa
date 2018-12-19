import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import  * as observable  from 'rxjs'
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user: Observable<firebase.User | null>;
  admin: any;

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private route: Router
  ) { 
    this.user = this.afAuth.user;
    this.afs.doc<any>(`admin/1`).valueChanges().subscribe( admin =>{
      this.admin = admin;
    })
  }
  googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider()
    this.afAuth.auth.signInWithPopup(provider)
  }
  logout(){
    this.afAuth.auth.signOut();
  }
}
