import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { routing } from './app.routing';


@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
