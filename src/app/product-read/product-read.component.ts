import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product-create/product.model';
import { ProductService } from 'src/product.service';
import { MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns =['id', 'name','price', 'action']
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Product>;

 
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products=>{
      this.products = products
    })
  }


}
