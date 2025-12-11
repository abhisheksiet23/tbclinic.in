// our-doctors.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PatientStoriesComponent } from '../patient-stories/patient-stories.component';

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
export class OurDoctorsComponent {
  selectedDoctorId = signal<number | null>(null);

  constructor(private router: Router) {}

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
      designation: 'Consultant TB Expert',
      experience: '12+ years',
      expertise: '',
      initials: 'D'
    },
    {
      id: 2,
      name: 'Dr. Pranav',
      designation: 'Consultant TB Expert',
      experience: '10+ years',
      expertise: '',
      initials: 'P'
    },
    {
      id: 3,
      name: 'Dr. Vikas',
      designation: 'Consultant TB Expert',
      experience: '9+ years',
      expertise: '',
      initials: 'V'
    },
    {
      id: 4,
      name: 'Dr. Diksha',
      designation: 'Consultant TB Expert',
      experience: '7+ years',
      expertise: '',
      initials: 'D'
    }
  ];

  stats: Stat[] = [
    { value: '500+', label: 'Patients Treated' },
    { value: '98%', label: 'Success Rate' },
    { value: '15+', label: 'Years Combined' }
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