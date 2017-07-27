import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FirstTaskComponent } from './first-task/first-task.component';
import { SecondTaskComponent } from './second-task/second-task.component';
import {StorageService} from './second-task/storage.service';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FirstTaskComponent,
    SecondTaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
