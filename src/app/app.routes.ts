import { Routes } from '@angular/router';
import { DistanceComponent } from './distance/distance.component';
import { SipComponent } from './sip/sip.component';
import { FdComponent } from './fd/fd.component';
import { RdComponent } from './rd/rd.component';

export const routes: Routes = [
  {
    path:'',
    component:DistanceComponent
  },
  {
    path:'sip',
    component:SipComponent
  },
  {
    path:'fd',
    component:FdComponent
  },
  {
    path:'rd',
    component:RdComponent
  },
  {
    path:'**',
    component:DistanceComponent
  }
];
