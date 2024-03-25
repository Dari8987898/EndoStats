import { Routes } from '@angular/router';

import { GmTableComponent } from './tables/gruppo-multidisciplinare/gm-table.component';
import { HomeComponent } from './home/home.component';
import { DaDecidereTableComponent } from './tables/da-decidere/da-decidere-table.component';
import { AmbulatorioTableComponent } from './tables/ambulatorio/ambulatorio-table.component';
import { DetailComponent } from './details/detail.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'gm-table',
      component: GmTableComponent,
      title: 'Gruppi multidisciplinari'
    },
    {
      path: 'ambulatorio-table',
      component: AmbulatorioTableComponent,
      title: 'Ambulatorio'
    },
    {
      path: 'da-decidere-table',
      component: DaDecidereTableComponent,
      title: '(?)'
    },
    {
      path: 'detail/:id',
      component: DetailComponent,
      title: "Dettaglio"
    }
  ];
  
  export default routeConfig;