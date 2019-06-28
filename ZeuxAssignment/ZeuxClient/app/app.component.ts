import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [ProductsService]
})
export class AppComponent implements OnInit {

    public products: Product[];

    constructor(private productsService: ProductsService) { }

    ngOnInit() {
        this.getProducts();
    }
    
    getProducts() {
        this.productsService.getAllProducts()
            .subscribe((data: Product[]) => this.products = data);
    }
}