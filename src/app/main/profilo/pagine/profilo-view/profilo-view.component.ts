import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable, of } from 'rxjs';
import { map, switchMap, share, tap, shareReplay } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-profilo-view',
  templateUrl: './profilo-view.component.html',
  styleUrls: ['./profilo-view.component.scss']
})
export class ProfiloViewComponent implements OnInit {

  loading: boolean = false;
  dati$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.dati$ = route.params.pipe(
      tap(() => { this.loading = true }),
      switchMap(params => {
        if (params.nick == this.auth.currentUser.data.nick)
          return auth.user$
        else
          return afs
            .collection('users', ref => ref.where('nick', '==', params.nick))
            .snapshotChanges()
            .pipe(
              map((snap) => {
                if (!snap.length) {
                  console.log('nothing to see here')
                  router.navigate(['/dashboard/profilo'])
                }
              })
            )
      }),
      tap(console.log),
      tap(() => { this.loading = false }),
      shareReplay()
    )
  }

  ngOnInit() {
  }

}
