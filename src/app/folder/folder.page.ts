import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    AppComponent,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
})
export class FolderPage implements OnInit {
  measures: any[] = [];
  xses: any = [
    {
      unit: 'km',
      isActive: false,
    },
    {
      unit: 'km',
      isActive: false,
    },
  ];
  yses: any = [];
  constructor(private http: HttpClient) {
    // this.allMeasures();
  }
  meter = 0;
  kilometer = 0;
  hectometer = 0;
  decameter = 0;
  decimeter = 0;
  centimeter = 0;
  feet=0;
  cm: number = 0;
  yard=0;
  mile=0;
  
  ngOnInit() {}

  allMeasures() {
    this.measures = [];
    console.log('hola convertor');
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f06b024fa8msh675e2c5ece80f77p18c9e9jsn12a7af3ce2c2',
        'X-RapidAPI-Host': 'measurement-unit-converter.p.rapidapi.com',
      },
    };
    this.http
      .get(
        'https://measurement-unit-converter.p.rapidapi.com/measurements',
        options
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          this.measures = res;
          res.forEach((str: any) => {
            const data = {
              name: str,
              isActive: false,
            };
            this.measures.push(data);
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  selectMeasure(measure: any) {
    this.measures.forEach((e) => {
      e.isActive = false;
    });
    measure.isActive = true;
  }
}
