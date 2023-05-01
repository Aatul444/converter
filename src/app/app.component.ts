import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
    { title: 'Distance', url: '', icon: 'mail' },
    { title: 'Weight', url: '/weight', icon: 'paper-plane' },
    { title: 'Distant', url: '/distance', icon: 'heart' },
  ];
  
  constructor() {}
 
}
