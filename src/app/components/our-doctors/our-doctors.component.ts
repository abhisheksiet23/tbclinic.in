// our-doctors.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

interface Doctor {
  id: number;
  name: string;
  experience: string;
  designation: string;
  bio: string;
  initials: string;
}

interface CMO extends Doctor {
  role: string;
  focusAreas: string[];
}

interface Stat {
  value: string;
  label: string;
}

interface Philosophy {
  title: string;
  description: string;
}

interface CuratedReview {
  label: string;
  quote: string;
  name: string;
}

@Component({
  selector: 'app-our-doctors',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './our-doctors.component.html',
  styleUrls: ['./our-doctors.component.scss']
})
export class OurDoctorsComponent implements OnInit {
  constructor(private router: Router, private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Our TB Specialist Doctors in Delhi | MEDCROSS TB Clinic',
      description: 'Meet our team of expert TB doctors led by Dr. Sunita (20+ years experience) at MEDCROSS TB Clinic Delhi. Our specialists have decades of combined experience treating tuberculosis.',
      keywords: 'TB doctor Delhi, tuberculosis specialist Delhi, Dr Sunita TB expert, best TB doctor Delhi, MEDCROSS doctors',
      canonicalUrl: 'https://tbclinic.in/our-doctors',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          'url': 'https://tbclinic.in/our-doctors',
          'name': 'Our TB Specialist Doctors – MEDCROSS TB Clinic Delhi',
          'description': 'Expert TB doctors at MEDCROSS TB Clinic Delhi with decades of combined experience in tuberculosis diagnosis and treatment.'
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Physician',
          '@id': 'https://tbclinic.in/#doctor-sunita',
          'name': 'Dr. Sunita',
          'jobTitle': 'Co-Founder & Chief Medical Officer',
          'medicalSpecialty': 'Infectious Disease',
          'description': 'Dr. Sunita has 20+ years of experience in tuberculosis management and advanced TB care, leading clinical programs at MEDCROSS TB Clinic.',
          'worksFor': { '@id': 'https://tbclinic.in/#organization' },
          'knowsAbout': ['Tuberculosis', 'Pulmonary TB', 'Drug-resistant TB', 'Infectious Disease']
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Physician',
          'name': 'Dr. Deepak',
          'jobTitle': 'Tuberculosis (TB) Expert',
          'description': 'TB Expert at MEDCROSS TB Clinic with 12+ years of experience in tuberculosis diagnosis and treatment in Delhi.',
          'worksFor': { '@id': 'https://tbclinic.in/#organization' }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Physician',
          'name': 'Dr. Pranav',
          'jobTitle': 'Tuberculosis (TB) Expert',
          'description': 'TB Expert at MEDCROSS TB Clinic with 10+ years of experience in tuberculosis treatment in Delhi.',
          'worksFor': { '@id': 'https://tbclinic.in/#organization' }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Physician',
          'name': 'Dr. Vikas',
          'jobTitle': 'Tuberculosis (TB) Expert',
          'description': 'TB Expert at MEDCROSS TB Clinic with 9+ years of experience in tuberculosis treatment in Delhi.',
          'worksFor': { '@id': 'https://tbclinic.in/#organization' }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Physician',
          'name': 'Dr. Diksha',
          'jobTitle': 'Tuberculosis (TB) Expert',
          'description': 'TB Expert at MEDCROSS TB Clinic with 7+ years of experience in tuberculosis treatment in Delhi.',
          'worksFor': { '@id': 'https://tbclinic.in/#organization' }
        }
      ]
    });
  }

  // ── Section 2: Clinical Leadership ──
  cmo: CMO = {
    id: 0,
    name: 'Dr. Sunita',
    role: 'Co-Founder & Chief Medical Officer',
    experience: '20+ Years',
    designation: 'Clinical Experience',
    bio: 'For Dr. Sunita, treating TB is not only about prescribing the right medicines. It is about understanding the patient behind the diagnosis. Many patients arrive with previous reports, unanswered questions, treatment concerns, or months of uncertainty. Her approach begins by listening carefully, understanding the complete clinical picture, and explaining the way forward in language patients and families can understand. As Chief Medical Officer, Dr. Sunita leads the clinical approach across TB Clinic centres, with a focus on consistent, evidence-based and compassionate patient care.',
    focusAreas: ['TB Management', 'Complex TB Care', 'Treatment Monitoring', 'Patient & Family Guidance'],
    initials: 'S'
  };

  // ── Section 3: Our Care Philosophy ──
  philosophies: Philosophy[] = [
    { title: 'We listen before we advise.', description: 'Your symptoms, previous treatment and concerns matter.' },
    { title: 'We explain before we proceed.', description: 'You should understand your diagnosis and why a particular next step is recommended.' },
    { title: 'We look beyond the first consultation.', description: 'TB treatment is a journey, and follow-up is an important part of care.' },
    { title: 'We work as a clinical team.', description: 'Our doctors follow a shared approach to provide continuity across the patient journey.' }
  ];

  // ── Section 5: Clinical Team ──
  doctors: Doctor[] = [
    {
      id: 1,
      name: 'Dr. Deepak',
      designation: 'TB Care & Patient Consultation',
      experience: '12+ Years',
      bio: 'Focused on evaluating patients, understanding their clinical history, and guiding them through diagnosis, treatment and follow-up.',
      initials: 'D'
    },
    {
      id: 2,
      name: 'Dr. Pranav',
      designation: 'TB Care & Patient Consultation',
      experience: '10+ Years',
      bio: 'Provides patient-focused TB care with an emphasis on clear communication and continued treatment guidance.',
      initials: 'P'
    },
    {
      id: 3,
      name: 'Dr. Vikas',
      designation: 'TB Care & Patient Consultation',
      experience: '9+ Years',
      bio: 'Supports patients through evaluation, treatment planning and ongoing monitoring throughout their care journey.',
      initials: 'V'
    },
    {
      id: 4,
      name: 'Dr. Diksha',
      designation: 'TB Care & Patient Consultation',
      experience: '7+ Years',
      bio: 'Focused on helping patients understand their condition and navigate treatment with clarity and continued support.',
      initials: 'D'
    }
  ];

  // ── Section: Experience stats ──
  stats: Stat[] = [
    { value: '20+', label: 'Years — Clinical Leadership Experience' },
    { value: '16+', label: 'Years — Dedicated TB Care Network' },
    { value: '17,000+', label: 'Patients Treated Across the Organisation' },
    { value: '5', label: 'Clinics Across Delhi' }
  ];

  // ── Section: What to Expect at Your First Consultation ──
  firstVisitChecklist: string[] = [
    'Previous medical reports',
    'Current prescriptions',
    'Test results',
    'A list of medicines you are taking'
  ];

  // ── Section: Selected Patient Stories (curated, verbatim from patient reviews) ──
  curatedReviews: CuratedReview[] = [
    {
      label: 'Clear Guidance',
      quote: 'Very good experience. Staff explained clearly how and when to take medication.',
      name: 'Simmu Kaur'
    },
    {
      label: 'Support Throughout Treatment',
      quote: "I thank Dr. Sunita ma'am for successful TB treatment. She guided me at every stage. Great team effort.",
      name: 'Gaurav Kashyap'
    },
    {
      label: 'Compassionate Care',
      quote: "Dr. Sunita ma'am is very intelligent and compassionate. My wife is fine now. Staff is well trained.",
      name: 'Qamar Sibtain'
    }
  ];

  bookConsultation(): void {
    this.router.navigate(['/contact-us']);
  }

  scrollToTeam(): void {
    if (typeof document === 'undefined') return;
    document.getElementById('clinical-team')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
