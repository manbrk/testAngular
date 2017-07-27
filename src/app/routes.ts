import {Routes} from '@angular/router';
import {FirstTaskComponent} from './first-task/first-task.component';
import {SecondTaskComponent} from './second-task/second-task.component';

export const appRoutes: Routes = [
  { path: 'first', component: FirstTaskComponent },
  { path: 'list', component: SecondTaskComponent },
  { path: 'list/add', component: SecondTaskComponent },
  { path: 'list/edit/:id', component: SecondTaskComponent },
  { path: '', redirectTo: '/first', pathMatch: 'full' }
];
