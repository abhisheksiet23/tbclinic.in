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
   mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.781409268987!2d77.29417407528805!3d28.6063337756791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5001a143a87%3A0xb8b2668120a206af!2sTB%20Clinic!5e0!3m2!1sen!2sin!4v1765006543913!5m2!1sen!2sin'
  },
  {
   branchName: 'Lawrence Road Branch',
   addressLine: 'C-8/139, Lawrence Road Gate No :3, Keshavpuram, Delhi-35, Opp- B4 Dda Market(Hanuman Mandir)',
   mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.034389435326!2d77.15577717529126!3d28.688617875634105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03ac60d1f0db%3A0xe1549eb05cc85afa!2sTbclinic.in!5e0!3m2!1sen!2sus!4v1765006601351!5m2!1sen!2sus'
  },
  {
   branchName: 'Durgapuri Branch',
   addressLine: 'C-45, West Jyoti Nagar, Durgapuri Chowk, Durgapuri, Shahdara, Delhi-110094',
   mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.964745626593!2d77.28763007529133!3d28.6907011756331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb5f78cc7cff%3A0xbe4a1cd7f063d6e!2sMED%20CROSS%20CLINIC!5e0!3m2!1sen!2sin!4v1765006663135!5m2!1sen!2sin'
  },
  {
   branchName: 'Uttam Nagar Branch',
   addressLine: 'RZ-10, Uttam Nagar, Main Najafgarh Road, Near Pillar No. 713, Next to IDBI Bank, Uttam Nagar',
   mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d378.33099454279267!2d77.0488369663347!3d28.620976288266032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0525b7f3732f%3A0xd7ee656a24dfaef2!2sIDBI%20Bank!5e0!3m2!1sen!2sus!4v1765007208652!5m2!1sen!2sus'
  },
  {
   branchName: 'Tigri Branch',
   addressLine: 'A Block 111, 112, 113 Ground floor Bank Road JJ Colony Tigri, New Delhi-110080(near Sheetla Mata Mandir)',
   mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876.4819217243396!2d77.23747656956373!3d28.51182329848319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce197e3bde169%3A0x4309fc81e68aed3a!2sSheetla%20Mata%20Mandir!5e0!3m2!1sen!2sus!4v1765007131680!5m2!1sen!2sus'
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
 description: 'We are India\'s leading specialized TB healthcare provider, offering exceptional medical services across our centers in Delhi.',
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