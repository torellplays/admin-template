import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule }   from '@angular/router';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
