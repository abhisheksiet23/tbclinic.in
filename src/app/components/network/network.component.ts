import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

// Import the new standalone pipes
import { SafeUrlPipe } from '../pipes/safe-url.pipe'; 
import { UrlEncodePipe } from '../pipes/url-encode.pipe'; 

interface Location {
 branchName: string; 
 addressLine: string; 
 mapEmbedUrl: string; 
}

@Component({
 selector: 'app-network',
 standalone: true,
 imports: [CommonModule, SafeUrlPipe, UrlEncodePipe], 
 templateUrl: './network.component.html',
 styleUrls: ['./network.component.scss']
})
export class NetworkComponent {
 
 // Inject DomSanitizer (needed to allow pipe to work)
 constructor(private sanitizer: DomSanitizer) {} 

 // Data for the hospital locations carousel/grid
 hospitalLocations: Location[] = [
  {
   branchName: 'Mayur Vihar Branch',
   addressLine: 'TB Clinic, DDA Market, F-7, Mayur Vihar Phase-I, Pocket-1, Delhi-110091',
   mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!4v1783416775372!6m8!1m7!1sV1PyN3wAw9Ksw1byVG7xZQ!2m2!1d28.60691070696357!2d77.29596978858156!3f252.51!4f6.799999999999997!5f0.8134586354752991'
  },
  {
   branchName: 'Lawrence Road Branch',
   addressLine: 'C-8/139, Lawrence Road Gate No :3, Keshavpuram, Delhi-35, Opp- B4 Dda Market(Hanuman Mandir)',
   mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!4v1783416717613!6m8!1m7!1sBhRGKNnLjK77aOi7f4HvJw!2m2!1d28.68975231215174!2d77.16094850828438!3f208.77!4f-31.759999999999998!5f1.0228038414546936'
  },
  {
   branchName: 'Durgapuri Branch',
   addressLine: 'C-45, West Jyoti Nagar, Durgapuri Chowk, Durgapuri, Shahdara, Delhi-110094',
   mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.964745626593!2d77.28763007529133!3d28.6907011756331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb5f78cc7cff%3A0xbe4a1cd7f063d6e!2sMED%20CROSS%20CLINIC!5e0!3m2!1sen!2sin!4v1765006663135!5m2!1sen!2sin'
  },
  {
   branchName: 'Uttam Nagar Branch',
   addressLine: 'RZ-10, Uttam Nagar, Main Najafgarh Road, Near Pillar No. 713, Next to IDBI Bank, Uttam Nagar',
   mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!4v1783416910122!6m8!1m7!1sliYdcGvYO6kGm4_agadMGg!2m2!1d28.62084153104128!2d77.04939339192077!3f358.29!4f-0.12000000000000455!5f0.7820865974627469'
  },
  {
   branchName: 'Tigri Branch',
   addressLine: 'A Block 111, 112, 113 Ground floor Bank Road JJ Colony Tigri, New Delhi-110080(near Sheetla Mata Mandir)',
   mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!4v1783416622731!6m8!1m7!1sV_v1Sou5sdWc-VAGIwRhvg!2m2!1d28.51170377389819!2d77.23801085778919!3f269.02!4f-3.0799999999999983!5f0.7820865974627469'
  }
 ];

 // 📌 New: Positions for the map pins (adjust these values based on your actual map image)
 mapPinPositions: { top: string, left: string }[] = [
  { top: '49%', left: '79%' },   // Mayur Vihar Branch
  { top: '30%', left: '36%' },   // Lawrence Road Branch
  { top: '38.5%', left: '73%' },   // Durgapuri Branch
  { top: '60%', left: '34%' },   //  Uttam Nagar Branch 
  { top: '76%', left: '62%' }    // Tigri Branch 
];


 // The network tabs are now simplified to reflect the actual branches
 networkCities: string[] = [
  'All Locations',
 ];
 
 // The contact info has been updated to remove "RG Hospitals" reference
 contactInfo = {
  title: 'Our Network of Care',
 description: 'We are India\'s leading TB healthcare provider, offering exceptional medical services across our centers in Delhi.',
 phone: '+91 80 767 15740',
 email: 'info@tbclinic.com'
 };
 
 // 📜 New: Function to scroll to the selected branch card
 scrollToBranch(index: number) {
 const elementId = `branch-${index}`;
 const element = document.getElementById(elementId);
 if (element) {
 element.scrollIntoView({ behavior: 'smooth', block: 'start' });
 }
 }
}