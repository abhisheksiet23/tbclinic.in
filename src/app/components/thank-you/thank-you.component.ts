import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.scss',
})
export class ThankYouComponent implements OnInit {
  source: string = '';
  heading: string = 'Thank You!';
  message: string = 'Your consultation request has been submitted successfully. Our team will contact you soon.';
  backLink: string = '/';
  backLabel: string = 'Go Back to Home';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.source = params['source'] || '';

      switch (this.source) {
        case 'blood-from-mouth':
          this.heading = 'Thank You for Reaching Out!';
          this.message = 'Your consultation request regarding blood from mouth has been submitted successfully. Our TB experts will review your information and contact you soon.';
          this.backLink = '/blood-from-mouth';
          this.backLabel = 'Go Back';
          break;
        case 'typhoid':
          this.heading = 'Thank You for Reaching Out!';
          this.message = 'Your consultation request regarding TB after typhoid has been submitted successfully. Our TB experts will review your information and contact you soon.';
          this.backLink = '/typhoid';
          this.backLabel = 'Go Back';
          break;
        case 'home':
        default:
          this.heading = 'Thank You!';
          this.message = 'Your consultation request has been submitted successfully. Our team will call you back shortly.';
          this.backLink = '/';
          this.backLabel = 'Go Back to Home';
          break;
      }
    });
  }
}
