import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { CustomCoffeeComponent } from './components/custom-coffee/custom-coffee.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CoffeeComponent,
    CustomCoffeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
