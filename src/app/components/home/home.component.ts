import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HeroCarouselComponent } from '../hero-carousel/hero-carousel.component';
import { NetworkComponent } from '../network/network.component';
import { PatientStoriesComponent } from '../patient-stories/patient-stories.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HeroCarouselComponent,
    NetworkComponent,
    PatientStoriesComponent,
  ],
  templateUrl: './home.component.html',
  // Phone (≤767px) overrides live in their own file so the desktop sheet stays untouched.
  styleUrls: ['./home.component.scss', './home.mobile.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  /** The WhatsApp/Call/Book speed-dial is redundant with the hero's own CTAs, so it
   *  only appears once the user has scrolled a bit into the hero — and then stays
   *  visible for the rest of the session, even if they scroll back up. */
  showSpeedDial = false;

  /** The mobile "TB Journey" rail — rendered 3x in the template (see
   *  home.component.html) so it can loop endlessly, the same effect the
   *  patient-stories carousel gets from cloned slides. */
  journeySteps: { num: string; title: string; body: string; icon: SafeHtml }[] = [];

  /** Which of the 4 real cards the arrow buttons currently treat as centred —
   *  tracked directly rather than re-derived from the DOM on every click, so
   *  a "next" tap always means exactly one card, not "wherever the browser's
   *  scroll-snap + IntersectionObserver happen to agree the moment you tap". */
  private journeyIndex = 0;

  constructor(private seo: SeoService, private sanitizer: DomSanitizer) {
    this.journeySteps = [
      {
        num: '01',
        title: 'Symptoms get dismissed',
        body: 'Cough. Fever. Weight loss. Often ignored.',
        icon: this.trustIcon(`
          <circle cx="20" cy="15" r="8"/>
          <path d="M12 27c-4 3-6 8-6 13h28c0-5-2-10-6-13"/>
          <path d="M27 20c3-2 6-2 8 0M31 13c3-3 8-3 11 0"/>
        `)
      },
      {
        num: '02',
        title: 'Diagnosis gets delayed',
        body: 'Multiple consultations. Conflicting answers. More uncertainty.',
        icon: this.trustIcon(`
          <rect x="7" y="10" width="34" height="30" rx="4"/>
          <path d="M7 19h34M16 6v8M32 6v8"/>
          <circle cx="24" cy="29" r="6"/>
          <path d="M24 26v3l2 2"/>
        `)
      },
      {
        num: '03',
        title: 'Treatment gets complicated',
        body: 'Wrong or incomplete treatment can make TB harder to treat.',
        icon: this.trustIcon(`
          <rect x="13" y="9" width="22" height="32" rx="6"/>
          <path d="M13 21h22"/>
          <path d="M20 30l8 6M28 30l-8 6"/>
        `)
      },
      {
        num: '04',
        title: 'Expert care makes the difference',
        body: 'Accurate diagnosis, right treatment and complete support.',
        icon: this.trustIcon(`
          <path d="M24 6l15 6v11c0 10-6 17-15 21-9-4-15-11-15-21V12z"/>
          <path d="M24 17l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.6-4.8 2.6.9-5.4-3.9-3.8 5.4-.8z"/>
        `)
      }
    ];
  }

  /** These SVG fragments are hard-coded above, not user input — safe to trust. */
  private trustIcon(svgInner: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgInner);
  }

  /**
   * Advances the journey rail by exactly one card, always landing in the
   * middle ("real") copy of the 3x-rendered list. `journeyIndex` is tracked
   * directly rather than re-derived from the DOM each click — the
   * carousel's own swipe-boundary correction (in initJourneyLoop) needs a
   * moment to settle after any scroll, so reading "which card looks
   * centred right now" immediately after a click can catch it mid-settle.
   */
  scrollJourneyBy(dir: 1 | -1): void {
    const rail = document.querySelector<HTMLElement>('.m-journey-rail');
    const steps = rail?.querySelectorAll<HTMLElement>('.m-step');
    if (!rail || !steps || steps.length < 8) return;

    const perSet = steps.length / 3;
    this.journeyIndex = (this.journeyIndex + dir + perSet) % perSet;
    const target = steps[perSet + this.journeyIndex]; // middle set, so it's the accessible copy

    rail.scrollTo({
      left: target.offsetLeft + target.offsetWidth / 2 - rail.clientWidth / 2,
      behavior: 'smooth'
    });
  }

  /**
   * Endless-loop illusion for the journey rail, matching the peek-carousel
   * shape of the patient-stories section: one card centred, its neighbours
   * peeking in on both sides, wrapping past card 4 back to card 1 (and
   * before card 1 back to card 4). It's rendered 3x (see the template) —
   * starts centred on the middle "real" copy's first card, and whenever a
   * scroll carries the centred position into either flanking copy, jumps
   * silently (no animation) back into the equivalent spot in the middle
   * copy, since all three copies are pixel-identical.
   */
  private initJourneyLoop(): void {
    const rail = document.querySelector<HTMLElement>('.m-journey-rail');
    const steps = rail?.querySelectorAll<HTMLElement>('.m-step');
    if (!rail || !steps || rail.scrollWidth === 0 || steps.length < 8) return;

    const setWidth = rail.scrollWidth / 3;
    const perSet = steps.length / 3;
    const centerOn = (el: HTMLElement) =>
      rail.scrollLeft = el.offsetLeft + el.offsetWidth / 2 - rail.clientWidth / 2;

    // Start centred on the first card of the middle ("real") copy.
    centerOn(steps[perSet]);

    // Debounced, not "on every scroll event": correcting immediately was
    // firing mid-flight during the arrow buttons' own smooth-scrollTo (any
    // target past card 3 crosses the 1.5x threshold before the animation
    // finishes), which yanked the scroll position and killed the animation
    // outright. Waiting for scrolling to actually stop for a beat — a real
    // swipe's momentum settling, or a smooth-scroll's animation completing —
    // means this only ever corrects a final resting position, never one
    // that's still in transit.
    let settleTimer: ReturnType<typeof setTimeout>;
    rail.addEventListener('scroll', () => {
      clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        if (rail.scrollLeft < setWidth * 0.5) {
          rail.scrollLeft += setWidth;
        } else if (rail.scrollLeft > setWidth * 1.5) {
          rail.scrollLeft -= setWidth;
        }
      }, 120);
    }, { passive: true });

    // Same depth cue the reviews carousel gives its side cards: the one
    // actually centred is full-strength, the peeking neighbours are dimmed.
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList.toggle('is-active', entry.intersectionRatio > 0.6);
      }
    }, { root: rail, threshold: [0, 0.6, 1] });
    steps.forEach(step => observer.observe(step));
  }

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
    this.initJourneyLoop();
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