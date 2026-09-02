import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastService } from '../../services/toast.service';

interface LeadForm {
  name: string;
  mobile: string;
  email: string;
  clinic: string;
}

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './hero-carousel.component.html',
  // Phone (≤767px) overrides live in their own file so the desktop sheet stays untouched.
  styleUrls: ['./hero-carousel.component.scss', './hero-carousel.mobile.scss']
})
export class HeroCarouselComponent {

  staticBackgroundUrl: string = 'assets/Doctor.jpeg';
  hospitals: string[] = ['Select Clinic (Nearest Metro)', 'Lawrence Road (Keshavpuram, Red Line)', 'Mayur Vihar (Mayur Vihar Pocket-I, Pink Line)', 'Durgapuri (Shahdra, Red Line)', 'Uttam Nagar (Nawada, Blue Line)', 'Tigri (Saket, Yellow Line)'];

  formData: LeadForm = {
    name: '',
    mobile: '',
    email: '',
    clinic: this.hospitals[0]
  };

  isFormOpen = false;

  /** Ensures the mobile form auto-opens only once, after the user has nearly reached the footer. */
  private hasAutoOpened = false;

  private toast = inject(ToastService);

  constructor(private router: Router) {}

  /**
   * On mobile, reveal the booking form only once the user has scrolled almost all the
   * way down (near the footer) — so they've seen the whole page (important for a
   * stigmatized topic) before being asked, and the form is never an on-load popup.
   * The CTA button itself still appears right after the first section. Fires once
   * and never re-nags.
   */
  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (this.hasAutoOpened || this.isFormOpen) return;
    if (typeof window === 'undefined' || window.innerWidth > 899) return;

    const footer = document.querySelector('.main-footer');
    if (!footer) return;

    // Trigger once the footer is close to entering the viewport.
    if (footer.getBoundingClientRect().top < window.innerHeight * 1.2) {
      this.hasAutoOpened = true;
      this.openForm();
    }
  }

  openForm(): void {
    this.isFormOpen = true;
    document.body.style.overflow = 'hidden';
  }

  /** Hero "Book Appointment" CTA: opens the modal on mobile, scrolls to the inline form on desktop. */
  scrollToForm(): void {
    if (typeof window === 'undefined') return;

    if (window.innerWidth <= 899) {
      this.openForm();
      return;
    }

    document.querySelector('.hero-form-panel')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  closeForm(): void {
    this.isFormOpen = false;
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isFormOpen) this.closeForm();
  }

  async onSubmitForm(): Promise<void> {
    const isClinicSelected = this.formData.clinic !== this.hospitals[0];

    if (!this.formData.name || !this.formData.mobile || !isClinicSelected) {
      this.toast.warning('Please fill in Name, Mobile, and select a Clinic.');
      return;
    }

    const formData = new FormData();
    formData.append('access_key', '282bc130-d161-4e24-9e93-8eeac1293408');
    formData.append('subject', `New Appointment Request from tbclinic.in — ${this.formData.name}`);
    formData.append('from_name', 'TBClinic Website');
    formData.append('name', this.formData.name);
    formData.append('email', this.formData.email);
    formData.append('mobile', this.formData.mobile);
    formData.append('hospital', this.formData.clinic);
    formData.append('message', 'Please contact the above mentioned details');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        this.formData = { name: '', mobile: '', email: '', clinic: this.hospitals[0] };
        this.router.navigate(['/thank-you'], { queryParams: { source: 'home' } });
      } else {
        this.toast.error('Failed to send your request. Please try again.');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      this.toast.error('Network error. Please try again later.');
    }
  }
}