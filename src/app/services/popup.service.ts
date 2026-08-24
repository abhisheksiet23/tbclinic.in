import { Injectable, signal } from '@angular/core';

/**
 * Tracks distinct pages visited in this browser session and reveals the booking
 * popup once the visitor has browsed roughly half the site — never on the very
 * first page load/switch. Fires once per session.
 */
@Injectable({ providedIn: 'root' })
export class PopupService {
  private readonly SHOWN_KEY = 'tb_popup_shown';
  private readonly VISITED_KEY = 'tb_visited_pages';

  // Trackable content pages on the site (legal/thank-you/dynamic-slug pages excluded).
  private readonly trackablePages = [
    '/', '/about-us', '/our-doctors', '/faq', '/contact-us',
    '/blog', '/tb-treatments', '/blood-from-mouth', '/typhoid'
  ];

  private readonly threshold = Math.ceil(this.trackablePages.length / 2); // 5 pages

  visible = signal(false);

  registerPageView(path: string): void {
    if (typeof sessionStorage === 'undefined') return;
    if (sessionStorage.getItem(this.SHOWN_KEY)) return;

    const normalized = path.split('?')[0].split('#')[0];
    if (!this.trackablePages.includes(normalized)) return;

    const visited: string[] = JSON.parse(sessionStorage.getItem(this.VISITED_KEY) || '[]');
    if (!visited.includes(normalized)) {
      visited.push(normalized);
      sessionStorage.setItem(this.VISITED_KEY, JSON.stringify(visited));
    }

    if (visited.length >= this.threshold) {
      sessionStorage.setItem(this.SHOWN_KEY, '1');
      this.visible.set(true);
    }
  }

  dismiss(): void {
    this.visible.set(false);
  }
}
