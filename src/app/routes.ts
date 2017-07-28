import {Routes} from '@angular/router';
import {FirstTaskComponent} from './first-task/first-task.component';
import {SecondTaskComponent} from './second-task/second-task.component';
import {EditListComponent} from './second-task/edit-list/edit-list.component';

export const appRoutes: Routes = [
  { path: 'first', component: FirstTaskComponent },
  { path: 'list', component: SecondTaskComponent, children: [
    { path: 'add', component: EditListComponent },
    { path: 'edit/:id', component: EditListComponent }
  ] },
  { path: '', redirectTo: '/first', pathMatch: 'full' }
];
