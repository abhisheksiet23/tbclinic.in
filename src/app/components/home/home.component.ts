import { Component, OnInit } from '@angular/core';
import { HeroCarouselComponent } from '../hero-carousel/hero-carousel.component';
import { NetworkComponent } from '../network/network.component';
import { PatientStoriesComponent } from '../patient-stories/patient-stories.component';
import { SpecialtiesCeComponent } from '../specialties-ce/specialties-ce.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroCarouselComponent,
    NetworkComponent,
    PatientStoriesComponent,
    SpecialtiesCeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setPage({
      title: 'TB Clinic Delhi | Expert Tuberculosis Diagnosis & Treatment | MEDCROSS',
      description: 'MEDCROSS by TB Clinic offers expert tuberculosis diagnosis and treatment at 5 Delhi locations. Treating pulmonary TB, lymph node TB, bone TB, brain TB and all forms of tuberculosis. Book a consultation: +91 92-180-26183.',
      keywords: 'TB clinic Delhi, tuberculosis treatment Delhi, TB expert doctor, pulmonary TB, MEDCROSS TB clinic, TB diagnosis Delhi',
      canonicalUrl: 'https://tbclinic.in/',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'MedicalClinic',
        '@id': 'https://tbclinic.in/#home',
        'name': 'MEDCROSS by TB Clinic',
        'url': 'https://tbclinic.in',
        'telephone': '+919218026183',
        'email': 'tbclinic.info@gmail.com',
        'description': 'Leading tuberculosis treatment clinic in Delhi. Expert TB experts treating all forms of TB across 5 clinic locations.',
        'areaServed': {
          '@type': 'City',
          'name': 'Delhi',
          'addressCountry': 'IN'
        },
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            'opens': '09:30',
            'closes': '17:00'
          }
        ]
      }
    });
  }
}