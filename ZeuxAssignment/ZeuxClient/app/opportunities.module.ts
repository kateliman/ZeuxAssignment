import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OpportunitiesComponent } from './opportunities.component';
@NgModule({
    imports: [CommonModule],
    exports: [
        RouterModule
    ],
    declarations: [
        OpportunitiesComponent
    ]
})
export class OpportunitiesModule { }