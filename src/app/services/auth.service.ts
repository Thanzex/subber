import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { auth } from 'firebase';

interface UserData {
  uid: string,
  nome: string
  cognome: string
  avatar: string
  nick: string
}

interface CurrentUser {
  isLoggedIn: boolean,
  data?: UserData,
  doc?: DocumentReference,
  role?: string
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: CurrentUser
  user$: Observable<UserData>

  constructor(
    private auth: AngularFireAuth
  ) {

    auth.authState.pipe(

    )
  }

  login(email: string, password: string) {
    return this.auth.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    return this.auth.auth.signOut()
  }
}
