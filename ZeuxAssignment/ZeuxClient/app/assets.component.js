"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const products_service_1 = require("./products.service");
const router_1 = require("@angular/router");
let AssetsComponent = class AssetsComponent {
    constructor(productsService, route) {
        this.productsService = productsService;
        this.route = route;
        this.viewMode = 'All';
    }
    ngOnInit() {
        this.route.paramMap.subscribe(() => {
            this.getProducts();
        });
    }
    getProducts() {
        this.productsService.getAllProducts()
            .subscribe((data) => this.products = data);
    }
};
AssetsComponent = __decorate([
    core_1.Component({
        templateUrl: './assets.component.html',
        providers: [products_service_1.ProductsService]
    }),
    __metadata("design:paramtypes", [products_service_1.ProductsService,
        router_1.ActivatedRoute])
], AssetsComponent);
exports.AssetsComponent = AssetsComponent;
//# sourceMappingURL=assets.component.js.map