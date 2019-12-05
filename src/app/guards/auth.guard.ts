import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, tap, share } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.isLoggedIn().subscribe((value) => {
      if(typeof value != "boolean")
        this.router.navigateByUrl(value as UrlTree)
    })
    return this.isLoggedIn();
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isLoggedIn();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.user.pipe(map(user => { return !!user })) as unknown as Observable<boolean>;
  }

  isLoggedIn(): Observable<boolean | UrlTree> {
    return this.auth.user.pipe(
      tap(console.log),
      map(user => !!user),
      map(status => {
        if (status)
          return true
        else
          return this.router.parseUrl('/login')
      }),
      share()
    )
  }
}
