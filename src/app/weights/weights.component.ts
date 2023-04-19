import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weights',
  templateUrl: './weights.component.html',
  styleUrls: ['./weights.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    AppComponent,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
})
export class WeightsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

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
}
