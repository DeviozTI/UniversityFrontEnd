import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isOpen = false;

  toggle(event: Event) {
    event.stopPropagation(); 
    this.isOpen = !this.isOpen;
  }

  close() {
    this.isOpen = false;
}

isHovered = false;

onMouseOver() {
  this.isHovered = true;
}

onMouseOut() {
  this.isHovered = false;
}

@HostListener('document:click', ['$event'])
onDocumentClick(event: Event): void {
  const offCanvasElement = document.querySelector('.off-canvas');
  if (offCanvasElement && this.isOpen && !offCanvasElement.contains(event.target as Node)) {
      this.close();
  }
}

}
