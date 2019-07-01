import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { ProductsService } from './products.service';
//import { Product } from './product';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    //providers: [ProductsService]
})
export class AppComponent /*implements OnInit */{
    public outlet: RouterOutlet;
    //get(outlet: RouterOutlet) {
    //    return outlet && outlet.activatedRouteData;
    //}
    //public products: Product[];
    //viewMode = 'All';

    //constructor(private productsService: ProductsService) { }

    //ngOnInit() {
    //    this.getProducts();
    //}
    
    //getProducts() {
    //    this.productsService.getAllProducts()
    //        .subscribe((data: Product[]) => this.products = data);
    //}
}