import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { BLOG_POSTS, BlogPost } from '../../data/blog-posts.data';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent implements OnInit {

  post: BlogPost | undefined;
  bodyParagraphs: string[] = [];
  relatedPosts: BlogPost[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private seo: SeoService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      const post = BLOG_POSTS.find(p => p.slug === slug);

      if (!post) {
        this.router.navigate(['/blog']);
        return;
      }

      this.post = post;
      this.bodyParagraphs = post.body.split('\n\n');
      this.relatedPosts = BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 3);

      this.seo.setPage({
        title: `${post.title} | MEDCROSS TB Clinic Delhi`,
        description: post.excerpt,
        keywords: `${post.tag}, TB blog, tuberculosis, MEDCROSS TB Clinic`,
        canonicalUrl: `https://tbclinic.in/blog/${post.slug}`,
        ogImage: `https://tbclinic.in/${post.image}`,
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          'headline': post.title,
          'description': post.excerpt,
          'url': `https://tbclinic.in/blog/${post.slug}`,
          'image': `https://tbclinic.in/${post.image}`,
          'author': { '@type': 'Organization', 'name': post.author },
          'datePublished': post.date
        }
      });
    });
  }

  postUrl(post: BlogPost): string {
    return '/blog/' + post.slug;
  }
}
