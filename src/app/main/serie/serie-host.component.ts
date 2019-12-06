import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-serie-host',
  templateUrl: './serie-host.component.html',
  styles: []
})
export class SerieHostComponent implements OnInit {

  constructor(
    readonly router: Router,
    readonly viewportScroller: ViewportScroller
  ) {

    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.viewportScroller.scrollToPosition([0, 0]);
      
    });

  }

  ngOnInit() {
  }

}
