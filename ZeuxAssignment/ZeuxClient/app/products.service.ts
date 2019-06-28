import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {

    private url = "/api/products";

    constructor(private http: HttpClient) {
    }

    getAllProducts() {
        return this.http.get(this.url);
    }
}