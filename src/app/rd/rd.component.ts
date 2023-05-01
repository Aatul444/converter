import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';
@Component({
  selector: 'app-rd',
  templateUrl: './rd.component.html',
  styleUrls: ['./rd.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    AppComponent,
    CommonModule,
    FormsModule,
    NgChartsModule,
  ],
})
export class RdComponent implements OnInit {
  depositAmount: number = 0;
  interestRate: number = 0;
  tenure: number = 0;
  maturityAmount: number = 0;

  chartData: any = [
    {
      data: [this.depositAmount, this.depositAmount - this.maturityAmount],
      label: 'Fixed Deposits',
      // borderColor: 'black',
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
    },
  ];

  chartLabels: any = ['Deposit amount', 'Maturity amount'];

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

  calculateMaturityAmount(): void {
    let monthlyInterestRate = this.interestRate / 1200;
    let numberOfMonths = this.tenure * 12;

    this.maturityAmount =
      ((this.depositAmount *
        (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1)) /
        monthlyInterestRate) *
      (1 + monthlyInterestRate);
    this.chartData[0].data = [
      this.depositAmount,
      this.depositAmount - this.maturityAmount,
    ];
    this.chartLabels[0] = `Deposit amount (${this.depositAmount.toFixed(2)})`;
    this.chartLabels[1] = `Maturity amount (${this.maturityAmount.toFixed(2)})`;
  }
}
