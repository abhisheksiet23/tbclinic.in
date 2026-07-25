import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { BLOG_POSTS, BlogPost } from '../../data/blog-posts.data';

interface SocialPost {
  platform: 'instagram' | 'facebook' | 'whatsapp';
  caption: string;
  url: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {

  posts: BlogPost[] = BLOG_POSTS;

  postUrl(post: BlogPost): string {
    return '/blog/' + post.slug;
  }

  featuredPost(): BlogPost | undefined {
    return this.posts[0];
  }

  remainingPosts(): BlogPost[] {
    return this.posts.slice(1);
  }

  whatsappShareUrl(post: BlogPost): string {
    return `https://wa.me/?text=${encodeURIComponent(post.title + ' — https://tbclinic.in' + this.postUrl(post))}`;
  }

  facebookShareUrl(post: BlogPost): string {
    return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://tbclinic.in' + this.postUrl(post))}`;
  }

  twitterShareUrl(post: BlogPost): string {
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent('https://tbclinic.in' + this.postUrl(post))}`;
  }

  // Placeholder content — swap `url` for the real post links (and captions,
  // if different) once the social pages are live.
  socialPosts: SocialPost[] = [
    {
      platform: 'instagram',
      caption: 'Every case is different — and so is every treatment plan. Swipe to see how we personalize TB care.',
      url: '#'
    },
    {
      platform: 'facebook',
      caption: '5 clinics across Delhi, one mission: find, treat and cure TB. Here is what our patients have to say.',
      url: '#'
    },
    {
      platform: 'whatsapp',
      caption: 'Join our WhatsApp broadcast channel for TB health tips, clinic updates and appointment reminders.',
      url: '#'
    }
  ];

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setPage({
      title: 'TB Health Blog | Tuberculosis Awareness & Care Guides | MEDCROSS Delhi',
      description: 'Read expert articles on tuberculosis symptoms, diagnosis, treatment and recovery from MEDCROSS TB Clinic Delhi — trusted TB awareness content to help you make informed health decisions.',
      keywords: 'TB blog, tuberculosis articles, TB awareness, TB symptoms blog, MEDCROSS TB Clinic blog',
      canonicalUrl: 'https://tbclinic.in/blog',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        'url': 'https://tbclinic.in/blog',
        'name': 'MEDCROSS TB Clinic Blog',
        'description': 'TB awareness, symptoms, diagnosis and treatment guides from MEDCROSS TB Clinic Delhi.'
      }
    });
  }
}
