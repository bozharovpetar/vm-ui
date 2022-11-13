import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { CustomCoffeeComponent } from './components/custom-coffee/custom-coffee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

const routes: Routes = [
  { path: 'pick-coffee', component: CoffeeComponent },
  { path: 'create-custom-coffee', component: CustomCoffeeComponent },
  { path: 'order/:orderId', component: OrderDetailsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
