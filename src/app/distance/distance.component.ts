import { FormsModule } from '@angular/forms';
import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    AppComponent,
    CommonModule,
    FormsModule,
  ],
})
export class DistanceComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  inputValue = 0;
  outputValue = 0;
  fromUnit = 'meters';
  toUnit = 'feet';

  convert() {
    switch (this.fromUnit) {
      case 'meters':
        switch (this.toUnit) {
          case 'meters':
            this.outputValue = this.inputValue;
            break;
          case 'feet':
            this.outputValue = this.inputValue * 3.28084;
            break;
          case 'inches':
            this.outputValue = this.inputValue * 39.3701;
            break;
        }
        break;
      case 'feet':
        switch (this.toUnit) {
          case 'meters':
            this.outputValue = this.inputValue * 0.3048;
            break;
          case 'feet':
            this.outputValue = this.inputValue;
            break;
          case 'inches':
            this.outputValue = this.inputValue * 12;
            break;
        }
        break;
      case 'inches':
        switch (this.toUnit) {
          case 'meters':
            this.outputValue = this.inputValue * 0.0254;
            break;
          case 'feet':
            this.outputValue = this.inputValue * 0.0833333;
            break;
          case 'inches':
            this.outputValue = this.inputValue;
            break;
        }
        break;
    }
  }
}
