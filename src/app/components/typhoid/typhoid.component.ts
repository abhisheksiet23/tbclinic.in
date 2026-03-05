import { Component, signal, HostListener, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';

interface ConsultationForm {
  name: string;
  phone: string;
  email: string;
  symptoms: string;
  duration: string;
}

@Component({
  selector: 'app-typhoid',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './typhoid.component.html',
  styleUrl: './typhoid.component.scss',
})
export class TyphoidComponent {
  protected readonly title = signal('TB Caused by Typhoid: What You Need to Know');

  private toast = inject(ToastService);

  constructor(private router: Router) {}

  formData: ConsultationForm = {
    name: '',
    phone: '',
    email: '',
    symptoms: '',
    duration: ''
  };

  isSubmitted = signal(false);
  isLoading = signal(false);
  isScrolled = signal(false);

  symptoms = [
    { icon: '🤒', title: 'Persistent Fever', desc: 'Fever that continues or returns after typhoid recovery.' },
    { icon: '😮‍💨', title: 'Chronic Cough', desc: 'Cough developing weeks after typhoid, lasting more than 2-3 weeks.' },
    { icon: '💤', title: 'Unusual Fatigue', desc: 'Weakness or tiredness that is new or worsening post-typhoid.' },
    { icon: '🍽️', title: 'Loss of Appetite', desc: 'Reduced desire to eat and weight loss after typhoid.' },
    { icon: '🌙', title: 'Night Sweats', desc: 'Sweating at night that starts after typhoid recovery.' },
    { icon: '💔', title: 'Chest Pain', desc: 'Pain or discomfort in the chest, or difficulty breathing, after typhoid.' }
  ];

  facts = [
    'Typhoid can weaken your immune system, increasing TB risk.',
    'TB may develop weeks or months after typhoid recovery.',
    'Symptoms of TB after typhoid can be subtle or atypical.',
    'Early medical attention improves recovery chances.',
    'Both TB and typhoid are treatable with proper care.'
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

    async onSubmit() {
      this.isLoading.set(true);

      const formData = new FormData();
      formData.append('access_key', '282bc130-d161-4e24-9e93-8eeac1293408');
      formData.append('subject', `Typhoid Consultation - ${this.formData.name}`);
      formData.append('from_name', 'TBClinic Website');
      formData.append('name', this.formData.name);
      formData.append('email', this.formData.email);
      formData.append('phone', this.formData.phone);
      formData.append('symptoms', this.formData.symptoms);
      formData.append('duration', this.formData.duration);
      formData.append('message', 'Typhoid form submitted.');

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();
        this.isLoading.set(false);

        if (result.success) {
          // Reset form
          this.formData = {
            name: '',
            phone: '',
            email: '',
            symptoms: '',
            duration: ''
          };
          this.router.navigate(['/thank-you'], { queryParams: { source: 'typhoid' } });
        } else {
          this.toast.error('Failed to send your request. Please try again.');
        }
      } catch (error) {
        this.isLoading.set(false);
        this.toast.error('Network error. Please try again later.');
      }
    }

  redirectToTbClinic() {
    window.open('https://tbclinic.in', '_blank');
  }

  scrollToForm() {
    document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

