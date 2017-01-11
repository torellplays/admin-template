import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Dashboard2Component } from './pages/dashboard/dashboard2.component';
import { WidgetsComponent } from './pages/widgets.component';
import { DataTablesComponent } from './pages/tables/data-tables.component';
import { SimpleTablesComponent } from './pages/tables/simple-tables.component';
import { TopNavComponent } from './pages/layout/top-nav.component';
import { BoxedComponent } from './pages/layout/boxed.component';
import { FixedComponent } from './pages/layout/fixed.component';
import { CollapsedSidebarComponent } from './pages/layout/collapsed-sidebar.component';
import { ChartjsComponent } from './pages/charts/chartjs.component';
import { MorrisComponent } from './pages/charts/morris.component';
import { FlotComponent } from './pages/charts/flot.component';
import { InlineComponent } from './pages/charts/inline.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { routing } from './app.routing';


@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, DashboardComponent, Dashboard2Component, WidgetsComponent,
                  DataTablesComponent, SimpleTablesComponent, TopNavComponent, BoxedComponent,
                  FixedComponent, CollapsedSidebarComponent, ChartjsComponent, MorrisComponent,
                  FlotComponent, InlineComponent, MainHeaderComponent, MainFooterComponent,
                  MainSidebarComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
