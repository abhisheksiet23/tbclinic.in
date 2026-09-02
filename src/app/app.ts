// src/app/app.ts

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToastComponent } from './components/toast/toast.component';
import { BookingPopupComponent } from './components/booking-popup/booking-popup.component';
import { PopupService } from './services/popup.service';

@Component({
  selector: 'app-root',
  standalone: true,
  // The template is app.html
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ToastComponent,
    BookingPopupComponent,
  ],
})
// MUST export the class as App to satisfy main.ts/main.server.ts
export class App implements OnInit {
  title = 'TbClinic';

  constructor(private router: Router, private popup: PopupService) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Only scroll if running in browser
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        this.popup.registerPageView(event.urlAfterRedirects);
      }
    });
  }
}
