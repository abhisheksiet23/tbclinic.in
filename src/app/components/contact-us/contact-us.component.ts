import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {

  // Form model
  contactForm = {
    name: '',
    email: '',
    mobile: '',
    hospital: 'Select Clinic (Nearest Metro Station)',
    message: '',
  };

  // Dropdown options
  hospitals: string[] = [
    'Select Clinic (Nearest Metro Station)',
    'Lawrence Road (Keshavpuram, Red Line)',
    'Mayur Vihar (Mayur Vihar Pocket-I, Pink Line)',
    'Durgapuri (Shahdra, Red Line)',
    'Uttam Nagar (Nawada, Blue Line)',
    'Tigri (Saket, Yellow Line)',
  ];

  // Web3Forms API key
  private WEB3FORMS_ACCESS_KEY = '282bc130-d161-4e24-9e93-8eeac1293408'; 

  // ✅ Popup visibility state
  showPopup: boolean = false;

  private toast = inject(ToastService);

  constructor() {}

  ngOnInit(): void {
    if (!this.contactForm.hospital) {
      this.contactForm.hospital = this.hospitals[0];
    }
  }

  // Form submission handler
  async onSubmit(): Promise<void> {
    if (!this.contactForm.name || !this.contactForm.mobile || this.contactForm.hospital === this.hospitals[0]) {
      this.toast.warning('Please fill all required fields and select a clinic.');
      return;
    }

    const formData = new FormData();
    formData.append('access_key', this.WEB3FORMS_ACCESS_KEY);
    formData.append('name', this.contactForm.name);
    formData.append('email', this.contactForm.email);
    formData.append('mobile', this.contactForm.mobile);
    formData.append('clinic', this.contactForm.hospital);
    formData.append('message', this.contactForm.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        // ✅ SHOW POPUP
        this.showPopup = true;
        this.resetForm();
      } else {
        this.toast.error('Oops! Something went wrong. Please try again later.');
        console.error(result);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      this.toast.error('Unable to send form. Please try again later.');
    }
  }

  // Reset form fields
  private resetForm(): void {
    this.contactForm = {
      name: '',
      email: '',
      mobile: '',
      hospital: this.hospitals[0],
      message: '',
    };
  }

  // ✅ Close Popup Function
  closePopup(): void {
    this.showPopup = false;
  }

  // Chat & Extra Buttons
  openInternationalEnquiry(): void {
    this.toast.info('International Patient Enquiry - Coming Soon!');
  }

  openQuickEnquiry(): void {
    this.toast.info('Quick Enquiry - Coming Soon!');
  }

  openChat(): void {
    this.toast.info('Live chat will be available soon!');
  }
}