import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { CustomCoffeeComponent } from './components/custom-coffee/custom-coffee.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { HttpClientModule } from '@angular/common/http';

// angular material components
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { CoffeeService } from './shared/services/coffee.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CoffeeComponent,
    CustomCoffeeComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [
    CoffeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
