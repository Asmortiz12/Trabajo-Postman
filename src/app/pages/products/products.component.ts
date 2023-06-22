import { Component, OnInit  } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CreateProductDto, ProductModel, UpdateProductDto } from 'src/app/models/products.model';
@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductComponent implements OnInit {
  products:ProductModel[]=[];
  selectedProduct: UpdateProductDto ={title:'',price:0,description:''}
  // Inyeccion de dependencias, similar a instanciar un objeto
  constructor(private productService: ProductsService) {
   }

  // Método ngOnInit similar al constructur, se ejcuta después del constructor
  ngOnInit(): void {
    this.getProducts();
    //this.getProduct();
    //this.createProduct();
    // this.updateProduct();
    // this.deleteProduct();
  }

  getProducts() {
    // Peticion del API y esperando una respuesta
    // Para traer la data desde el backend
    // Suscribe para usar promesas y observables
    // Se recibe una peticion y se asigna una respuesta
    this.productService.getAll().subscribe(
      response => {
        this.products=response;
        console.log(response);
      });
  }

  getProduct(id:ProductModel['id']) {
    this.productService.getOne(id).subscribe(
      response => {
        console.log(response);
      });
  }

  // Crear product
  createProduct(product: CreateProductDto) {
    this.productService.store(product).subscribe(
      response => {
        console.log(response);
      });
  }

  // Actualizar product
  updateProduct(id: number, product: UpdateProductDto) {
    this.productService.update(id, product).subscribe(
      response => {
        console.log(response);
      });
  }
   editProduct(product:ProductModel){
    this.selectedProduct=product;
   }

  deleteProduct(id:ProductModel['id']) {
    this.productService.destroy(id).subscribe(
      response => {
        this.products = this.products.filter(product=>product.id !=id);
      });
  }


}