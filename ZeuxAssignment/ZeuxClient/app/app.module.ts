import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AssetsComponent } from './assets.component';
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
        OpportunitiesComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }