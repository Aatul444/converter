import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';
@Component({
  selector: 'app-fd',
  templateUrl: './fd.component.html',
  styleUrls: ['./fd.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    AppComponent,
    CommonModule,
    FormsModule,
    NgChartsModule,
  ],
})
export class FdComponent implements OnInit {
  principal: number = 0;
  rate: number = 0;
  years: number = 0;
  interest: number = 0;
  totalAmount: number = 0;

  chartData: any = [
    {
      data: [this.principal, this.totalAmount - this.principal],
      label: 'Fixed Deposits',
      borderColor: 'black',
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
    },
  ];

  chartLabels: any = ['Deposit amount', 'Earning'];

  chartOptions: ChartOptions = {
    responsive: true,
  };

  chartColors: any = [
    {
      // backgroundColor: 'black',
      // borderColor: '#36A2EB',
      // borderWidth: 2,
    },
  ];

  chartType: ChartType = 'doughnut';

  constructor() {}

  ngOnInit() {}

  pinFormatter(value: number) {
    return `${value.toFixed(2)}`;
  }

  calculateInterest(): void {
    const interestAmount = (this.principal * this.rate * this.years) / 100;
    this.interest = Math.round(interestAmount);
    this.totalAmount = Math.round(this.principal + interestAmount);
    this.chartLabels[0] = `Deposit amount (${this.principal.toFixed(2)})`;
    this.chartLabels[1] = `Earning (${(this.totalAmount - this.principal).toFixed(2)})`;

  }
}
