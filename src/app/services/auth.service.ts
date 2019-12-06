import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { DocumentReference } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
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
  currentUser: CurrentUser = {
    data: {
      avatar:'https://i.pravatar.cc/200',
      nome:'pinco',
      cognome:'pallino',
      nick:'aaa',
      uid:'1'
    },
    isLoggedIn: false,

  }
  user$: Observable<UserData>

  constructor(
    private auth: AngularFireAuth
  ) {

    this.user$ = of(this.currentUser.data)
    auth.authState.pipe(

    )
  }

  login(email: string, password: string) {
    this.currentUser.data.nick='test'
    return this.auth.auth.signInWithEmailAndPassword(email, password)

  }

  logout() {
    return this.auth.auth.signOut()
  }
}
