import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Treatment {
  title: string;
  details: string;
  icon: string;    
}

interface ExpertInfo {
  title: string;
  description: string;
  cta: string;
}

interface Feature {
  title: string;
  description: string;
  iconPath: string;
}

@Component({
  selector: 'app-tb-treatments',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tb-treatments.component.html',
  styleUrls: ['./tb-treatments.component.scss'],
})
export class TbTreatmentsComponent {
  
  private iconBasePath = 'assets/icons/'; 

  treatments: Treatment[] = [
  {
    title: 'Pulmonary Tuberculosis',
    details: 'The most common form of TB, affecting the lungs. Early diagnosis and the right treatment plan ensure complete recovery. We focus on fast symptom relief and restoring lung strength.',
    icon: this.iconBasePath + 'lungs.webp',
  },
  {
    title: 'TB of Lymph Nodes',
    details: 'Seen as swelling in the neck or other parts of the body. This condition is fully treatable with medication when monitored with expert care.',
    icon: this.iconBasePath + 'lymph.webp',
  },
  {
    title: 'Abdominal Tuberculosis',
    details: 'Affects the digestive system and abdomen. With precise diagnosis and holistic nutritional support, patients regain digestive health safely.',
    icon: this.iconBasePath + 'stomach.webp',
  },
  {
    title: 'Bone & Spine TB',
    details: 'May cause back pain or difficulty walking. We ensure treatment that protects bone strength, mobility, and long-term spinal health.',
    icon: this.iconBasePath + 'spine.webp',
  },
  {
    title: 'TB Meningitis (Brain TB)',
    details: 'A rare but serious form of TB affecting the brain covering. We provide rapid-response treatment to protect neurological function and recovery.',
    icon: this.iconBasePath + 'brain.webp',
  },
  {
    title: 'Genito-Urinary TB',
    details: 'Affects kidneys, urinary system or reproductive organs. Because symptoms are often subtle, accurate diagnosis and consistent treatment are key.',
    icon: this.iconBasePath + 'kidney.webp',
  },
  {
    title: 'Pleural Effusion (TB Fluid in Lungs)',
    details: 'Build-up of fluid around the lungs causing breathlessness. Treatment combines medication with clinical management to restore full comfort while breathing.',
    icon: this.iconBasePath + 'lungs-fluid.webp',
  },
  {
    title: 'Skin TB',
    details: 'A rare form causing slow-healing skin patches. We combine medical therapy with careful skin recovery support.',
    icon: this.iconBasePath + 'skin.webp',
  },
];

expertSearchInfo: ExpertInfo = {
  title: 'Need Guidance or Treatment Support?',
  description:
    'Our TB experts are here to listen, guide, and support you at every step. Book a consultation or request a call-back.',
  cta: 'Book Consultation'
};

whyChooseUs: Feature[] = [
  {
    title: 'Expert Care',
    description: 'Board-certified TB experts with decades of experience.',
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    title: 'Personalized Care',
    description: 'Treatment plans tailored to your specific condition.',
    iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  },
  {
    title: 'Modern Facilities',
    description: 'State-of-the-art diagnostic and treatment equipment.',
    iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    title: 'Complete Support',
    description: 'From diagnosis to recovery, we\'re with you every step.',
    iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z'
  }
];
}