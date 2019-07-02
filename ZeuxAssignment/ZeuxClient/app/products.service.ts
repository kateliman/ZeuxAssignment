﻿import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class ProductsService {
    private url = "/api/products";

    constructor(private http: HttpClient, private authService: AuthService) {
    }

    getAllProducts() {
        return this.http.get(this.url, {
            headers: this.authService.setAuthHeader()});
    }
}