import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './about-us.component.html',
  // Phone (≤767px) overrides live in their own file so the desktop sheet stays untouched.
  styleUrls: ['./about-us.component.scss', './about-us.mobile.scss']
})
export class AboutUsComponent implements OnInit, AfterViewInit {

  // Hero trust strip
  trustStrip = [
    { value: '17,000+', label: 'Patients Treated' },
    { value: '16+ Years', label: 'Dedicated to TB Care' },
    { value: '5 Clinics', label: 'Across Delhi' },
    { value: '4.85★', label: '2,000+ Google Reviews' },
    { value: 'WHO-Aligned', label: 'Treatment Protocols' }
  ];

  // "Why We Exist" — purpose, not history
  purpose = {
    paragraphs: [
      `When someone is diagnosed with tuberculosis, treatment is only one part of the journey. Questions begin immediately — "Will I recover?", "Will my family be safe?", "What happens next?"`,
      `Over the years, we realised patients needed more than medicines. They needed someone to explain, someone to guide, and someone to follow through until treatment was complete. That belief became the foundation of TB Clinic.`,
      `Today, everything we do — from diagnosis and treatment planning to follow-up and counselling — is designed around helping patients feel informed, supported, and confident throughout their recovery.`
    ],
    imageUrl: 'assets/doctor-patient.webp',
    highlights: [
      'Diagnosis explained in plain language',
      'A treatment plan built around you',
      'Support that continues until recovery'
    ]
  };

  // "Our Philosophy of Care" — replaces generic values
  philosophies = [
    {
      title: 'We Focus Only on TB',
      description: 'Tuberculosis is our core area of expertise — not one of many services we offer. That focused experience helps us recognise its many forms, order the right investigations, and guide every stage of treatment.'
    },
    {
      title: 'We Stay Beyond the First Consultation',
      description: "Starting treatment is important. Completing it is essential. We continue supporting patients through follow-ups, monitoring, counselling, and practical guidance until recovery is complete."
    },
    {
      title: 'We Treat People, Not Just Reports',
      description: 'Every patient arrives with different concerns — infection risk, work, side effects, or a previous treatment that didn’t go well. We take the time to listen first, then explain clearly.'
    },
    {
      title: 'We Believe Informed Patients Recover Better',
      description: 'Clear information reduces fear, and confidence improves outcomes. We make sure every patient and family understands exactly what is happening and why.'
    }
  ];

  // "How We Care Differently" — the patient journey, told as a timeline
  careSteps = [
    { title: 'You Arrive With Questions', description: 'Whatever brought you here — a cough, a report, a fear — you’re heard first, without judgment.' },
    { title: 'We Understand Your Concerns', description: 'Every worry is different: family safety, work, side effects, or a treatment that didn’t go as planned. We listen before we advise.' },
    { title: 'We Investigate Carefully', description: 'Digital X-ray, blood work, and molecular TB testing — only what’s needed to know exactly what’s happening.' },
    { title: 'We Explain Every Finding', description: 'No jargon, no rushed summaries. You leave understanding your own diagnosis.' },
    { title: 'We Create Your Treatment Plan', description: 'Tailored to your type of TB, your daily life, and your family’s needs — including complex, drug-resistant cases.' },
    { title: 'We Support You Until Completion', description: 'Follow-ups, side-effect management, and counselling continue until you’re fully cured — not just until symptoms ease.' }
  ];

  testimonials = [
    {
      quote: 'I kept feeling that I will never get well even during treatment as I used to have headaches, pain in legs, lots of nausea, but it was all so well taken care of by the doctors and counselling personnel ,that I gradually came out of it a winner.',
      name: 'Naureen',
      title: 'Maujpur in East Delhi'
    },
    {
      quote: 'I am a housewife who had duties of my 5 children and an ill husband to attend to, with no helping hand, all this was such a strain and on top of that one day I was diagnosed with TB, a situation where my life fell apart. I lost hope that I will not get well then who will take care of my family, I even thought of suicide, but thanks to TB clinic.in ,I have not only got well but feel much stronger than before.',
      name: 'Mrs. Kiran',
      title: 'Shahdara, Delhi'
    },
    {
      quote: 'Dr Sunita mam is very good  and humble doctor. The staff of clinic is very cooperative and good Best dr in durgapri ..',
      name: 'Prashant Gaur',
      title: 'Former Patient'
    }
  ];

  constructor(private seo: SeoService) { }

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
        el.removeAttribute('name');
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
  }

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Why Thousands Trust TB Clinic Delhi | About MEDCROSS TB Clinic',
      description: 'For over 16 years, MEDCROSS by TB Clinic has helped 17,000+ patients across Delhi navigate TB with clarity, expertise, and continuous support — evidence-based, WHO-aligned tuberculosis care.',
      keywords: 'about TB clinic Delhi, MEDCROSS tuberculosis clinic, TB expert Delhi, why trust TB clinic, TB treatment Delhi',
      canonicalUrl: 'https://tbclinic.in/about-us',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        'url': 'https://tbclinic.in/about-us',
        'name': 'About MEDCROSS by TB Clinic',
        'description': 'MEDCROSS by TB Clinic is operated by UshaPrakash Health Care Private Limited. We are a multidisciplinary team treating tuberculosis patients across Delhi with evidence-based care.',
        'mainEntity': {
          '@id': 'https://tbclinic.in/#organization'
        }
      }
    });
  }
}
