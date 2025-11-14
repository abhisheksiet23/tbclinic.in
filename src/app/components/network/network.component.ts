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
   addressLine: 'TB Clinic, DDA Market, F-7, Mayur Vihar Phase I, Pocket 1, Delhi 110091',
   mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.393457591605!2d77.29524796030913!3d28.587823577313883!2m3!1f0!2f0!3f0!3m2!1i1024!2i777!4f13.1!3m3!1m2!1s0x390ce5001a143a87%3A0x8b32616f74a001f3!2sTBclinic.in!5e0!3m2!1sen!2sin!4v1679048700000!5m2!1sen!2sin'
  },
  {
   branchName: 'Lawrence Road Branch',
   addressLine: 'C-8/139, Lawrence Road Gate No 3, Keshaypuram, Delhi -35',
   mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.7820984852023!2d77.15582300000001!3d28.690205!2m3!1f0!2f0!3f0!3m2!1i1024!2i777!4f13.1!3m3!1m2!1s0x390d02330a6e3d55%3A0x16236777036885547770!2sMED%20CROSS%20CLINIC!5e0!3m2!1sen!2sin'
  },
  {
   branchName: 'Durgapuri Branch',
   addressLine: 'C-45, West Jyoti Nagar, Durgapuri Extension, Durgapuri, Shahdara, Delhi, 110094',
   mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.419269067733!2d77.29041017548658!3d28.670281175652055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb6d859a1175%3A0x6b7a5e8c18c5e69e!2sMed%20Cross%20Clinic!5e0!3m2!1sen!2sin!4v1730412380000!5m2!1sen!2sin'
  },
  {
   branchName: 'Uttam Nagar Branch',
   addressLine: 'C-45, West Jyoti Nagar, Near Pillar No. 713, Next to IDBI Bank, Uttam Nagar',
   mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.393457591605!2d77.29524796030913!3d28.587823577313883!2m3!1f0!2f0!3f0!3m2!1i1024!2i777!4f13.1!3m3!1m2!1s0x390d04b806950275%3A0x86e6859546059d3e!2sTB%20Clinic!5e0!3m2!1sen!2sin'
  },
  {
   branchName: 'Tigri Branch',
   addressLine: 'A Block 111, 112, 113 Ground floor Bank Road JJ Colony Tigri, New Delhi 110080',
   mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.393457591605!2d77.29524796030913!3d28.587823577313883!2m3!1f0!2f0!3f0!3m2!1i1024!2i777!4f13.1!3m3!1m2!1s0x390ce5001a143a87%3A0xb8b2668120a206af!2sTBclinic.in!5e0!3m2!1sen!2sin'
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