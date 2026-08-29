import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
// Removed VideoCardComponent since we are building testimonial cards inline

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

@Component({
  selector: 'app-patient-stories',
  standalone: true,
  templateUrl: './patient-stories.component.html',
  // Phone (≤767px) overrides live in their own file so the desktop sheet stays untouched.
  styleUrls: ['./patient-stories.component.scss', './patient-stories.mobile.scss'],
  imports: [CommonModule]
})
export class PatientStoriesComponent implements OnInit, OnDestroy {
  
  testimonials: Testimonial[] = [
    { 
      quote: 'Best clinic for tb patients in delhi, my condition is totaly weak for last 2 year and. Started treatement in this clinic in 20 days my health is more better.', 
      name: 'Sheetal Gautam', 
      title: 'Former Patient' 
    },
    { 
      quote: 'I am Arti, it has been one month since I started taking treatment for TB and I am better now, thank you mam.', 
      name: 'Aarti Jaiswal', 
      title: 'Former Patient' 
    },
    { 
      quote: 'My treatment is going on at Durgapuri Meddcross clinic and I have become well after taking my treatment. Whoever has any problem should come to Meddcross clinic and get it checked. Thank you Meddcross team.', 
      name: 'Sonu Reshma', 
      title: 'Former Patient' 
    },
    { 
      quote: 'Two members of our family are undergoing treatment at Medcross Clinic and they have been cured, thank you.', 
      name: 'Himanshi Govind', 
      title: 'Former Patient' 
    },
    { 
      quote: 'Best treatment is given in Medcross clinic. I am tired of getting treatment here. Thank you Medcross team.', 
      name: 'Lalit Koli', 
      title: 'Former Patient' 
    },
    { 
      quote: 'I am very happy that my daughter Tapasya got treatment from Medcross TB clinic. Her TB treatment is complete today. She is completely fine. I would suggest that you get TB treatment from Medcross clinic only. Dr. Sunita Rani here is very supportive and I would also like to thank her team.', 
      name: 'Inderjeet yadav', 
      title: 'Former Patient' 
    },
    { 
      quote: 'I got a lot of relief after taking treatment from Med Cross clinic and I would suggest this to everyone, if anyone wants to take treatment for TB then they should go to Med Cross clinic, thank you mam.', 
      name: 'Deepanshu Shrivastav', 
      title: 'Former Patient' 
    },
    { 
      quote: 'Medcrosss TB clinic they give very good treatment to those persons who suffering fromm TB and theyy also take a full possibility of our patient!!', 
      name: 'KHUSHII', 
      title: 'Former Patient' 
    },
    {
    quote: "Doctor Sunita ma'am is so polite. Nice behavior and staff is fully cooperative. I really like this clinic.",
    name: "Abu Nafisa Naaz Hussain",
    title: "Former Patient"
  },
  {
    quote: "We are satisfied with the treatment. Staff behavior is good and prices are affordable.",
    name: "Sania Khan",
    title: "Former Patient"
  },
  {
    quote: "Best clinic for TB patients in Delhi. My condition was weak for 2 years and within 20 days of treatment here I improved a lot.",
    name: "Sheetal Gautam",
    title: "Former Patient"
  },
  {
    quote: "We visited for spine TB treatment. Dr. Sunita is very supportive and guided us well. Staff is very helpful.",
    name: "Shankar Bhagat",
    title: "Former Patient"
  },
  {
    quote: "Hospital treatment is very good. My health improved after taking medicine. Thanks to Medcross Clinic.",
    name: "Kehkashan Siddiqui",
    title: "Former Patient"
  },
  {
    quote: "My treatment experience was very good. Doctor ma'am and staff members are very friendly.",
    name: "Aman Dhyani",
    title: "Former Patient"
  },
  {
    quote: "I had severe back pain and big hospitals couldn’t help. Dr. Sunita treated me well and I got relief in 2 days. Highly recommended.",
    name: "Sana Parveen",
    title: "Former Patient"
  },
  {
    quote: "Well-behaved staff and best treatment at a reasonable price. The whole team is good.",
    name: "Rollin Lohia 77",
    title: "Former Patient"
  },
  {
    quote: "I was taking treatment for long and finally got cured. Staff is very cooperative.",
    name: "Shahid Raza",
    title: "Former Patient"
  },
  {
    quote: "Very good experience. Staff explained clearly how and when to take medication.",
    name: "Simmu Kaur",
    title: "Former Patient"
  },
  {
    quote: "Best doctor for tuberculosis. I have been her patient for 4 months and never felt negative. Staff is very supportive.",
    name: "Piyush Hada",
    title: "Former Patient"
  },
  {
    quote: "Good clinic for TB treatment. My mother had spinal TB and improved remarkably. Doctor and staff behavior is good.",
    name: "Mukesh Rai",
    title: "Former Patient"
  },
  {
    quote: "Best doctor indeed for TB. I took treatment for 9 months and she helped me recover. Staff is adorable and helpful.",
    name: "Rinku Singh",
    title: "Former Patient"
  },
  {
    quote: "Dr. Sunita ma'am is very intelligent and compassionate. My wife is fine now. Staff is well trained.",
    name: "Qamar Sibtain",
    title: "Former Patient"
  },
  {
    quote: "Excellent care at TB Clinic Durga Puri. Doctors are knowledgeable and attentive. Highly recommended.",
    name: "Shiv Kumar",
    title: "Former Patient"
  },
  {
    quote: "I thank Dr. Sunita ma'am for successful TB treatment. She guided me at every stage. Great team effort.",
    name: "Gaurav Kashyap",
    title: "Former Patient"
  },
  {
    quote: "I was diagnosed with TB and didn’t get results earlier. Dr. Sunita treated me well and now I’m totally fine.",
    name: "Sunil Kumar",
    title: "Former Patient"
  },
  {
    quote: "Amazing clinic. Doctors and staff behavior is very good. I'm thankful my treatment got completed successfully.",
    name: "Adarsh",
    title: "Former Patient"
  },
  {
    quote: "Best TB clinic with proper facilities. Very clean. Dr. Sunita diagnosed sharply and treated my daughter well.",
    name: "Tulsi Dass",
    title: "Former Patient"
  },
  {
    quote: "Exceptional care at the TB clinic. Staff was knowledgeable and supportive throughout my treatment.",
    name: "Pranav Raj",
    title: "Former Patient"
  }
  ];

  /** SLIDER STATE */

  /**
   * What the track actually renders: the last two reviews, then all of them,
   * then the first two. Those clones are what peek out at either end, and each
   * is swapped for its real counterpart the instant the slide animation
   * finishes — so the carousel loops with no visible seam and no empty edge.
   *
   * Two clones per side rather than one: while a clone is centred it needs a
   * neighbour of its own to fill the peek beside it.
   */
  slides: Testimonial[] = [];

  /** How many reviews are mirrored onto each end of the track. */
  private readonly cloneCount = 2;

  /** Where the real testimonials start inside `slides`. */
  private offset = 0;

  /** False when there are too few reviews to clone from — then the track just clamps. */
  private isLooping = false;

  /** Index into `slides`. */
  position = 0;

  /** Dropped while snapping across the seam, so the jump isn't animated. */
  transitionEnabled = true;

  private autoScrollInterval: any;
  private snapSafetyTimer: any;
  private isAnimating = false;
  private isBrowser: boolean;
  private touchStartX = 0;

  /** Index into `testimonials` — drives the dots and the active-card styling. */
  get currentSlideIndex(): number {
    const total = this.testimonials.length;
    if (!total) return 0;
    return (this.position - this.offset + total * 2) % total;
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  /** How far through the set we are — drives the progress bar. */
  get progressPercent(): number {
    const total = this.testimonials.length;
    return total ? ((this.currentSlideIndex + 1) / total) * 100 : 0;
  }


  /**
   * Centres the active card and lets the neighbours peek out on either side.
   * `--card-w` is the card's share of the track width and is set per breakpoint
   * in the stylesheet, so the peek stays proportional from phone to desktop.
   */
  get trackTransform(): string {
    return `translateX(calc((100% - var(--card-w)) / 2 - ${this.position} * var(--card-w)))`;
  }

  ngOnInit(): void {
    const items = this.testimonials;
    const n = items.length;
    const c = this.cloneCount;

    if (n > c) {
      this.slides = [...items.slice(n - c), ...items, ...items.slice(0, c)];
      this.offset = c;
      this.isLooping = true;
    } else {
      // Too few reviews to clone from — fall back to a plain, wrapping track
      this.slides = [...items];
      this.offset = 0;
      this.isLooping = false;
    }
    this.position = this.offset;

    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
    clearTimeout(this.snapSafetyTimer);
  }

  /** Auto-scroll slides */
  startAutoScroll(): void {
    if (!this.isBrowser) return;
    this.stopAutoScroll();
    this.autoScrollInterval = setInterval(() => this.advance(1), 4000);
  }

  /** Pause autoplay — on hover, and while the component is torn down */
  stopAutoScroll(): void {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
      this.autoScrollInterval = undefined;
    }
  }

  /** Restart auto-scroll on user interaction */
  resetAutoScroll(): void {
    this.startAutoScroll();
  }

  /** Next slide */
  nextSlide(): void {
    this.advance(1);
    this.resetAutoScroll();
  }

  /** Previous slide */
  prevSlide(): void {
    this.advance(-1);
    this.resetAutoScroll();
  }

  private advance(step: number): void {
    // One move at a time: a second move mid-flight could carry the track past
    // a clone before it has been swapped back, which would strand the track.
    if (this.isAnimating) return;

    if (!this.isLooping) {
      const total = this.testimonials.length;
      if (total) this.position = (this.position + step + total) % total;
      return;
    }

    this.isAnimating = true;
    // Overshooting onto a clone is intentional — `settle` swaps it for the real
    // card once the slide lands, which is what makes the wrap seamless.
    this.position += step;

    // transitionend is the trigger for releasing the lock and snapping the
    // seam; this is the backstop for when it never fires (background tab).
    clearTimeout(this.snapSafetyTimer);
    this.snapSafetyTimer = setTimeout(() => this.settle(), 900);
  }

  /** Slide finished — release the lock, and hop the seam if we're on a clone. */
  onTransitionEnd(event: TransitionEvent): void {
    // The cards' own scale/opacity transitions bubble up here too, and land on
    // 'transform' as well — only the track's own movement should settle it.
    if (event.target !== event.currentTarget) return;
    if (event.propertyName !== 'transform') return;
    this.settle();
  }

  private settle(): void {
    if (!this.isAnimating) return;
    this.isAnimating = false;
    clearTimeout(this.snapSafetyTimer);

    const total = this.testimonials.length;
    // Landed on the leading clone of the first card → hop to the real first.
    if (this.position === total + this.offset) this.snapTo(this.offset);
    // Landed on the trailing clone of the last card → hop to the real last.
    else if (this.position === this.offset - 1) this.snapTo(total + this.offset - 1);
  }

  /** Swap a clone for the real card it mirrors, without animating the jump. */
  private snapTo(position: number): void {
    this.transitionEnabled = false;
    this.position = position;

    if (!this.isBrowser) {
      this.transitionEnabled = true;
      return;
    }

    // Two frames: one for the browser to paint the un-animated jump, the next
    // to arm the transition again. Re-arming in the same frame would animate it.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => (this.transitionEnabled = true));
    });
  }

  /** Swipe support — the primary way through the carousel on touch devices */
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].clientX;
  }

  onTouchEnd(event: TouchEvent): void {
    const deltaX = event.changedTouches[0].clientX - this.touchStartX;
    if (Math.abs(deltaX) < 40) return; // ignore taps and stray drags
    deltaX < 0 ? this.nextSlide() : this.prevSlide();
  }
}