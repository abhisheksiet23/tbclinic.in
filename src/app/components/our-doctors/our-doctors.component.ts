// our-doctors.component.ts
import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PatientStoriesComponent } from '../patient-stories/patient-stories.component';
import { SeoService } from '../../services/seo.service';

interface Doctor {
  id: number;
  name: string;
  experience: string;
  designation: string;
  expertise: string;
  initials: string;
}

interface CMO extends Doctor {
  role: string;
  bio: string;
  specialization: string;
  credentials: string[];
}

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-our-doctors',
  standalone: true,
  imports: [CommonModule  , PatientStoriesComponent],
  templateUrl: './our-doctors.component.html',
  styleUrls: ['./our-doctors.component.scss']
})
export class OurDoctorsComponent implements OnInit {
  selectedDoctorId = signal<number | null>(null);

  constructor(private router: Router, private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Our TB Specialist Doctors in Delhi | MEDCROSS TB Clinic',
      description: 'Meet our team of expert TB doctors led by Dr. Sunita (MD, 20+ years experience) at MEDCROSS TB Clinic Delhi. Our specialists have 50+ years of combined experience treating tuberculosis.',
      keywords: 'TB doctor Delhi, tuberculosis specialist Delhi, Dr Sunita TB expert, best TB doctor Delhi, MEDCROSS doctors',
      canonicalUrl: 'https://tbclinic.in/our-doctors',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          'url': 'https://tbclinic.in/our-doctors',
          'name': 'Our TB Specialist Doctors – MEDCROSS TB Clinic Delhi',
          'description': 'Expert TB doctors at MEDCROSS TB Clinic Delhi with over 50 years of combined experience in tuberculosis diagnosis and treatment.'
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Physician',
          '@id': 'https://tbclinic.in/#doctor-sunita',
          'name': 'Dr. Sunita',
          'jobTitle': 'Co-Founder & Chief Medical Officer',
          'medicalSpecialty': 'Infectious Disease',
          'description': 'Dr. Sunita has 20+ years of experience in tuberculosis management and advanced TB care. She is an MD, TB Expert, and Published Researcher leading clinical programs at MEDCROSS TB Clinic.',
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

  cmo: CMO = {
    id: 0,
    name: 'Dr. Sunita',
    role: 'Co-Founder & Chief Medical Officer',
    experience: '20+ years',
    designation: '',
    bio: 'Leading our clinical programs with deep expertise in complex forms of TB, ensuring high-quality, compassionate, evidence-based care across all centers.',
    specialization: 'TB Management & Advanced Care',
    credentials: ['MD', 'TB Expert', 'Published Researcher'],
    expertise: '',
    initials: 'S'
  };

  doctors: Doctor[] = [
    {
      id: 1,
      name: 'Dr. Deepak',
      designation: 'Tuberculosis (TB) Expert',
      experience: '12+ years',
      expertise: '',
      initials: 'D'
    },
    {
      id: 2,
      name: 'Dr. Pranav',
      designation: 'Tuberculosis (TB) Expert',
      experience: '10+ years',
      expertise: '',
      initials: 'P'
    },
    {
      id: 3,
      name: 'Dr. Vikas',
      designation: 'Tuberculosis (TB) Expert',
      experience: '9+ years',
      expertise: '',
      initials: 'V'
    },
    {
      id: 4,
      name: 'Dr. Diksha',
      designation: 'Tuberculosis (TB) Expert',
      experience: '7+ years',
      expertise: '',
      initials: 'D'
    }
  ];

  stats: Stat[] = [
    { value: '500+', label: 'Patients Treated' },
    { value: '50+', label: 'Years Combined Experience' }
  ];

  toggleDoctorDetails(doctorId: number): void {
    if (this.selectedDoctorId() === doctorId) {
      this.selectedDoctorId.set(null);
    } else {
      this.selectedDoctorId.set(doctorId);
    }
  }

  bookConsultation(): void {
    this.router.navigate(['/']);
  }
}