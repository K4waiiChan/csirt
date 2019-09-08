import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsModule } from './reports/reports.module';
import { HomeComponent } from './home/home/home.component';
import { NavigationMenuComponent } from './navigation/navigation-menu/navigation-menu.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavigationModule } from './navigation/navigation.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    NavigationModule,
    ReportsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
