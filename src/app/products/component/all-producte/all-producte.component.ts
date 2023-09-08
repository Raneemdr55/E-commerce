import { Component, OnInit } from '@angular/core';
import { ProductesService } from '../../services/productes.service';

@Component({
  selector: 'app-all-producte',
  templateUrl: './all-producte.component.html',
  styleUrls: ['./all-producte.component.scss']
})
export class AllProducteComponent implements OnInit{
  
  productes:any[] = []
  categories:any[] = []
  constructor(private services:ProductesService){}
  
  ngOnInit(): void {
    this.getproductes()
    this.getcategories()
    
    
    
  }
  getproductes(){
    this.services.getAllProducts().subscribe((res:any) =>{
      this.productes = res
      console.log(res)
  
    },    error =>
    {
     alert(error)
    })
  }
  getcategories(){
    this.services.getAllcategories().subscribe((res:any) =>{
      this.categories = res
      console.log(res)
  
    },    error =>
    {
     alert(error)
    })
  }
  Filtercategory(event:any){
    let value = event.target.value;
    this.getproductsCategory(value)

  
  }
  getproductsCategory(keyword:string){
    this.services.getAllProductsBycategory(keyword).subscribe((res:any) =>{
      this.productes = res

    })
  }

}

