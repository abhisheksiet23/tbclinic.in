import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
    pathMatch: 'full',
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./components/about-us/about-us.component').then((m) => m.AboutUsComponent),
  },
  {
    path: 'our-doctors',
    loadComponent: () =>
      import('./components/our-doctors/our-doctors.component').then((m) => m.OurDoctorsComponent),
  },
  {
    path: 'faq',
    loadComponent: () => import('./components/faq/faq.component').then((m) => m.FaqComponent),
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./components/contact-us/contact-us.component').then((m) => m.ContactUsComponent),
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./components/privacy/PrivacyPolicyComponent').then((m) => m.PrivacyPolicyComponent),
  },
  {
    path: 'tb-treatments',
    loadComponent: () =>
      import('./components/tb-treatments/tb-treatments.component').then((m) => m.TbTreatmentsComponent),
  },
  {
    path: 'blood-from-mouth',
    loadComponent: () =>
      import('./components/blood-from-mouth/blood-from-mouth.component').then((m) => m.bloodFromMouthComponent),
  },
  {
    path: 'typhoid',
    loadComponent: () =>
      import('./components/typhoid/typhoid.component').then((m) => m.TyphoidComponent),
  },
  {
    path: 'thank-you',
    loadComponent: () =>
      import('./components/thank-you/thank-you.component').then((m) => m.ThankYouComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
