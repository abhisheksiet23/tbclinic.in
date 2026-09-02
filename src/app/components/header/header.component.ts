// src/app/components/header/header.component.ts

import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('menuToggle') menuToggle!: ElementRef<HTMLInputElement>;

  constructor() {}

  // Close mobile menu
  closeMenu(): void {
    if (this.menuToggle) {
      this.menuToggle.nativeElement.checked = false;
    }
  }

  onHelplineClick(): void {
    window.location.href = 'tel:+919218026183';
  }
}