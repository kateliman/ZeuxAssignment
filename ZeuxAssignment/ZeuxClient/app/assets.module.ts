import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AssetsComponent, SavingsComponent, P2PComponent, FundsComponent, AllComponent } from './assets.component';
//import { AssetsRoutingModule } from './assets-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        //AssetsRoutingModule,
        HttpClientModule,
        BrowserModule],
    exports: [
        RouterModule
    ],
    
    declarations: [
        AssetsComponent,
        AllComponent ,
        SavingsComponent,
        P2PComponent,
        FundsComponent
    ]
})

export class AssetsModule { }