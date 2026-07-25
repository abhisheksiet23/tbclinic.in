import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCarouselComponent } from '../hero-carousel/hero-carousel.component';
import { NetworkComponent } from '../network/network.component';
import { PatientStoriesComponent } from '../patient-stories/patient-stories.component';
import { SpecialtiesCeComponent } from '../specialties-ce/specialties-ce.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroCarouselComponent,
    NetworkComponent,
    PatientStoriesComponent,
    SpecialtiesCeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  /** Journey carousel state (mobile) */
  @ViewChild('journeyTrack') journeyTrack?: ElementRef<HTMLElement>;
  journeySteps = [0, 1, 2, 3, 4];
  journeyIndex = 0;
  private autoplayTimer?: ReturnType<typeof setInterval>;
  private scrollScheduled = false;

  /** The WhatsApp/Call/Book speed-dial is redundant with the hero's own CTAs, so it
   *  only appears once the user has scrolled a bit into the hero — and then stays
   *  visible for the rest of the session, even if they scroll back up. */
  showSpeedDial = false;

  constructor(private seo: SeoService) {}

  @HostListener('window:scroll')
  onSpeedDialScroll(): void {
    if (this.showSpeedDial || typeof window === 'undefined') return;
    // Key off the hero's own CTA row (not a fixed % of hero height) so the
    // speed-dial never appears while those buttons are still on screen —
    // the hero has grown taller over time and the old percentage-based
    // guess started firing while the CTA row was still visible.
    const heroCta = document.querySelector<HTMLElement>('.hero-cta-row');
    if (!heroCta) return;
    if (heroCta.getBoundingClientRect().bottom < 0) {
      this.showSpeedDial = true;
    }
  }

  /**
   * Myth cards: an exclusive accordion on mobile (one open at a time), but all
   * cards open and non-interactive on desktop (a 2-up grid of full myth+fact cards).
   * Done in JS because CSS can't reliably force a modern <details> open.
   */
  @HostListener('window:resize')
  applyMythMode(): void {
    if (typeof document === 'undefined') return;
    const items = document.querySelectorAll<HTMLDetailsElement>('.myth-item');
    const isDesktop = window.innerWidth >= 768;
    items.forEach((el, i) => {
      if (isDesktop) {
        el.removeAttribute('name'); // drop the exclusive group so all can stay open
        el.open = true;
      } else {
        el.setAttribute('name', 'myths');
        el.open = i === 0;
      }
    });
  }

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') return;
    this.applyMythMode();
    this.onSpeedDialScroll();
    // Autoplay only when the track is actually a scrollable carousel (mobile)
    // and the user hasn't asked to reduce motion.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce && this.isJourneyScrollable()) {
      this.autoplayTimer = setInterval(() => {
        const next = (this.journeyIndex + 1) % this.journeySteps.length;
        this.scrollJourneyTo(next, true);
      }, 4000);
    }
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  private isJourneyScrollable(): boolean {
    const el = this.journeyTrack?.nativeElement;
    return !!el && el.scrollWidth > el.clientWidth + 4;
  }

  /** Stop autoplaying the moment the user takes control. */
  stopAutoplay(): void {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = undefined;
    }
  }

  private scrollJourneyTo(i: number, smooth: boolean): void {
    const el = this.journeyTrack?.nativeElement;
    const child = el?.children[i] as HTMLElement | undefined;
    if (!el || !child) return;
    const target = child.offsetLeft - (el.clientWidth - child.clientWidth) / 2;
    el.scrollTo({ left: Math.max(0, target), behavior: smooth ? 'smooth' : 'auto' });
  }

  /** Keep the active dot in sync as the user swipes. */
  onJourneyScroll(): void {
    if (this.scrollScheduled) return;
    this.scrollScheduled = true;
    requestAnimationFrame(() => {
      this.scrollScheduled = false;
      const el = this.journeyTrack?.nativeElement;
      if (!el) return;
      const center = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      for (let i = 0; i < el.children.length; i++) {
        const c = el.children[i] as HTMLElement;
        const dist = Math.abs(c.offsetLeft + c.clientWidth / 2 - center);
        if (dist < bestDist) { bestDist = dist; best = i; }
      }
      this.journeyIndex = best;
    });
  }

  journeyPrev(): void {
    this.stopAutoplay();
    this.scrollJourneyTo(Math.max(this.journeyIndex - 1, 0), true);
  }

  journeyNext(): void {
    this.stopAutoplay();
    this.scrollJourneyTo(Math.min(this.journeyIndex + 1, this.journeySteps.length - 1), true);
  }

  journeyGoTo(i: number): void {
    this.stopAutoplay();
    this.scrollJourneyTo(i, true);
  }

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