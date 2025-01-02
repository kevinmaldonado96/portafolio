import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent {
  constructor(private router: Router) {}

  redirectToUrl(url: string): void {
    window.open(url, '_blank'); 
  }

}
