import { Component, OnInit, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../services/toast.service';
import { SeoService } from '../../services/seo.service';
import { UrlEncodePipe } from '../pipes/url-encode.pipe';

interface Clinic {
  name: string;
  metro: string;
  area: string;
  address: string;
  hospitalLabel: string;
}

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, UrlEncodePipe],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {

  private toast = inject(ToastService);
  private seo = inject(SeoService);

  // Dropdown options
  hospitals: string[] = [
    'Select Clinic (Nearest Metro Station)',
    'Lawrence Road (Keshavpuram, Red Line)',
    'Mayur Vihar (Mayur Vihar Pocket-I, Pink Line)',
    'Durgapuri (Shahdra, Red Line)',
    'Uttam Nagar (Nawada, Blue Line)',
    'Tigri (Saket, Yellow Line)',
  ];

  // Form model
  contactForm = {
    name: '',
    email: '',
    mobile: '',
    hospital: this.hospitals[0],
    message: '',
  };

  // Web3Forms API key
  private WEB3FORMS_ACCESS_KEY = '282bc130-d161-4e24-9e93-8eeac1293408';

  showPopup = false;

  /** Keeps the floating speed-dial hidden while the Contact Methods cards
   *  (which already offer Call/WhatsApp) are on screen, so it never overlaps them. */
  showFloatingDial = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (typeof document === 'undefined') return;
    const methodsSection = document.querySelector('.methods-section');
    if (!methodsSection) return;
    this.showFloatingDial = methodsSection.getBoundingClientRect().bottom < 0;
  }

  readonly helpline = '+919218026183';
  readonly helplineDisplay = '+91 92-180-26183';
  readonly whatsappHref = 'https://wa.me/919218026183?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20TB%20care';

  contactMethods = [
    {
      icon: 'call',
      title: 'Call Our Team',
      description: 'Prefer speaking directly? Call our care team for appointments, symptoms, or treatment-related questions.',
      cta: 'Call Now',
      href: `tel:${this.helpline}`
    },
    {
      icon: 'whatsapp',
      title: 'Message Us on WhatsApp',
      description: "Can't talk right now? Send us a message and we'll respond during clinic hours.",
      cta: 'Message Us',
      href: this.whatsappHref
    },
    {
      icon: 'callback',
      title: 'Request a Callback',
      description: "Leave your details below and we'll call you back during clinic hours to understand your concerns.",
      cta: 'Request Callback',
      anchor: 'contact-form'
    },
    {
      icon: 'clinic',
      title: 'Visit a Clinic',
      description: "Already know which location is closest? Find directions and visit your nearest TB Clinic.",
      cta: 'View Clinics',
      anchor: 'clinics'
    }
  ];

  clinics: Clinic[] = [
    {
      name: 'Lawrence Road Clinic',
      metro: 'Keshavpuram Metro Station (Red Line)',
      area: 'Serving patients across North and North-West Delhi.',
      address: 'C-8/139, Lawrence Road, Gate No. 3, Opp. B-4 DDA Market (Hanuman Mandir), Keshavpuram, Delhi – 110035',
      hospitalLabel: 'Lawrence Road (Keshavpuram, Red Line)'
    },
    {
      name: 'Mayur Vihar Clinic',
      metro: 'Mayur Vihar Pocket-I Metro Station (Pink Line)',
      area: 'Serving patients across East Delhi.',
      address: 'TB Clinic, DDA Market, F-7, Mayur Vihar Phase-I, Pocket-1, Delhi – 110091',
      hospitalLabel: 'Mayur Vihar (Mayur Vihar Pocket-I, Pink Line)'
    },
    {
      name: 'Durgapuri Clinic',
      metro: 'Shahdara Metro Station (Red Line)',
      area: 'Serving patients across Shahdara and North-East Delhi.',
      address: 'C-45, West Jyoti Nagar, Durgapuri Chowk, Durgapuri, Shahdara, Delhi – 110094',
      hospitalLabel: 'Durgapuri (Shahdra, Red Line)'
    },
    {
      name: 'Uttam Nagar Clinic',
      metro: 'Nawada Metro Station (Blue Line)',
      area: 'Serving patients across West Delhi.',
      address: 'RZ-10, Uttam Nagar, Main Najafgarh Road, Near Pillar No. 713, Next to IDBI Bank, Uttam Nagar, Delhi',
      hospitalLabel: 'Uttam Nagar (Nawada, Blue Line)'
    },
    {
      name: 'Tigri Clinic',
      metro: 'Saket Metro Station (Yellow Line)',
      area: 'Serving patients across South Delhi.',
      address: 'A Block 111, 112, 113 Ground Floor, Bank Road, JJ Colony Tigri, New Delhi – 110080 (near Sheetla Mata Mandir)',
      hospitalLabel: 'Tigri (Saket, Yellow Line)'
    }
  ];

  faqs: FaqItem[] = [
    {
      id: 1,
      question: 'How soon will someone contact me?',
      answer: 'Our care team usually responds during clinic working hours.'
    },
    {
      id: 2,
      question: "I don't know whether I have TB. Can I still contact you?",
      answer: 'Yes. Many patients contact us before they have a confirmed diagnosis.'
    },
    {
      id: 3,
      question: 'Can I request a second opinion?',
      answer: "Absolutely. If you've already been diagnosed or started treatment elsewhere, our specialists can review your reports and guide you further."
    },
    {
      id: 4,
      question: 'Which clinic should I choose?',
      answer: "Select the clinic closest to you. If you're unsure, our team can help recommend the most convenient location."
    },
    {
      id: 5,
      question: 'Can a family member contact you on my behalf?',
      answer: 'Yes. Family members often reach out to understand symptoms, appointments, or treatment options.'
    }
  ];

  openFaqId: number | null = null;

  toggleFaq(id: number): void {
    this.openFaqId = this.openFaqId === id ? null : id;
  }

  isFaqOpen(id: number): boolean {
    return this.openFaqId === id;
  }

  ngOnInit(): void {
    if (!this.contactForm.hospital) {
      this.contactForm.hospital = this.hospitals[0];
    }
    this.seo.setPage({
      title: 'Contact TB Clinic Delhi | Book TB Consultation | MEDCROSS',
      description: 'Contact MEDCROSS TB Clinic Delhi. 5 clinic locations across Delhi: Lawrence Road, Mayur Vihar, Durgapuri, Uttam Nagar, Tigri. Call +91 92-180-26183 or book a consultation online.',
      keywords: 'TB clinic contact Delhi, book TB consultation Delhi, MEDCROSS contact, TB clinic near me Delhi',
      canonicalUrl: 'https://tbclinic.in/contact-us',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'url': 'https://tbclinic.in/contact-us',
        'name': 'Contact MEDCROSS TB Clinic Delhi',
        'description': 'Book a tuberculosis consultation at MEDCROSS TB Clinic. 5 locations across Delhi. Open Monday–Saturday 9:30 AM to 5:00 PM.',
        'mainEntity': { '@id': 'https://tbclinic.in/#organization' }
      }
    });
  }

  /** Smooth-scrolls to a section by id, accounting for the sticky header via CSS scroll-margin-top. */
  scrollToSection(id: string): void {
    if (typeof document === 'undefined') return;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /** Pre-selects a clinic in the form dropdown, then scrolls the visitor down to it. */
  bookAtClinic(hospitalLabel: string): void {
    this.contactForm.hospital = hospitalLabel;
    this.scrollToSection('contact-form');
  }

  // Form submission handler
  async onSubmit(): Promise<void> {
    if (!this.contactForm.name || !this.contactForm.mobile || this.contactForm.hospital === this.hospitals[0]) {
      this.toast.warning('Please fill all required fields and select a clinic.');
      return;
    }

    const formData = new FormData();
    formData.append('access_key', this.WEB3FORMS_ACCESS_KEY);
    formData.append('subject', `New Appointment Request from tbclinic.in — ${this.contactForm.name}`);
    formData.append('name', this.contactForm.name);
    formData.append('email', this.contactForm.email);
    formData.append('mobile', this.contactForm.mobile);
    formData.append('clinic', this.contactForm.hospital);
    formData.append('message', this.contactForm.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        this.showPopup = true;
        this.resetForm();
      } else {
        this.toast.error('Oops! Something went wrong. Please try again later.');
        console.error(result);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      this.toast.error('Unable to send form. Please try again later.');
    }
  }

  private resetForm(): void {
    this.contactForm = {
      name: '',
      email: '',
      mobile: '',
      hospital: this.hospitals[0],
      message: '',
    };
  }

  closePopup(): void {
    this.showPopup = false;
  }
}
