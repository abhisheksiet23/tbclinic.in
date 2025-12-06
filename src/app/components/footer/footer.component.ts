import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface LinkItem {
  name: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private router: Router) {}

  keyResources: LinkItem[] = [
    { name: 'Contact Us', url: '/contact-us' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'What We Treat', url: '/tb-treatments' }
  ];

  clinicHours = [
  { days: 'Monday – Saturday', hours: '09:30AM – 05:00PM' },
  { days: 'Sunday', hours: 'Closed' }
];

  networkOfCare2: LinkItem[] = [
    { name: 'Lawrence Road', url: 'https://www.google.com/maps/place/Tbclinic.in/@28.688618,77.158352,15z/data=!4m6!3m5!1s0x390d03ac60d1f0db:0xe1549eb05cc85afa!8m2!3d28.6886179!4d77.1583521!16s%2Fg%2F11smr6f40b?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D' },
    { name: 'Mayur Vihar', url: 'https://www.google.com/maps/place/TB+Clinic/@28.6063338,77.296749,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce5001a143a87:0xb8b2668120a206af!8m2!3d28.6063338!4d77.296749!16s%2Fg%2F11vyh_mzt8?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D' },
    { name: 'Durgapuri', url: 'https://www.google.com/maps/place/MED+CROSS+CLINIC/@28.690701,77.290205,15z/data=!4m6!3m5!1s0x390cfb5f78cc7cff:0xbe4a1cd7f063d6e!8m2!3d28.6907012!4d77.290205!16s%2Fg%2F11v6fkpgc8?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D' },
    { name: 'Uttam Nagar', url: 'https://www.google.com/maps/place/IDBI+Bank/@28.620921,77.049296,18z/data=!4m6!3m5!1s0x390d0525b7f3732f:0xd7ee656a24dfaef2!8m2!3d28.6209211!4d77.0492964!16s%2Fg%2F11c718y2vb?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D' },
    { name: 'Tigri  ', url: 'https://www.google.com/maps/place/Sheetla+Mata+Mandir/@28.511823,77.23812,17z/data=!4m6!3m5!1s0x390ce197e3bde169:0x4309fc81e68aed3a!8m2!3d28.5118233!4d77.2381203!16s%2Fg%2F11k00by4x_?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D' },
  ];

  socialMedia = [
    { icon: 'fa-facebook-f', url: '#' },
    { icon: 'fa-instagram', url: '#' },
    { icon: 'fa-linkedin-in', url: '#' },
    { icon: 'fa-youtube', url: '#' }
  ];

  // Navigate using Angular Router
  navigate(link: LinkItem) {
    if (link.url !== '#') {
      this.router.navigate([link.url]);
    }
  }
}
