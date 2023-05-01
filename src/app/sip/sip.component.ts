import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-sip',
  templateUrl: './sip.component.html',
  styleUrls: ['./sip.component.scss'],
  standalone: true,
  imports: [IonicModule, AppComponent, CommonModule, FormsModule,NgChartsModule],
})
export class SipComponent implements OnInit {
  monthlySipAmount = 0;
  interestRate = 0;
  investmentPeriodInYear = 0;
  maturityAmount=0;

  constructor() {}

  ngOnInit() {}

  // measures: any[] = [
  //   {
  //     name: 'SIP',
  //     isActive: true,
  //   },
  //   {
  //     name: 'Lumpsum',
  //     isActive: false,
  //   },
  // ];
  // selectMeasure(measure: any) {
  //   this.measures.forEach((mes) => {
  //     mes.isActive = false;
  //   });
  //   measure.isActive = true;
  //   if (measure.name === 'SIP') {
  //     this.sipCalculator(this.monthlySipAmount,this.interestRate,this.investmentPeriodInMonths);
  //   }else{
  //     this.sipCalculator(this.monthlySipAmount,this.interestRate,this.investmentPeriodInMonths);
  //   }
  // }

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

  pinFormatter(value: number) {
    return `${value.toFixed(2)}`;
  }

  sipCalculator(
    monthlySipAmount: number,
    interestRate: number,
    investmentPeriodInMonths: number
  ) {
    let maturityAmount = 0;
    this.maturityAmount = 0;
    for (let i = 1; i <= (investmentPeriodInMonths*12); i++) {
      const monthlyInterestRate = (interestRate/100) / 12;
      const monthlyInterest = maturityAmount * monthlyInterestRate;
      maturityAmount =
        (monthlySipAmount + maturityAmount) * (1 + monthlyInterestRate);
    }

    this.maturityAmount = Number(maturityAmount.toFixed(2));
  }
  chartData: any = [
    {
      data: [this.monthlySipAmount*12, Number(this.maturityAmount)-this.monthlySipAmount*12],
      label: 'Fixed Deposits',
      borderColor: 'black',
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
    },
  ];
}