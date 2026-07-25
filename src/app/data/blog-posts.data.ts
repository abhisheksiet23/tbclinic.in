export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  tag: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  /** Link to the related in-depth topic/service page, shown as a CTA on the article. */
  relatedUrl: string;
  relatedLabel: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'tb-treatment-explained',
    title: 'TB Treatment Explained: From Diagnosis to Full Recovery',
    excerpt: 'A complete walkthrough of how MEDCROSS diagnoses and treats every form of tuberculosis, including drug-resistant TB — what to expect at each stage.',
    body: 'Every TB journey starts with an accurate diagnosis — sputum tests, chest imaging, and where needed, molecular testing to check drug sensitivity. From there, our specialists build a treatment plan matched to the exact form of TB involved, including drug-resistant strains, and stay with you through the full 6+ month course to recovery.\n\nMost patients begin standard first-line therapy, monitored closely for side effects and early signs of improvement. If resistance is detected, the plan shifts to a longer, more closely supervised second-line regimen. Throughout treatment, regular follow-up tests track how well the infection is responding, so the plan can be adjusted quickly if needed rather than waiting out a fixed schedule blind.\n\nRecovery does not end when symptoms disappear — completing the full prescribed course is what actually cures TB and prevents relapse or resistance. Our team supports patients through every stage of that process, from the first test to the final all-clear.',
    tag: 'Treatment',
    image: 'assets/blog-1.jpg',
    author: 'MEDCROSS TB Clinic',
    date: 'Jul 2026',
    readTime: '5 min read',
    relatedUrl: '/tb-treatments',
    relatedLabel: 'Explore our TB Treatment programs'
  },
  {
    slug: 'coughing-blood-tb-symptom',
    title: 'Coughing Up Blood? It Could Be a Sign of TB',
    excerpt: 'Hemoptysis (coughing blood) is a symptom that should never be ignored. Learn what it can mean and when to see a TB specialist.',
    body: 'Coughing up blood, medically known as hemoptysis, is one of the more alarming TB symptoms patients notice — and one of the most important not to ignore. It can point to active lung involvement that needs prompt evaluation. Not every case of hemoptysis is TB, but only a proper workup can tell you which it is.\n\nOther possible causes range from a minor respiratory infection to more serious lung conditions, which is exactly why self-diagnosis is risky. A chest X-ray, sputum test, and a clinical review of your other symptoms — persistent cough, night sweats, weight loss, low-grade fever — help our specialists narrow down the cause quickly.\n\nIf you or someone you know is coughing up blood, treat it as a same-week priority to get checked, not a wait-and-see symptom. Early evaluation means earlier treatment and a much smoother recovery.',
    tag: 'Symptoms',
    image: 'assets/blog-2.jpg',
    author: 'MEDCROSS TB Clinic',
    date: 'Jul 2026',
    readTime: '4 min read',
    relatedUrl: '/blood-from-mouth',
    relatedLabel: 'Read more about this symptom'
  },
  {
    slug: 'typhoid-vs-tuberculosis',
    title: 'Typhoid vs Tuberculosis: Know the Difference',
    excerpt: 'Both cause fever and fatigue, but typhoid and TB are very different diseases. Here is how to tell them apart and get the right diagnosis.',
    body: 'Typhoid and TB can both cause prolonged fever, fatigue and weight loss, which is why patients sometimes confuse the two. Typhoid is a bacterial infection usually spread through contaminated food or water and resolves with a short antibiotic course, while TB is airborne and needs a much longer treatment plan. Getting the right test early avoids weeks of guesswork.\n\nA few clues can help tell them apart before testing: typhoid fever often follows a step-wise rising pattern and comes with abdominal discomfort, while TB more typically presents with a persistent cough lasting weeks, night sweats, and gradual weight loss. Neither pattern is definitive on its own, though — that is what lab testing is for.\n\nIf your fever has lasted more than a week without a clear cause, do not guess. A short round of targeted testing tells you exactly which condition you are dealing with, and gets you on the right treatment from day one.',
    tag: 'Awareness',
    image: 'assets/blog-3.jpg',
    author: 'MEDCROSS TB Clinic',
    date: 'Jun 2026',
    readTime: '4 min read',
    relatedUrl: '/typhoid',
    relatedLabel: 'Compare Typhoid & TB in detail'
  },
  {
    slug: 'tb-faqs-answered',
    title: 'Tuberculosis FAQs: Your Questions, Answered',
    excerpt: 'From "is TB curable" to nutrition during treatment — straight answers to the questions patients ask us most often.',
    body: 'We get the same handful of questions from almost every new patient: is TB curable, how long does treatment take, can it spread to my family, and what should I eat during recovery. Our FAQ page collects straight, doctor-reviewed answers to all of it, so you can walk into your first consultation already informed.\n\nThe short version: yes, TB is curable in the vast majority of cases with the right treatment course, completed in full. Standard treatment runs about 6 months, longer for drug-resistant strains. Transmission risk to family members drops sharply once treatment begins and is managed with simple precautions in the meantime. Nutrition matters too — a protein-rich diet supports recovery alongside medication.\n\nFor the full breakdown of these and other common questions, visit our FAQ page below.',
    tag: 'FAQ',
    image: 'assets/doctor-patient.webp',
    author: 'MEDCROSS TB Clinic',
    date: 'Jun 2026',
    readTime: '6 min read',
    relatedUrl: '/faq',
    relatedLabel: 'See all TB FAQs'
  }
];
