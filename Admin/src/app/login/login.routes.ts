import { BarrelComponent } from './barrel.component';

export const routes = [
  { path: '', children: [
    { path: '', component: BarrelComponent }
   
  ]},
];
