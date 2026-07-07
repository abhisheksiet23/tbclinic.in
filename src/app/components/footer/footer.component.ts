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
    { name: 'Lawrence Road', url: 'https://www.google.com/maps/embed?pb=!4v1783416717613!6m8!1m7!1sBhRGKNnLjK77aOi7f4HvJw!2m2!1d28.68975231215174!2d77.16094850828438!3f208.77!4f-31.759999999999998!5f1.0228038414546936' },
    { name: 'Mayur Vihar', url: 'https://www.google.com/maps/embed?pb=!4v1783416775372!6m8!1m7!1sV1PyN3wAw9Ksw1byVG7xZQ!2m2!1d28.60691070696357!2d77.29596978858156!3f252.51!4f6.799999999999997!5f0.8134586354752991' },
    { name: 'Durgapuri', url: 'https://www.google.com/maps/place/MED+CROSS+CLINIC/@28.690701,77.290205,15z/data=!4m6!3m5!1s0x390cfb5f78cc7cff:0xbe4a1cd7f063d6e!8m2!3d28.6907012!4d77.290205!16s%2Fg%2F11v6fkpgc8?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D' },
    { name: 'Uttam Nagar', url: 'https://www.google.com/maps/embed?pb=!4v1783416910122!6m8!1m7!1sliYdcGvYO6kGm4_agadMGg!2m2!1d28.62084153104128!2d77.04939339192077!3f358.29!4f-0.12000000000000455!5f0.7820865974627469' },
    { name: 'Tigri  ', url: 'https://www.google.com/maps/embed?pb=!4v1783416622731!6m8!1m7!1sV_v1Sou5sdWc-VAGIwRhvg!2m2!1d28.51170377389819!2d77.23801085778919!3f269.02!4f-3.0799999999999983!5f0.7820865974627469' },
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
