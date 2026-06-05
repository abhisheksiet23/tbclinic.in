import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  openItemId = signal<number>(1);

  faqs: FaqItem[] = [
    {
      id: 1,
      question: 'What is Tuberculosis (TB)?',
      answer: 'Tuberculosis (TB) is an infectious bacterial disease caused by Mycobacterium tuberculosis. It most commonly affects the lungs (pulmonary TB) but can also affect other parts of the body such as lymph nodes, bones, brain, kidneys, and skin. TB spreads through the air when an infected person coughs, sneezes, or speaks.'
    },
    {
      id: 2,
      question: 'What are the common symptoms of TB?',
      answer: 'Common TB symptoms include a persistent cough lasting more than 3 weeks (sometimes with blood), unexplained weight loss, night sweats, low-grade fever, fatigue, loss of appetite, and chest pain. Extrapulmonary TB may cause symptoms specific to the affected organ, such as swollen lymph nodes, back pain (bone TB), or neurological changes (brain TB).'
    },
    {
      id: 3,
      question: 'Is TB curable? How long does TB treatment take?',
      answer: 'Yes, tuberculosis is completely curable with a full course of antibiotics. Standard TB treatment takes 6 months, involving a combination of antibiotics such as Isoniazid, Rifampicin, Pyrazinamide, and Ethambutol. Drug-resistant TB may require 9–20 months of treatment. It is critical to complete the full course of medication, even after feeling better, to prevent drug resistance.'
    },
    {
      id: 4,
      question: 'How is TB diagnosed?',
      answer: 'TB is diagnosed through several tests: sputum smear microscopy, sputum culture, chest X-ray, CBNAAT/GeneXpert (a rapid molecular test), Mantoux (tuberculin skin) test, IGRA blood test, and CT scans. At MEDCROSS TB Clinic Delhi, our experts use the latest diagnostic tools to accurately identify TB type and drug sensitivity.'
    },
    {
      id: 5,
      question: 'What is Drug-Resistant TB (MDR-TB) and XDR-TB?',
      answer: 'Multi-Drug Resistant TB (MDR-TB) is caused by strains of Mycobacterium tuberculosis resistant to at least Isoniazid and Rifampicin, the two most powerful first-line TB drugs. Extensively Drug-Resistant TB (XDR-TB) is resistant to even more drugs. MDR-TB and XDR-TB require specialized treatment regimens. Our expert TB doctors are trained to manage these complex cases.'
    },
    {
      id: 6,
      question: 'Can TB spread to others? How to prevent it?',
      answer: 'Yes, pulmonary TB is contagious and spreads through airborne droplets. To prevent spread: cover your mouth when coughing, wear a mask, ensure good ventilation, complete your full course of treatment, and get tested if you have been in close contact with a TB patient. The BCG vaccine provides protection against severe forms of TB in children.'
    },
    {
      id: 7,
      question: 'What is the difference between TB infection and TB disease?',
      answer: 'TB infection (latent TB) means bacteria are in your body but inactive — you have no symptoms and cannot spread TB. TB disease (active TB) means the bacteria are active, causing symptoms and potentially spreading to others. Latent TB can progress to active TB, especially when immunity is weakened. Preventive treatment is available for latent TB in high-risk individuals.'
    },
    {
      id: 8,
      question: 'Who is at higher risk of getting TB?',
      answer: 'People at higher risk of TB include: those in close contact with active TB patients, people with HIV/AIDS or weakened immunity, individuals with diabetes, malnutrition, or chronic kidney disease, those living in overcrowded conditions, healthcare workers, and people who have previously had TB. India accounts for approximately 27 lakh new TB cases every year.'
    },
    {
      id: 9,
      question: 'What is Extrapulmonary TB?',
      answer: 'Extrapulmonary TB refers to tuberculosis that occurs outside the lungs. Types include: TB of lymph nodes (most common extrapulmonary form), abdominal TB, bone and spine TB (Pott\'s disease), brain TB (TB meningitis), genito-urinary TB, pleural effusion (fluid around lungs), and skin TB. MEDCROSS TB Clinic specializes in diagnosing and treating all forms of extrapulmonary TB.'
    },
    {
      id: 10,
      question: 'Can TB affect children?',
      answer: 'Yes, TB can affect children of any age, though it often presents differently than in adults. Children may develop disseminated TB or TB meningitis, which can be life-threatening. Symptoms include failure to thrive, persistent fever, swollen glands, and recurrent respiratory infections. Early diagnosis and treatment is critical for children.'
    },
    {
      id: 11,
      question: 'What is the connection between HIV and TB?',
      answer: 'HIV weakens the immune system, making people living with HIV 20–30 times more likely to develop active TB. TB is the leading cause of death among people with HIV worldwide. People with HIV who have latent TB should receive preventive TB therapy. Both HIV and TB must be treated simultaneously under careful medical supervision.'
    },
    {
      id: 12,
      question: 'What should I eat during TB treatment?',
      answer: 'Good nutrition is essential during TB treatment to support immunity and recovery. Eat a high-protein diet (eggs, lentils, dairy, meat/fish), plenty of fruits and vegetables for vitamins, and whole grains for energy. Avoid alcohol and smoking as they interfere with treatment. Some TB medications can affect appetite — consult your doctor about dietary supplements if needed.'
    },
    {
      id: 13,
      question: 'Does coughing up blood always mean TB?',
      answer: 'Coughing up blood (hemoptysis) is a significant symptom that should always be evaluated by a doctor. While it can be a sign of pulmonary TB, it may also result from other conditions like lung infections, bronchiectasis, or cancer. If you cough up blood, visit a TB specialist immediately for proper diagnosis and testing.'
    },
    {
      id: 14,
      question: 'How do I book a consultation at MEDCROSS TB Clinic in Delhi?',
      answer: 'You can book a consultation at MEDCROSS TB Clinic by calling +91 92-180-26183, emailing tbclinic.info@gmail.com, or using the online consultation form on our website. We have 5 clinic locations across Delhi: Lawrence Road (Keshavpuram), Mayur Vihar Phase-I, Durgapuri (Shahdara), Uttam Nagar, and Tigri. Clinics are open Monday to Saturday, 9:30 AM to 5:00 PM.'
    }
  ];

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setPage({
      title: 'TB FAQs | Frequently Asked Questions About Tuberculosis | MEDCROSS Delhi',
      description: 'Answers to common questions about tuberculosis (TB): symptoms, diagnosis, treatment duration, drug-resistant TB, TB in children, nutrition during TB treatment, and more. Expert answers from MEDCROSS TB Clinic Delhi.',
      keywords: 'TB FAQ, tuberculosis questions answers, TB symptoms, TB treatment duration, MDR-TB, TB diagnosis, TB curable',
      canonicalUrl: 'https://tbclinic.in/faq',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'url': 'https://tbclinic.in/faq',
        'name': 'Frequently Asked Questions About Tuberculosis – MEDCROSS TB Clinic Delhi',
        'mainEntity': this.faqs.map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      }
    });
  }

  toggleAnswer(itemId: number): void {
    // If the clicked item is already open, close it (set to 0 or null).
    // Otherwise, open the clicked item.
    this.openItemId.update(currentId => currentId === itemId ? 0 : itemId);
  }
}
