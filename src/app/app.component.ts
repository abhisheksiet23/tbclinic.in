// src/app/app.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// 1. Import all the completed components
import { HeaderComponent } from './components/header/header.component';
import { HeroCarouselComponent } from './components/hero-carousel/hero-carousel.component';
import { TbTreatmentsComponent } from './components/tb-treatments/tb-treatments.component';
// import { StatsComponent } from './components/stats/case-studies-and-blogs.component';
import { SpecialtiesCeComponent } from './components/specialties-ce/specialties-ce.component';
import { NetworkComponent } from './components/network/network.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    // All components are listed here:
    HeaderComponent, 
    HeroCarouselComponent, 
    TbTreatmentsComponent, 
    // StatsComponent, 
    SpecialtiesCeComponent, 
    NetworkComponent, 
    FooterComponent
  ],
  // The template URL contains the sequence of your components
  templateUrl: './app.component.html', 
})
export class AppComponent {
  title = 'TbClinic';
}