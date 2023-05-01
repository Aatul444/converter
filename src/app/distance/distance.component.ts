import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.scss'],
  standalone: true,
  imports: [IonicModule, AppComponent, CommonModule, FormsModule],
})
export class DistanceComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  inputValue = 0;
  outputValue = 0;
  fromUnit = 'meters';
  toUnit = 'feet';
  selectedMeasure: any = {
    name: 'Length',
    isActive: true,
    title: 'Basic Distance System',
    units: [],
  };
  measures: any[] = [
    {
      name: 'Length',
      isActive: true,
      title: 'Basic Distance System',
      units: [],
    },
    {
      name: 'Area',
      isActive: false,
      title: 'Basic Area System',
      units: [
        { unit: 'mm2', name: 'Milimeter' },
        { unit: 'cm2', name: 'Centimeter' },
        { unit: 'dm2', name: 'decameter' },
        { unit: 'm2', name: 'meter' },
        { unit: 'in2', name: 'inch' },
      ],
    },
    {
      name: 'Weight',
      isActive: false,
      title: 'Basic Weights System',
      units: [],
    },
    {
      name: 'Volume',
      isActive: false,
      title: 'Basic Volume System',
      units: [
        {unit: 'ml', name: 'Mililitre'},
        {unit: 'cl', name: 'Centilitre'},
        {unit: 'dl', name: 'Decilitre'},
        {unit: 'mm3', name: 'Milimeter'},
        {unit: 'm3', name: 'Meter'},
      ],
    },
  ];
  weightUnits: any[] = [
    {
      unit: 'ug',
      name: 'Microgram',
    },
    {
      unit: 'mg',
      name: 'Milligram',
    },
    {
      unit: 'g',
      name: 'Gram',
    },
    {
      unit: 'kg',
      name: 'Kilogram',
    },
    {
      unit: 'lb',
      name: 'Pound',
    },
    {
      unit: 'oz',
      name: 'Ounce',
    },
    {
      unit: 'grain',
      name: '',
    },
    {
      unit: 'tonne',
      name: 'Microgram',
    },
    {
      unit: 'ton',
      name: '',
    },
    {
      unit: 'stone',
      name: '',
    },
  ];
  selectMeasure(measure: any) {
    this.measures.forEach((e) => {
      e.isActive = false;
    });
    measure.isActive = true;
    this.selectedMeasure = measure;
  }

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

  unit1 = '';
  unit2 = '';
  val1 = 0;
  val2 = 0;
  onUnit1Change(e: any) {
    this.unit1 = e.target.value;
    this.calculation(this.unit1, this.unit2);
  }
  onUnit2Change(e: any) {
    this.unit2 = e.target.value;
    this.calculation(this.unit1, this.unit2);
  }
  calculation(unit1: string, unit2: string) {
    if (unit1 === 'ug' && unit2 === 'ug') {
      this.val2 = this.val1;
    } else if (unit1 === 'ug' && unit2 === 'mg') {
      this.val2 = this.val1 / 1000;
    } else if (unit1 === 'ug' && unit2 === 'g') {
      this.val2 = this.val1 / 1000000;
    } else if (unit1 === 'ug' && unit2 === 'kg') {
      this.val2 = this.val1 / 1e9;
    } else if (unit1 === 'ug' && unit2 === 'lb') {
      this.val2 = this.val1 / 2.2046e9;
    } else if (unit1 === 'ug' && unit2 === 'oz') {
      this.val2 = this.val1 / 3.5274e8;
    } else if (unit1 === 'ug' && unit2 === 'grain') {
      this.val2 = this.val1 / 64800;
    } else if (unit1 === 'ug' && unit2 === 'tonne') {
      this.val2 = this.val1 / 1e6;
    } else if (unit1 === 'ug' && unit2 === 'ton') {
      this.val2 = this.val1 / 9.072e11;
    } else if (unit1 === 'ug' && unit2 === 'stone') {
      this.val2 = this.val1 / 6.35e9;
    } else if (unit1 === 'mg' && unit2 === 'ug') {
      this.val2 = this.val1 * 1000;
    } else if (unit1 === 'mg' && unit2 === 'mg') {
      this.val2 = this.val1;
    } else if (unit1 === 'mg' && unit2 === 'g') {
      this.val2 = this.val1 / 1000;
    } else if (unit1 === 'mg' && unit2 === 'kg') {
      this.val2 = this.val1 / 1000000;
    } else if (unit1 === 'mg' && unit2 === 'lb') {
      this.val2 = this.val1 / 453600;
    } else if (unit1 === 'mg' && unit2 === 'oz') {
      this.val2 = this.val1 / 28350;
    } else if (unit1 === 'mg' && unit2 === 'grain') {
      this.val2 = this.val1 / 64.799;
    } else if (unit1 === 'mg' && unit2 === 'tonne') {
      this.val2 = this.val1 / 1e9;
    } else if (unit1 === 'mg' && unit2 === 'ton') {
      this.val2 = this.val1 / 9.072e8;
    } else if (unit1 === 'mg' && unit2 === 'stone') {
      this.val2 = this.val1 / 6.35e6;
    } else if (unit1 === 'g' && unit2 === 'ug') {
      this.val2 = this.val1 * 1e6;
    } else if (unit1 === 'g' && unit2 === 'mg') {
      this.val2 = this.val1 * 1000;
    } else if (unit1 === 'g' && unit2 === 'g') {
      this.val2 = this.val1;
    } else if (unit1 === 'g' && unit2 === 'kg') {
      this.val2 = this.val1 / 1000;
    } else if (unit1 === 'g' && unit2 === 'lb') {
      this.val2 = this.val1 / 453.6;
    } else if (unit1 === 'g' && unit2 === 'oz') {
      this.val2 = this.val1 / 28.35;
    } else if (unit1 === 'g' && unit2 === 'grain') {
      this.val2 = this.val1 * 15.432;
    } else if (unit1 === 'g' && unit2 === 'tonne') {
      this.val2 = this.val1 / 1000000;
    } else if (unit1 === 'g' && unit2 === 'ton') {
      this.val2 = this.val1 / 907200;
    } else if (unit1 === 'g' && unit2 === 'stone') {
      this.val2 = this.val1 / 6350;
    } else if (unit1 === 'kg' && unit2 === 'ug') {
      this.val2 = this.val1 * 1e9;
    } else if (unit1 === 'kg' && unit2 === 'mg') {
      this.val2 = this.val1 * 1e6;
    } else if (unit1 === 'kg' && unit2 === 'g') {
      this.val2 = this.val1 * 1000;
    } else if (unit1 === 'kg' && unit2 === 'kg') {
      this.val2 = this.val1;
    } else if (unit1 === 'kg' && unit2 === 'lb') {
      this.val2 = this.val1 * 2.205;
    } else if (unit1 === 'kg' && unit2 === 'oz') {
      this.val2 = this.val1 * 35.274;
    } else if (unit1 === 'kg' && unit2 === 'grain') {
      this.val2 = this.val1 * 15430;
    } else if (unit1 === 'kg' && unit2 === 'tonne') {
      this.val2 = this.val1 / 1000;
    } else if (unit1 === 'kg' && unit2 === 'ton') {
      this.val2 = this.val1 / 907.2;
    } else if (unit1 === 'kg' && unit2 === 'stone') {
      this.val2 = this.val1 / 6.35;
    } else if (unit1 === 'lb' && unit2 === 'ug') {
      this.val2 = this.val1 * 4.536e8;
    } else if (unit1 === 'lb' && unit2 === 'mg') {
      this.val2 = this.val1 * 453600;
    } else if (unit1 === 'lb' && unit2 === 'g') {
      this.val2 = this.val1 * 453.6;
    } else if (unit1 === 'lb' && unit2 === 'kg') {
      this.val2 = this.val1 / 2.205;
    } else if (unit1 === 'lb' && unit2 === 'lb') {
      this.val2 = this.val1;
    } else if (unit1 === 'lb' && unit2 === 'oz') {
      this.val2 = this.val1 * 16;
    } else if (unit1 === 'lb' && unit2 === 'grain') {
      this.val2 = this.val1 * 7000;
    } else if (unit1 === 'lb' && unit2 === 'tonne') {
      this.val2 = this.val1 / 2205;
    } else if (unit1 === 'lb' && unit2 === 'ton') {
      this.val2 = this.val1 / 2000;
    } else if (unit1 === 'lb' && unit2 === 'stone') {
      this.val2 = this.val1 / 14;
    } else if (unit1 === 'oz' && unit2 === 'ug') {
      this.val2 = this.val1 * 2.835e7;
    } else if (unit1 === 'oz' && unit2 === 'mg') {
      this.val2 = this.val1 * 28350;
    } else if (unit1 === 'oz' && unit2 === 'g') {
      this.val2 = this.val1 * 28.35;
    } else if (unit1 === 'oz' && unit2 === 'kg') {
      this.val2 = this.val1 / 35.274;
    } else if (unit1 === 'oz' && unit2 === 'lb') {
      this.val2 = this.val1 / 16;
    } else if (unit1 === 'oz' && unit2 === 'oz') {
      this.val2 = this.val1;
    } else if (unit1 === 'oz' && unit2 === 'grain') {
      this.val2 = this.val1 * 437.5;
    } else if (unit1 === 'oz' && unit2 === 'tonne') {
      this.val2 = this.val1 / 35270;
    } else if (unit1 === 'oz' && unit2 === 'ton') {
      this.val2 = this.val1 / 32000;
    } else if (unit1 === 'oz' && unit2 === 'stone') {
      this.val2 = this.val1 / 224;
    } else if (unit1 === 'grain' && unit2 === 'ug') {
      this.val2 = this.val1 * 64800;
    } else if (unit1 === 'grain' && unit2 === 'mg') {
      this.val2 = this.val1 * 64.799;
    } else if (unit1 === 'grain' && unit2 === 'g') {
      this.val2 = this.val1 / 15.432;
    } else if (unit1 === 'grain' && unit2 === 'kg') {
      this.val2 = this.val1 / 15430;
    } else if (unit1 === 'grain' && unit2 === 'lb') {
      this.val2 = this.val1 / 7000;
    } else if (unit1 === 'grain' && unit2 === 'oz') {
      this.val2 = this.val1 / 437.5;
    } else if (unit1 === 'grain' && unit2 === 'grain') {
      this.val2 = this.val1;
    } else if (unit1 === 'grain' && unit2 === 'tonne') {
      this.val2 = this.val1 / 1.543e7;
    } else if (unit1 === 'grain' && unit2 === 'ton') {
      this.val2 = this.val1 / 1.4e7;
    } else if (unit1 === 'grain' && unit2 === 'stone') {
      this.val2 = this.val1 / 98000;
    } else if (unit1 === 'tonne' && unit2 === 'ug') {
      this.val2 = this.val1 * 1e12;
    } else if (unit1 === 'tonne' && unit2 === 'mg') {
      this.val2 = this.val1 * 1e9;
    } else if (unit1 === 'tonne' && unit2 === 'g') {
      this.val2 = this.val1 * 1e6;
    } else if (unit1 === 'tonne' && unit2 === 'kg') {
      this.val2 = this.val1 * 1000;
    } else if (unit1 === 'tonne' && unit2 === 'lb') {
      this.val2 = this.val1 * 2205;
    } else if (unit1 === 'tonne' && unit2 === 'oz') {
      this.val2 = this.val1 * 35270;
    } else if (unit1 === 'tonne' && unit2 === 'grain') {
      this.val2 = this.val1 * 1.543e7;
    } else if (unit1 === 'tonne' && unit2 === 'tonne') {
      this.val2 = this.val1;
    } else if (unit1 === 'tonne' && unit2 === 'ton') {
      this.val2 = this.val1 * 1.102;
    } else if (unit1 === 'tonne' && unit2 === 'stone') {
      this.val2 = this.val1 * 157.5;
    } else if (unit1 === 'ton' && unit2 === 'ug') {
      this.val2 = this.val1 * 9.072e11;
    } else if (unit1 === 'ton' && unit2 === 'mg') {
      this.val2 = this.val1 * 9.072e8;
    } else if (unit1 === 'ton' && unit2 === 'g') {
      this.val2 = this.val1 * 907200;
    } else if (unit1 === 'ton' && unit2 === 'kg') {
      this.val2 = this.val1 * 907.2;
    } else if (unit1 === 'ton' && unit2 === 'lb') {
      this.val2 = this.val1 * 2000;
    } else if (unit1 === 'ton' && unit2 === 'oz') {
      this.val2 = this.val1 * 32000;
    } else if (unit1 === 'ton' && unit2 === 'grain') {
      this.val2 = this.val1 * 1.4e7;
    } else if (unit1 === 'ton' && unit2 === 'tonne') {
      this.val2 = this.val1 / 1.102;
    } else if (unit1 === 'ton' && unit2 === 'ton') {
      this.val2 = this.val1;
    } else if (unit1 === 'ton' && unit2 === 'stone') {
      this.val2 = this.val1 * 157.5;
    } else if (unit1 === 'stone' && unit2 === 'ug') {
      this.val2 = this.val1 * 6.35e9;
    } else if (unit1 === 'stone' && unit2 === 'mg') {
      this.val2 = this.val1 * 6.35e6;
    } else if (unit1 === 'stone' && unit2 === 'g') {
      this.val2 = this.val1 * 6350;
    } else if (unit1 === 'stone' && unit2 === 'kg') {
      this.val2 = this.val1 * 6.35;
    } else if (unit1 === 'stone' && unit2 === 'lb') {
      this.val2 = this.val1 * 14;
    } else if (unit1 === 'stone' && unit2 === 'oz') {
      this.val2 = this.val1 * 224;
    } else if (unit1 === 'stone' && unit2 === 'grain') {
      this.val2 = this.val1 * 98000;
    } else if (unit1 === 'stone' && unit2 === 'tonne') {
      this.val2 = this.val1 / 157.5;
    } else if (unit1 === 'stone' && unit2 === 'ton') {
      this.val2 = this.val1 / 142.9;
    } else if (unit1 === 'stone' && unit2 === 'stone') {
      this.val2 = this.val1;
    }
  }

  inputAreaValue: number = 0;
  fromAreaUnit: string = '';
  outputAreaValue: number = 0;
  toAreaUnit: string = '';

  convertArea() {
    console.log('dood');
    console.log(this.fromAreaUnit);
    switch (this.fromAreaUnit) {
      case 'mm2':
        switch (this.toAreaUnit) {
          case 'mm2':
            this.outputAreaValue = this.inputAreaValue;
            break;
          case 'cm2':
            this.outputAreaValue = this.inputAreaValue / 100;
            break;
          case 'dm2':
            this.outputAreaValue = this.inputAreaValue / 10000;
            break;
          case 'm2':
            this.outputAreaValue = this.inputAreaValue / 1e6;
            break;
          case 'in2':
            this.outputAreaValue = this.inputAreaValue / 645.2;
            break;
        }
        break;
      case 'cm2':
        switch (this.toAreaUnit) {
          case 'mm2':
            this.outputAreaValue = this.inputAreaValue * 100;
            break;
          case 'cm2':
            this.outputAreaValue = this.inputAreaValue;
            break;
          case 'dm2':
            this.outputAreaValue = this.inputAreaValue / 100;
            break;
          case 'm2':
            this.outputAreaValue = this.inputAreaValue / 10000;
            break;
          case 'in2':
            this.outputAreaValue = this.inputAreaValue / 6.452;
            break;
        }
        break;
      case 'dm2':
        switch (this.toAreaUnit) {
          case 'mm2':
            this.outputAreaValue = this.inputAreaValue * 10000;
            break;
          case 'cm2':
            this.outputAreaValue = this.inputAreaValue * 100;
            break;
          case 'dm2':
            this.outputAreaValue = this.inputAreaValue;
            break;
          case 'm2':
            this.outputAreaValue = this.inputAreaValue / 100;
            break;
          case 'in2':
            this.outputAreaValue = this.inputAreaValue * 15.5;
            break;
        }
        break;
      case 'm2':
        switch (this.toAreaUnit) {
          case 'mm2':
            this.outputAreaValue = this.inputAreaValue * 1e6;
            break;
          case 'cm2':
            this.outputAreaValue = this.inputAreaValue * 10000;
            break;
          case 'dm2':
            this.outputAreaValue = this.inputAreaValue * 100;
            break;
          case 'm2':
            this.outputAreaValue = this.inputAreaValue;
            break;
          case 'in2':
            this.outputAreaValue = this.inputAreaValue * 1550;
            break;
        }
        break;
      case 'in2':
        switch (this.toAreaUnit) {
          case 'mm2':
            this.outputAreaValue = this.inputAreaValue * 645.2;
            break;
          case 'cm2':
            this.outputAreaValue = this.inputAreaValue * 6.452;
            break;
          case 'dm2':
            this.outputAreaValue = this.inputAreaValue / 15.5;
            break;
          case 'm2':
            this.outputAreaValue = this.inputAreaValue / 1550;
            break;
          case 'in2':
            this.outputAreaValue = this.inputAreaValue;
            break;
        }
        break;
    }
  }

  inputVolumeValue: number = 0;
  fromVolumeUnit: string = '';
  outputVolumeValue: number = 0;
  toVolumeUnit: string = '';

  convertVolume() {
    switch (this.fromVolumeUnit) {
      case 'ml':
        switch (this.toVolumeUnit) {
          case 'ml':
            this.outputVolumeValue = this.inputVolumeValue;
            break;
          case 'cl':
            this.outputVolumeValue = this.inputVolumeValue / 10;
            break;
          case 'dl':
            this.outputVolumeValue = this.inputVolumeValue / 100;
            break;
          case 'mm3':
            this.outputVolumeValue = this.inputVolumeValue / 1000;
            break;
          case 'm3':
            this.outputVolumeValue = this.inputVolumeValue / 1e6;
            break;
        }
        break;
        case 'cl':
        switch (this.toVolumeUnit) {
          case 'ml':
            this.outputVolumeValue = this.inputVolumeValue*10;
            break;
          case 'cl':
            this.outputVolumeValue = this.inputVolumeValue;
            break;
          case 'dl':
            this.outputVolumeValue = this.inputVolumeValue / 10;
            break;
          case 'mm3':
            this.outputVolumeValue = this.inputVolumeValue *10000;
            break;
          case 'm3':
            this.outputVolumeValue = this.inputVolumeValue / 100000;
            break;
        }
        break;
        case 'dl':
        switch (this.toVolumeUnit) {
          case 'ml':
            this.outputVolumeValue = this.inputVolumeValue*100;
            break;
          case 'cl':
            this.outputVolumeValue = this.inputVolumeValue * 10;
            break;
          case 'dl':
            this.outputVolumeValue = this.inputVolumeValue;
            break;
          case 'mm3':
            this.outputVolumeValue = this.inputVolumeValue *100000;
            break;
          case 'm3':
            this.outputVolumeValue = this.inputVolumeValue / 10000;
            break;
        }
        break;
        case 'mm3':
        switch (this.toVolumeUnit) {
          case 'ml':
            this.outputVolumeValue = this.inputVolumeValue/1000;
            break;
          case 'cl':
            this.outputVolumeValue = this.inputVolumeValue / 10000;
            break;
          case 'dl':
            this.outputVolumeValue = this.inputVolumeValue / 100000;
            break;
          case 'mm3':
            this.outputVolumeValue = this.inputVolumeValue;
            break;
          case 'm3':
            this.outputVolumeValue = this.inputVolumeValue / 1e9
            break;
        }
        break;
        case 'm3':
        switch (this.toVolumeUnit) {
          case 'ml':
            this.outputVolumeValue = this.inputVolumeValue/1e6
            break;
          case 'cl':
            this.outputVolumeValue = this.inputVolumeValue * 100000;
            break;
          case 'dl':
            this.outputVolumeValue = this.inputVolumeValue * 10000;
            break;
          case 'mm3':
            this.outputVolumeValue = this.inputVolumeValue * 1e9
            break;
          case 'm3':
            this.outputVolumeValue = this.inputVolumeValue;
            break;
        }
        break;
    }
  }
}
