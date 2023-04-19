import { Routes } from '@angular/router';
import { WeightsComponent } from './weights/weights.component';
import { DistanceComponent } from './distance/distance.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'weight',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path:'weight',
    component:WeightsComponent
  },
  {
    path:'distance',
    component:DistanceComponent
  }
];
