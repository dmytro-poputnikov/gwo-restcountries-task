import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { BehaviorSubject, filter, map } from 'rxjs';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class NavService {
  private isNavigateSource = new BehaviorSubject<boolean>(false);
  isNavigated$ = this.isNavigateSource.asObservable();

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private location: Location
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationStart),
        map((e) => {
          let event = e as NavigationStart;
          this.isNavigateSource.next(event.url !== '/');
          return event.url !== '/';
        })
      )
      .subscribe();
  }

  get levelUpUrl() {
    let url = decodeURIComponent(this.location.path());
    console.log(url);
    return url.substring(0, url.lastIndexOf('/'));
  }

  navigateLevelUp() {
    this.router.navigateByUrl(this.levelUpUrl);
  }
}
