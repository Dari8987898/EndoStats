import { Routes } from '@angular/router';

import { GmTableComponent } from './tables/gmtable.component';
import { HomeComponent } from './home/home.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'gmtable',
      component: GmTableComponent,
      title: 'Gruppi multidisciplinari'
    }
  ];
  
  export default routeConfig;