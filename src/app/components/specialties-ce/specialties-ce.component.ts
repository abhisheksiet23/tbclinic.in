import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Speciality {
  name: string;
  icon: string;
  desc: string;
}

@Component({
  selector: 'app-specialties-ce',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './specialties-ce.component.html',
  styleUrls: ['./specialties-ce.component.scss']
})
export class SpecialtiesCeComponent {
  specialties: Speciality[] = [
    { name: 'Pulmonary TB',        icon: 'assets/icons/lungs.webp',       desc: 'Tuberculosis of the lungs — the most common form' },
    { name: 'Lymph Node TB',       icon: 'assets/icons/lymph.webp',       desc: 'TB affecting the lymphatic system and glands' },
    { name: 'Abdominal TB',        icon: 'assets/icons/stomach.webp',     desc: 'TB of the intestines, liver, and abdomen' },
    { name: 'Bone &amp; Spine TB',     icon: 'assets/icons/spine.webp',       desc: 'TB affecting bones, joints, and the spine' },
    { name: 'Brain TB',            icon: 'assets/icons/brain.webp',       desc: 'TB Meningitis — affects the brain and nervous system' },
    { name: 'Pleural TB',          icon: 'assets/icons/lungs-fluid.webp', desc: 'TB causing fluid accumulation around the lungs' },
    { name: 'Genito-Urinary TB',   icon: 'assets/icons/kidney.webp',      desc: 'TB affecting the kidneys, bladder, and urinary tract' },
    { name: 'Skin TB',             icon: 'assets/icons/skin.webp',        desc: 'Rare form of TB manifesting on the skin' },
  ];

  expertSearchInfo = {
    title: 'Need Guidance or Treatment Support?',
    description:
      'Speak directly with our TB experts for diagnosis, treatment planning, or a second opinion. Compassionate care, every step of your recovery.',
    cta: 'Book Consultation'
  };
}
