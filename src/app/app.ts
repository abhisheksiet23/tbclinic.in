// src/app/app.ts

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// 1. Import ALL your UI components here
import { HeaderComponent } from './components/header/header.component';
import { HeroCarouselComponent } from './components/hero-carousel/hero-carousel.component';
import { TbTreatmentsComponent } from './components/tb-treatments/tb-treatments.component';
// import { StatsComponent } from './components/stats/case-studies-and-blogs.component';
import { SpecialtiesCeComponent } from './components/specialties-ce/specialties-ce.component';
import { NetworkComponent } from './components/network/network.component';
import { FooterComponent } from './components/footer/footer.component';
import { PatientStoriesComponent } from './components/patient-stories/patient-stories.component';
// import { VideoCardComponent } from './components/video-card/video-card.component'; 
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurDoctorsComponent } from './components/our-doctors/our-doctors.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './components/privacy/PrivacyPolicyComponent';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. The template is app.html
  templateUrl: './app.html', 
  styleUrls: ['./app.css'], // Use .css or whatever file exists
  // 3. Import all components and modules here
  imports: [
    CommonModule, 
    RouterOutlet,
    HeaderComponent, 
    FooterComponent,
  ],
})
// 4. MUST export the class as App to satisfy main.ts/main.server.ts
export class App {
  title = 'TbClinic';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Only scroll if running in browser
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  }
}