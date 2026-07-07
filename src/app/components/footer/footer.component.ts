import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

interface LinkItem {
  name: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private router: Router) {}
  
  currentYear = new Date().getFullYear();

  quickLinks: LinkItem[] = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about-us' },
    { name: 'What We Treat', url: '/tb-treatments' },
    { name: 'Our Doctors', url: '/our-doctors' },
    { name: 'Contact Us', url: '/contact-us' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Blood From Mouth', url: '/blood-from-mouth' },
    { name: 'Typhoid', url: '/typhoid' }
  ];

  keyResources: LinkItem[] = [
    { name: 'Contact Us', url: '/contact-us' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'What We Treat', url: '/tb-treatments' }
  ];

  clinicHours = [
    { days: 'Monday – Saturday', hours: '09:30 AM – 05:00 PM' },
    { days: 'Sunday', hours: 'Closed' }
  ];

  networkOfCare2: LinkItem[] = [
    { name: 'Lawrence Road', url: 'https://www.google.com/maps?q=28.68975231215174,77.16094850828438' },
    { name: 'Mayur Vihar', url: 'https://www.google.com/maps?q=28.60691070696357,77.29596978858156' },
    { name: 'Durgapuri', url: 'https://www.google.com/maps/place/MED+CROSS+CLINIC/@28.690701,77.290205,15z/data=!4m6!3m5!1s0x390cfb5f78cc7cff:0xbe4a1cd7f063d6e!8m2!3d28.6907012!4d77.290205!16s%2Fg%2F11v6fkpgc8?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D' },
    { name: 'Uttam Nagar', url: 'https://www.google.com/maps?q=28.62084153104128,77.04939339192077' },
    { name: 'Tigri  ', url: 'https://www.google.com/maps?q=28.51170377389819,77.23801085778919' },
  ];

  socialMedia = [
    { icon: 'fa-facebook-f', url: '#', name: 'Facebook' },
    { icon: 'fa-instagram', url: '#', name: 'Instagram' },
    { icon: 'fa-linkedin-in', url: '#', name: 'LinkedIn' },
    { icon: 'fa-youtube', url: '#', name: 'YouTube' }
  ];

  // Navigate using Angular Router
  navigate(link: LinkItem) {
    if (link.url !== '#') {
      this.router.navigate([link.url]);
    }
  }
}
