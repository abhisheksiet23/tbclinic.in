import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

export interface PageSeoConfig {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  jsonLd?: object | object[];
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private meta: Meta,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  setPage(config: PageSeoConfig): void {
    this.titleService.setTitle(config.title);

    this.meta.updateTag({ name: 'description', content: config.description });
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    const ogTitle = config.ogTitle ?? config.title;
    const ogDesc = config.ogDescription ?? config.description;
    const ogImage = config.ogImage ?? 'https://tbclinic.in/assets/images/og-image.jpg';

    this.meta.updateTag({ property: 'og:title', content: ogTitle });
    this.meta.updateTag({ property: 'og:description', content: ogDesc });
    this.meta.updateTag({ property: 'og:url', content: config.canonicalUrl });
    this.meta.updateTag({ property: 'og:image', content: ogImage });
    this.meta.updateTag({ name: 'twitter:title', content: ogTitle });
    this.meta.updateTag({ name: 'twitter:description', content: ogDesc });
    this.meta.updateTag({ name: 'twitter:image', content: ogImage });
    this.meta.updateTag({ name: 'twitter:url', content: config.canonicalUrl });

    this.setCanonical(config.canonicalUrl);

    if (config.jsonLd) {
      this.injectJsonLd(config.jsonLd);
    }
  }

  private setCanonical(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private injectJsonLd(schema: object | object[]): void {
    const existing = this.document.querySelector('script[data-page-schema]');
    if (existing) existing.remove();

    const script = this.document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-page-schema', 'true');
    const schemas = Array.isArray(schema) ? schema : [schema];
    script.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
    this.document.head.appendChild(script);
  }
}
