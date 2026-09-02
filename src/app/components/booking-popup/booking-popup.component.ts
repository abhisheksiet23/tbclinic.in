import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-booking-popup',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (popup.visible()) {
      <div class="popup-overlay" (click)="popup.dismiss()" role="dialog" aria-modal="true" aria-label="Book a TB consultation">
        <div class="popup-card" (click)="$event.stopPropagation()">
          <button class="popup-close" (click)="popup.dismiss()" aria-label="Close">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <div class="popup-icon" aria-hidden="true">
            <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </div>

          <h2 class="popup-title">Still Have Questions About TB?</h2>
          <p class="popup-text">
            Talk to our experts — a confidential consultation is one call or click away.
            We find, treat and cure TB, and we'll be with you at every step.
          </p>

          <div class="popup-actions">
            <button type="button" class="popup-btn popup-btn--primary" (click)="bookAppointment()">
              Book Appointment
            </button>
            <a href="https://wa.me/919218117493?text=Hello%2C%20I%20would%20like%20to%20book%20a%20TB%20consultation"
               target="_blank" rel="noopener" class="popup-btn popup-btn--secondary" (click)="popup.dismiss()">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .popup-overlay {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.55);
      backdrop-filter: blur(3px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10500;
      padding: 20px;
      animation: fadeIn 0.25s ease-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .popup-card {
      position: relative;
      background: #fff;
      border-radius: 18px;
      max-width: 420px;
      width: 100%;
      padding: 32px 28px 28px;
      text-align: center;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
      animation: popIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    @keyframes popIn {
      from { opacity: 0; transform: scale(0.92) translateY(10px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }

    .popup-close {
      position: absolute;
      top: 14px;
      right: 14px;
      background: #f1f5f9;
      border: none;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #475569;
      cursor: pointer;
      transition: background 0.2s;
    }

    .popup-close:hover {
      background: #e2e8f0;
    }

    .popup-icon {
      width: 56px;
      height: 56px;
      margin: 0 auto 16px;
      border-radius: 50%;
      background: #e6f4ea;
      color: #1a7f37;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .popup-title {
      font-size: 1.3rem;
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 10px;
    }

    .popup-text {
      font-size: 0.95rem;
      line-height: 1.55;
      color: #475569;
      margin: 0 0 22px;
    }

    .popup-actions {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .popup-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 13px 20px;
      border-radius: 10px;
      font-weight: 600;
      font-size: 0.95rem;
      text-decoration: none;
      cursor: pointer;
      border: none;
      transition: transform 0.15s, box-shadow 0.15s;
    }

    .popup-btn--primary {
      background: #1a7f37;
      color: #fff;
    }

    .popup-btn--primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 8px 20px rgba(26, 127, 55, 0.3);
    }

    .popup-btn--secondary {
      background: #f1f5f9;
      color: #0f172a;
    }

    .popup-btn--secondary:hover {
      background: #e2e8f0;
    }
  `]
})
export class BookingPopupComponent {
  popup = inject(PopupService);
  private router = inject(Router);

  bookAppointment(): void {
    this.popup.dismiss();
    this.router.navigate(['/contact-us']);
  }
}
