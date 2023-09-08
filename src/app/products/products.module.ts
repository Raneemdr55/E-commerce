import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProducteComponent } from './component/all-producte/all-producte.component';
import { ProductesDetailsComponent } from './component/productes-details/productes-details.component';



@NgModule({
  declarations: [
    AllProducteComponent,
    ProductesDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
