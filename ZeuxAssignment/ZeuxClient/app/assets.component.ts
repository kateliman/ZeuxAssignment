import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product';
import { ActivatedRoute } from '@angular/router';

@Component({
    
    templateUrl: './assets.component.html',
    providers: [ProductsService]
})
export class AssetsComponent implements OnInit {

    public products: Product[];
    viewMode = 'All';

    constructor(
        private productsService: ProductsService,
        private route: ActivatedRoute,) { }

    ngOnInit() {
        this.route.paramMap.subscribe(
            () => {
                this.getProducts();
            });
        
    }

    getProducts() {
        this.productsService.getAllProducts()
            .subscribe((data: Product[]) => this.products = data);
    }
}