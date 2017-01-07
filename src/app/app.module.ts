import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Dashboard2Component } from './pages/dashboard/dashboard2.component';
import { WidgetsComponent } from './pages/widgets.component';
import { DataTablesComponent } from './pages/tables/data-tables.component';
import { SimpleTablesComponent } from './pages/tables/simple-tables.component';
import { TopNavComponent } from './pages/layout/top-nav.component';
import { routing } from './app.routing';


@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, DashboardComponent, Dashboard2Component, WidgetsComponent,
                  DataTablesComponent, SimpleTablesComponent, TopNavComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
