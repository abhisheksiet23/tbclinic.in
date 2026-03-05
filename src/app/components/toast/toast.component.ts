import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-container">
      @for (toast of toastService.toasts(); track toast.id) {
        <div class="toast" [class]="'toast toast-' + toast.type" (click)="toastService.dismiss(toast.id)">
          <span class="toast-icon">
            @switch (toast.type) {
              @case ('success') { ✓ }
              @case ('error') { ✕ }
              @case ('warning') { ! }
              @case ('info') { ℹ }
            }
          </span>
          <span class="toast-message">{{ toast.message }}</span>
          <button class="toast-close" (click)="toastService.dismiss(toast.id)">×</button>
        </div>
      }
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 10000;
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 400px;
      width: calc(100% - 40px);
    }

    .toast {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 18px;
      border-radius: 12px;
      color: #fff;
      font-size: 0.95rem;
      font-weight: 500;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      animation: slideIn 0.35s ease-out;
      backdrop-filter: blur(10px);
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(60px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .toast-success {
      background: linear-gradient(135deg, #2e7d32, #43a047);
    }

    .toast-error {
      background: linear-gradient(135deg, #c62828, #e53935);
    }

    .toast-warning {
      background: linear-gradient(135deg, #e65100, #f57c00);
    }

    .toast-info {
      background: linear-gradient(135deg, #1565c0, #1e88e5);
    }

    .toast-icon {
      font-size: 1.2rem;
      font-weight: 700;
      min-width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
    }

    .toast-message {
      flex: 1;
      line-height: 1.4;
    }

    .toast-close {
      background: none;
      border: none;
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.3rem;
      cursor: pointer;
      padding: 0 4px;
      line-height: 1;
      transition: color 0.2s;

      &:hover {
        color: #fff;
      }
    }

    @media (max-width: 480px) {
      .toast-container {
        top: 10px;
        right: 10px;
        left: 10px;
        width: auto;
        max-width: none;
      }
    }
  `]
})
export class ToastComponent {
  toastService = inject(ToastService);
}
