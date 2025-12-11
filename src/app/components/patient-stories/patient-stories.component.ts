import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
// Removed VideoCardComponent since we are building testimonial cards inline

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

@Component({
  selector: 'app-patient-stories',
  standalone: true,
  templateUrl: './patient-stories.component.html',
  styleUrls: ['./patient-stories.component.scss'],
  imports: [CommonModule]
})
export class PatientStoriesComponent implements OnInit, OnDestroy {
  
  testimonials: Testimonial[] = [
    { 
      quote: 'Best clinic for tb patients in delhi, my condition is totaly weak for last 2 year and. Started treatement in this clinic in 20 days my health is more better.', 
      name: 'Sheetal Gautam', 
      title: 'Former Patient' 
    },
    { 
      quote: 'I am Arti, it has been one month since I started taking treatment for TB and I am better now, thank you mam.', 
      name: 'Aarti Jaiswal', 
      title: 'Former Patient' 
    },
    { 
      quote: 'My treatment is going on at Durgapuri Meddcross clinic and I have become well after taking my treatment. Whoever has any problem should come to Meddcross clinic and get it checked. Thank you Meddcross team.', 
      name: 'Sonu Reshma', 
      title: 'Former Patient' 
    },
    { 
      quote: 'Two members of our family are undergoing treatment at Medcross Clinic and they have been cured, thank you.', 
      name: 'Himanshi Govind', 
      title: 'Former Patient' 
    },
    { 
      quote: 'Best treatment is given in Medcross clinic. I am tired of getting treatment here. Thank you Medcross team.', 
      name: 'Lalit Koli', 
      title: 'Former Patient' 
    },
    { 
      quote: 'I am very happy that my daughter Tapasya got treatment from Medcross TB clinic. Her TB treatment is complete today. She is completely fine. I would suggest that you get TB treatment from Medcross clinic only. Dr. Sunita Rani here is very supportive and I would also like to thank her team.', 
      name: 'Inderjeet yadav', 
      title: 'Former Patient' 
    },
    { 
      quote: 'I got a lot of relief after taking treatment from Med Cross clinic and I would suggest this to everyone, if anyone wants to take treatment for TB then they should go to Med Cross clinic, thank you mam.', 
      name: 'Deepanshu Shrivastav', 
      title: 'Former Patient' 
    },
    { 
      quote: 'Medcrosss TB clinic they give very good treatment to those persons who suffering fromm TB and theyy also take a full possibility of our patient!!', 
      name: 'KHUSHII', 
      title: 'Former Patient' 
    },
    {
    quote: "Doctor Sunita ma'am is so polite. Nice behavior and staff is fully cooperative. I really like this clinic.",
    name: "Abu Nafisa Naaz Hussain",
    title: "Former Patient"
  },
  {
    quote: "We are satisfied with the treatment. Staff behavior is good and prices are affordable.",
    name: "Sania Khan",
    title: "Former Patient"
  },
  {
    quote: "Best clinic for TB patients in Delhi. My condition was weak for 2 years and within 20 days of treatment here I improved a lot.",
    name: "Sheetal Gautam",
    title: "Former Patient"
  },
  {
    quote: "We visited for spine TB treatment. Dr. Sunita is very supportive and guided us well. Staff is very helpful.",
    name: "Shankar Bhagat",
    title: "Former Patient"
  },
  {
    quote: "Hospital treatment is very good. My health improved after taking medicine. Thanks to Medcross Clinic.",
    name: "Kehkashan Siddiqui",
    title: "Former Patient"
  },
  {
    quote: "My treatment experience was very good. Doctor ma'am and staff members are very friendly.",
    name: "Aman Dhyani",
    title: "Former Patient"
  },
  {
    quote: "I had severe back pain and big hospitals couldn’t help. Dr. Sunita treated me well and I got relief in 2 days. Highly recommended.",
    name: "Sana Parveen",
    title: "Former Patient"
  },
  {
    quote: "Well-behaved staff and best treatment at a reasonable price. The whole team is good.",
    name: "Rollin Lohia 77",
    title: "Former Patient"
  },
  {
    quote: "I was taking treatment for long and finally got cured. Staff is very cooperative.",
    name: "Shahid Raza",
    title: "Former Patient"
  },
  {
    quote: "Very good experience. Staff explained clearly how and when to take medication.",
    name: "Simmu Kaur",
    title: "Former Patient"
  },
  {
    quote: "Best doctor for tuberculosis. I have been her patient for 4 months and never felt negative. Staff is very supportive.",
    name: "Piyush Hada",
    title: "Former Patient"
  },
  {
    quote: "Good clinic for TB treatment. My mother had spinal TB and improved remarkably. Doctor and staff behavior is good.",
    name: "Mukesh Rai",
    title: "Former Patient"
  },
  {
    quote: "Best doctor indeed for TB. I took treatment for 9 months and she helped me recover. Staff is adorable and helpful.",
    name: "Rinku Singh",
    title: "Former Patient"
  },
  {
    quote: "Dr. Sunita ma'am is very intelligent and compassionate. My wife is fine now. Staff is well trained.",
    name: "Qamar Sibtain",
    title: "Former Patient"
  },
  {
    quote: "Excellent care at TB Clinic Durga Puri. Doctors are knowledgeable and attentive. Highly recommended.",
    name: "Shiv Kumar",
    title: "Former Patient"
  },
  {
    quote: "I thank Dr. Sunita ma'am for successful TB treatment. She guided me at every stage. Great team effort.",
    name: "Gaurav Kashyap",
    title: "Former Patient"
  },
  {
    quote: "I was diagnosed with TB and didn’t get results earlier. Dr. Sunita treated me well and now I’m totally fine.",
    name: "Sunil Kumar",
    title: "Former Patient"
  },
  {
    quote: "Amazing clinic. Doctors and staff behavior is very good. I'm thankful my treatment got completed successfully.",
    name: "Adarsh",
    title: "Former Patient"
  },
  {
    quote: "Best TB clinic with proper facilities. Very clean. Dr. Sunita diagnosed sharply and treated my daughter well.",
    name: "Tulsi Dass",
    title: "Former Patient"
  },
  {
    quote: "Exceptional care at the TB clinic. Staff was knowledgeable and supportive throughout my treatment.",
    name: "Pranav Raj",
    title: "Former Patient"
  }
  ];

  /** SLIDER STATE */
  currentSlideIndex: number = 0;
  private autoScrollInterval: any;
  private isBrowser: boolean;

  /** Limit dots (visible indicators) */
  visibleDots: number = 5;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  /** Creates evenly spaced dots: ALWAYS 5 dots even if 25 reviews */
  get displayedDots(): number[] {
    const dots = [];
    const total = this.testimonials.length;

    const step = Math.ceil(total / this.visibleDots);

    for (let i = 0; i < this.visibleDots; i++) {
      dots.push(i * step);
    }

    return dots;
  }

  getDotRangeEnd(startIndex: number): number {
  return startIndex + Math.ceil(this.testimonials.length / this.visibleDots);
}


  ngOnInit(): void {
    if (this.isBrowser) {
      this.startAutoScroll();
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser && this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  /** Auto-scroll slides */
  startAutoScroll(): void {
    this.autoScrollInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  /** Restart auto-scroll on user interaction */
  resetAutoScroll(): void {
    if (this.isBrowser && this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
      this.startAutoScroll();
    }
  }

  /** Next slide */
  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.testimonials.length;
    this.resetAutoScroll();
  }

  /** Previous slide */
  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.resetAutoScroll();
  }
}