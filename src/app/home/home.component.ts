import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule, RouterModule],
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
