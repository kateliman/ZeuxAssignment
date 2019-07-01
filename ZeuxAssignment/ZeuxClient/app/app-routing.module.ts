import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssetsComponent } from './assets.component';
import { OpportunitiesComponent } from './opportunities.component';

const routes: Routes = [
    { path: 'assets', component: AssetsComponent },
    { path: 'opportunities', component: OpportunitiesComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }