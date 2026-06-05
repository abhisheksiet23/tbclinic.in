import { Component, signal, HostListener, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import { SeoService } from '../../services/seo.service';

interface ConsultationForm {
  name: string;
  phone: string;
  email: string;
  symptoms: string;
  duration: string;
}

@Component({
  selector: 'app-blood-from-mouth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './blood-from-mouth.component.html',
  styleUrl: './blood-from-mouth.component.scss',
})
export class bloodFromMouthComponent implements OnInit {
  protected readonly title = signal('Blood from Mouth Can Be TB');

  private toast = inject(ToastService);
  private seo = inject(SeoService);

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Coughing Up Blood – Could It Be TB? | MEDCROSS TB Clinic Delhi',
      description: 'Coughing up blood (hemoptysis) can be a sign of tuberculosis. Learn the symptoms of TB, when to seek immediate medical help, and how MEDCROSS TB Clinic Delhi can help. Book a free consultation today.',
      keywords: 'coughing up blood TB, blood from mouth tuberculosis, hemoptysis TB, blood in cough Delhi, TB symptoms blood',
      canonicalUrl: 'https://tbclinic.in/blood-from-mouth',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        'url': 'https://tbclinic.in/blood-from-mouth',
        'name': 'Blood from Mouth – Could It Be TB?',
        'description': 'Coughing up blood can be a warning sign of tuberculosis. This page explains TB-related hemoptysis, associated symptoms, and the importance of early diagnosis.',
        'about': {
          '@type': 'MedicalCondition',
          'name': 'Hemoptysis in Tuberculosis',
          'associatedAnatomy': { '@type': 'AnatomicalStructure', 'name': 'Lung' },
          'signOrSymptom': ['Coughing up blood', 'Persistent cough', 'Fever', 'Night sweats', 'Weight loss']
        },
        'mainEntity': { '@id': 'https://tbclinic.in/#organization' }
      }
    });
  }

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
    { icon: '🩸', title: 'Blood in Cough', desc: 'Coughing up blood or blood-streaked sputum (hemoptysis)' },
    { icon: '🤒', title: 'Persistent Fever', desc: 'Low-grade fever that persists for weeks' },
    { icon: '😓', title: 'Night Sweats', desc: 'Excessive sweating during sleep' },
    { icon: '⚖️', title: 'Weight Loss', desc: 'Unexplained weight loss over time' },
    { icon: '😰', title: 'Chronic Cough', desc: 'Cough lasting more than 3 weeks' },
    { icon: '💨', title: 'Breathing Difficulty', desc: 'Shortness of breath or chest pain' }
  ];

  facts = [
    'TB is curable with proper treatment',
    'Early diagnosis leads to better outcomes',
    'TB treatment typically takes 6-9 months',
    'TB can affect anyone regardless of age'
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

    async onSubmit() {
      this.isLoading.set(true);

      const formData = new FormData();
      formData.append('access_key', '282bc130-d161-4e24-9e93-8eeac1293408');
      formData.append('subject', `Blood from Mouth Consultation - ${this.formData.name}`);
      formData.append('from_name', 'TBClinic Website');
      formData.append('name', this.formData.name);
      formData.append('email', this.formData.email);
      formData.append('phone', this.formData.phone);
      formData.append('symptoms', this.formData.symptoms);
      formData.append('duration', this.formData.duration);
      formData.append('message', 'Blood from Mouth form submitted.');

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
          this.router.navigate(['/thank-you'], { queryParams: { source: 'blood-from-mouth' } });
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

