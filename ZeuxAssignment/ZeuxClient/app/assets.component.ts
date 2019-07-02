import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';

@Component({

    templateUrl: './assets.component.html',
})
export class AssetsComponent {
}

@Component({

    templateUrl: './product-list.html',
    providers: [ProductsService, AuthService]
})
export class AllComponent implements OnInit {
    public outlet: RouterOutlet;
    public products: Product[];

    constructor(
        private productsService: ProductsService,
        private route: ActivatedRoute, ) { }

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

@Component({

    template: '<p>savings</p>'
})
export class SavingsComponent { }


@Component({
    template: '<p>p2p</p>',
})
export class P2PComponent { }


@Component({
    template: '<p>funds</p>',
})
export class FundsComponent { }
