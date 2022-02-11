import { Component, OnInit } from '@angular/core';
import { Product } from '../product-create/product.model';
import { ProductService } from 'src/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product
  constructor(private productService: ProductService, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product=>{
      this.product=product
    })
  }
  deleteProduct(): void{
    const id= this.route.snapshot.paramMap.get('id')
    this.productService.delete(id).subscribe(()=>{
      this.productService.showMessage('Produto Apagado com sucesso!')
      this.router.navigate(['/products'])
    })
  }
  cancel():void{
    this.router.navigate(['/products'])
  }
}