import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

type ConditionIcon = 'lungs' | 'lymph' | 'stomach' | 'spine' | 'brain' | 'kidney' | 'pleural' | 'skin';

interface Treatment {
  title: string;
  icon: ConditionIcon;
  intro: string;
  symptoms: string[];
  whyMatters: string;
  howWeHelp: string;
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
export class TbTreatmentsComponent implements OnInit {

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setPage({
      title: 'TB Conditions We Treat | All Types of Tuberculosis | MEDCROSS Delhi',
      description: 'MEDCROSS TB Clinic treats all forms of tuberculosis: Pulmonary TB, Lymph Node TB, Abdominal TB, Bone & Spine TB, Brain TB (Meningitis), Genito-Urinary TB, Pleural Effusion, and Skin TB. Expert TB care in Delhi.',
      keywords: 'pulmonary tuberculosis treatment Delhi, TB types, lymph node TB, bone TB treatment, brain TB meningitis, abdominal TB, skin TB, pleural effusion TB',
      canonicalUrl: 'https://tbclinic.in/tb-treatments',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        'url': 'https://tbclinic.in/tb-treatments',
        'name': 'Conditions We Treat – MEDCROSS TB Clinic Delhi',
        'description': 'Expert treatment for all types of tuberculosis at MEDCROSS TB Clinic Delhi.',
        'about': [
          { '@type': 'MedicalCondition', 'name': 'Pulmonary Tuberculosis', 'description': 'The most common form of TB, affecting the lungs.' },
          { '@type': 'MedicalCondition', 'name': 'TB of Lymph Nodes', 'description': 'Tuberculosis causing swelling in the neck or lymph nodes.' },
          { '@type': 'MedicalCondition', 'name': 'Abdominal Tuberculosis', 'description': 'TB affecting the digestive system and abdomen.' },
          { '@type': 'MedicalCondition', 'name': 'Bone and Spine Tuberculosis', 'description': 'TB affecting bone structure and the spine, causing back pain or mobility issues.' },
          { '@type': 'MedicalCondition', 'name': 'TB Meningitis', 'alternateName': 'Brain TB', 'description': 'A serious form of TB affecting the membranes surrounding the brain.' },
          { '@type': 'MedicalCondition', 'name': 'Genito-Urinary Tuberculosis', 'description': 'TB affecting the kidneys, urinary system, or reproductive organs.' },
          { '@type': 'MedicalCondition', 'name': 'Pleural Effusion (TB Fluid in Lungs)', 'description': 'Fluid build-up around the lungs caused by tuberculosis.' },
          { '@type': 'MedicalCondition', 'name': 'Skin Tuberculosis', 'description': 'A rare form of TB causing slow-healing skin lesions or patches.' }
        ]
      }
    });
  }

  /** Exclusive accordion — opening a card closes whichever one was previously open. */
  expandedTitle: string | null = null;

  toggle(title: string): void {
    const opening = this.expandedTitle !== title;
    this.expandedTitle = opening ? title : null;

    if (opening && typeof document !== 'undefined') {
      // Wait a tick so the card has re-rendered at its new (reordered) position first.
      setTimeout(() => {
        document.getElementById(this.slug(title))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }

  isExpanded(title: string): boolean {
    return this.expandedTitle === title;
  }

  slug(title: string): string {
    return 'condition-' + title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  /** Surfaces the expanded card first so it doesn't sit stranded mid-grid. */
  orderedTreatments(): Treatment[] {
    if (!this.expandedTitle) return this.treatments;
    const index = this.treatments.findIndex(t => t.title === this.expandedTitle);
    if (index <= 0) return this.treatments;
    const reordered = [...this.treatments];
    const [expanded] = reordered.splice(index, 1);
    reordered.unshift(expanded);
    return reordered;
  }

  treatments: Treatment[] = [
    {
      title: 'Pulmonary Tuberculosis',
      icon: 'lungs',
      intro: 'Pulmonary TB is the most common form of tuberculosis and primarily affects the lungs. It usually develops gradually, which is why many people mistake it for a lingering cough or a recurring chest infection.',
      symptoms: [
        'Persistent cough lasting more than 2 weeks',
        'Fever, especially in the evening',
        'Night sweats',
        'Unexplained weight loss',
        'Coughing up blood (in some cases)',
        'Chest pain or breathlessness'
      ],
      whyMatters: 'Pulmonary TB is treatable, but delaying treatment can increase the risk of complications and spread the infection to others. Early evaluation helps you begin the right treatment sooner.',
      howWeHelp: 'Our experts carefully evaluate your symptoms, review previous reports if available, recommend the appropriate investigations, and guide you through treatment until recovery.'
    },
    {
      title: 'TB of Lymph Nodes',
      icon: 'lymph',
      intro: "Lymph Node TB (also called Tuberculous Lymphadenitis) commonly appears as a painless swelling in the neck, underarms, or groin. Since the swelling often develops slowly, many patients initially believe it's unrelated to tuberculosis.",
      symptoms: [
        'Swelling in the neck or underarms',
        'Usually painless lumps',
        'Mild fever',
        'Weight loss',
        'Fatigue'
      ],
      whyMatters: 'Lymph node swelling can have many causes. Identifying whether tuberculosis is responsible helps avoid unnecessary treatments and ensures appropriate care.',
      howWeHelp: 'We combine clinical evaluation with appropriate investigations to confirm the diagnosis and create a treatment plan suited to your condition.'
    },
    {
      title: 'Abdominal Tuberculosis',
      icon: 'stomach',
      intro: 'Abdominal TB affects the intestines, abdomen, or nearby lymph nodes. Because its symptoms resemble many digestive disorders, diagnosis often takes longer than expected.',
      symptoms: [
        'Persistent abdominal pain',
        'Abdominal swelling',
        'Loss of appetite',
        'Weight loss',
        'Fever',
        'Digestive discomfort'
      ],
      whyMatters: "Persistent digestive symptoms shouldn't be ignored. Early diagnosis can prevent complications and help restore digestive health more effectively.",
      howWeHelp: 'Our team evaluates your symptoms carefully, recommends the right investigations when required, and guides you through treatment and nutritional recovery.'
    },
    {
      title: 'Bone & Spine TB',
      icon: 'spine',
      intro: 'Bone and Spine TB develops slowly and can affect movement, posture, and overall quality of life if left untreated.',
      symptoms: [
        'Persistent back pain',
        'Difficulty walking',
        'Joint pain',
        'Stiffness',
        'Weakness in the limbs (advanced cases)'
      ],
      whyMatters: 'Prompt treatment can help protect bones and joints while reducing the risk of permanent damage.',
      howWeHelp: 'We coordinate diagnosis, treatment planning, and continuous follow-up to help patients regain mobility and recover safely.'
    },
    {
      title: 'TB Meningitis (Brain TB)',
      icon: 'brain',
      intro: 'TB Meningitis is a serious form of tuberculosis that affects the protective covering of the brain. It requires urgent medical attention.',
      symptoms: [
        'Persistent headache',
        'Fever',
        'Vomiting',
        'Neck stiffness',
        'Confusion',
        'Drowsiness'
      ],
      whyMatters: 'Early recognition and timely treatment are critical to reducing the risk of severe complications.',
      howWeHelp: 'Our experts coordinate prompt evaluation and guide patients through the appropriate treatment pathway while ensuring continuous monitoring.'
    },
    {
      title: 'Genito-Urinary TB',
      icon: 'kidney',
      intro: 'This form of TB affects the kidneys, urinary tract, bladder, or reproductive organs. Because symptoms often resemble common urinary infections, diagnosis may be delayed.',
      symptoms: [
        'Burning during urination',
        'Frequent urination',
        'Blood in urine',
        'Lower abdominal discomfort',
        'Recurrent urinary infections'
      ],
      whyMatters: 'Persistent urinary symptoms deserve proper evaluation. Early treatment helps protect kidney and reproductive health.',
      howWeHelp: 'We investigate persistent urinary symptoms thoroughly and guide patients with condition-specific treatment and follow-up.'
    },
    {
      title: 'Pleural Effusion (TB Fluid in Lungs)',
      icon: 'pleural',
      intro: 'Pleural TB causes fluid to collect around the lungs, making breathing difficult and causing chest discomfort.',
      symptoms: [
        'Breathlessness',
        'Chest pain',
        'Dry cough',
        'Fever',
        'Fatigue'
      ],
      whyMatters: 'Treating both the infection and the fluid buildup helps improve breathing and prevents further complications.',
      howWeHelp: 'We evaluate the underlying cause, coordinate appropriate investigations, and guide patients through treatment and follow-up care.'
    },
    {
      title: 'Skin TB',
      icon: 'skin',
      intro: 'Skin TB is an uncommon form of tuberculosis that appears as slow-healing skin lesions, nodules, or ulcers.',
      symptoms: [
        'Persistent skin patches',
        'Slow-healing wounds',
        'Skin nodules',
        'Swelling around affected areas'
      ],
      whyMatters: 'Because it can resemble many other skin conditions, an accurate diagnosis is essential before treatment begins.',
      howWeHelp: 'Our team carefully evaluates skin lesions, confirms the diagnosis through appropriate investigations, and develops an individualized treatment plan.'
    }
  ];

  reassurance = {
    title: 'Not Sure If This Matches Your Symptoms?',
    body: "That's okay. Many patients aren't certain which form of TB they have when they first visit us. Our experts can help determine the cause of your symptoms and guide you toward the right next step.",
    cta: 'Book a Consultation'
  };

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
