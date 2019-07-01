import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AssetsComponent } from './assets.component';

@NgModule({
    imports: [CommonModule],
    exports: [
        RouterModule
    ],
    declarations: [
        AssetsComponent
    ]
})

export class AssetsModule { }