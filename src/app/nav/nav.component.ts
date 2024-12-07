import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(public router: Router) {}

  // Determine if the navbar should be shown
  shouldShowNavbar(): boolean {
    return this.router.url !== '/dashboard';
  }

  // Set the active class based on the current route, defaulting to 'home'
  setActive(route: string): boolean {
    return this.router.url === route || (this.router.url === '/' && route === 'home');
  }
}

