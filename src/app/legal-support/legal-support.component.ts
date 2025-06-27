import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-legal-support',
  standalone: true,
imports: [RouterLink, RouterOutlet],
  templateUrl: './legal-support.component.html',
  styleUrl: './legal-support.component.css'
})
export class LegalSupportComponent {

}
