import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';

interface InfoCard {
  title: string;
  icon: 'personal' | 'medical' | 'website';
  description: string;
}

interface ReasonCard {
  title: string;
  description: string;
  icon: 'care' | 'appointments' | 'connected' | 'improve' | 'legal';
}

interface ShareRow {
  with: string;
  why: string;
}

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PrivacyPolicyComponent implements OnInit {

  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Privacy Policy | MEDCROSS TB Clinic Delhi',
      description: 'Learn how MEDCROSS by TB Clinic collects, uses, and protects your personal and medical information. Your health information deserves complete privacy.',
      keywords: 'TB clinic privacy policy, MEDCROSS data protection, patient information privacy',
      canonicalUrl: 'https://tbclinic.in/privacy',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'url': 'https://tbclinic.in/privacy',
        'name': 'Privacy Policy – MEDCROSS by TB Clinic',
        'mainEntity': { '@id': 'https://tbclinic.in/#organization' }
      }
    });
  }

  effectiveDate = 'January 2026';

  glanceItems = [
    { icon: 'lock', text: 'We never sell your personal information.' },
    { icon: 'stethoscope', text: 'Your medical records are accessed only by authorised healthcare professionals.' },
    { icon: 'clipboard', text: 'We collect only the information needed to provide your care.' },
    { icon: 'mail', text: 'You can contact us anytime with questions about your data.' }
  ];

  infoCards: InfoCard[] = [
    {
      title: 'Personal Information',
      icon: 'personal',
      description: 'Name, mobile number, email address, age, and contact details used to identify you and communicate with you.'
    },
    {
      title: 'Medical Information',
      icon: 'medical',
      description: 'Symptoms, consultation notes, prescriptions, diagnostic reports, and treatment history that help our doctors provide appropriate care.'
    },
    {
      title: 'Website Information',
      icon: 'website',
      description: 'Basic technical information such as browser type, pages visited, and device information that helps us improve website performance and security.'
    }
  ];

  expandedCard: string | null = null;

  toggleCard(title: string): void {
    this.expandedCard = this.expandedCard === title ? null : title;
  }

  isCardOpen(title: string): boolean {
    return this.expandedCard === title;
  }

  reasons: ReasonCard[] = [
    { title: 'To Provide Medical Care', description: 'So our doctors can understand your condition and recommend appropriate treatment.', icon: 'care' },
    { title: 'To Manage Appointments', description: 'To schedule consultations and coordinate follow-up care.', icon: 'appointments' },
    { title: 'To Stay Connected', description: 'To send appointment reminders or respond to your enquiries.', icon: 'connected' },
    { title: 'To Improve Our Services', description: 'To understand how patients use our website and make it easier to navigate.', icon: 'improve' },
    { title: 'To Meet Legal Responsibilities', description: 'Where healthcare regulations require us to maintain records or share information with relevant authorities.', icon: 'legal' }
  ];

  protectionPoints = [
    'Secure storage systems',
    'Restricted staff access',
    'Encrypted data transmission where appropriate',
    'Regular security monitoring',
    'Confidential handling by trained healthcare professionals'
  ];

  shareRows: ShareRow[] = [
    { with: 'Doctors & Medical Staff', why: 'To provide diagnosis and treatment' },
    { with: 'Diagnostic Laboratories', why: 'To perform tests you have agreed to' },
    { with: 'Pharmacy Partners', why: 'To support prescribed medications where required' },
    { with: 'Technology Providers', why: 'To operate our website and communication systems securely' },
    { with: 'Government Authorities', why: 'Only where legally required' }
  ];

  rights = [
    'View your personal information',
    'Correct inaccurate information',
    'Update your contact details',
    'Request deletion where legally permitted',
    'Ask questions about how your information is used'
  ];

  faqs: FaqItem[] = [
    {
      id: 1,
      question: 'Will my medical information remain confidential?',
      answer: 'Yes. Your information is only accessed by authorised healthcare professionals and trusted service providers involved in your care.'
    },
    {
      id: 2,
      question: 'Do you sell my information?',
      answer: 'No. We do not sell your personal or medical information.'
    },
    {
      id: 3,
      question: 'Can my family access my records?',
      answer: 'Only where appropriate, with your consent or as permitted by applicable laws.'
    },
    {
      id: 4,
      question: 'Why do you ask for my phone number?',
      answer: 'So we can contact you regarding appointments, treatment-related communication, or your enquiry.'
    },
    {
      id: 5,
      question: 'Can I ask you to delete my information?',
      answer: 'Where legally permitted, yes. Some healthcare records may need to be retained to comply with applicable regulations.'
    }
  ];

  openFaqId: number | null = null;

  toggleFaq(id: number): void {
    this.openFaqId = this.openFaqId === id ? null : id;
  }

  isFaqOpen(id: number): boolean {
    return this.openFaqId === id;
  }
}
