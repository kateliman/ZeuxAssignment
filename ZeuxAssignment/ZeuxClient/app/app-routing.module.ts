import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssetsComponent } from './assets.component';

const routes: Routes = [
    { path: 'assets', component: AssetsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }