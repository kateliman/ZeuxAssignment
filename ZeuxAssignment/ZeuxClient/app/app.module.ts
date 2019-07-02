import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AssetsComponent, SavingsComponent, P2PComponent, FundsComponent, AllComponent } from './assets.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { OpportunitiesComponent } from './opportunities.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        AssetsComponent,
        AllComponent,
        SavingsComponent,
        P2PComponent,
        FundsComponent,
        OpportunitiesComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }