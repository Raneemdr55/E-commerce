import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProducteComponent } from './products/component/all-producte/all-producte.component';
import { ProductesDetailsComponent } from './products/component/productes-details/productes-details.component';
import { ProducteCartsComponent } from './carts/component/producte-carts/producte-carts.component';

const routes: Routes = [
  {path:"products",component:AllProducteComponent},
  {path:"detailes",component:ProductesDetailsComponent},
  {path:"cart", component:ProducteCartsComponent},
  {path:"**",redirectTo:"products",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
