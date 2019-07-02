import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssetsComponent, SavingsComponent, P2PComponent, FundsComponent, AllComponent } from './assets.component';
import { OpportunitiesComponent } from './opportunities.component';

const routes: Routes = [
    {
        path: 'assets',
        component: AssetsComponent,
        children: [
            {
                path: '',
                redirectTo:'all',
                pathMatch: 'full'
            },
            {
                path: 'all',
                component: AllComponent,
            },
            {
                path: 'savings',
                component: SavingsComponent,
            },
            {
                path: 'p2p',
                component: P2PComponent,
            },
            {
                path: 'funds',
                component: FundsComponent,
            }
        ]
    },
    { path: 'opportunities', component: OpportunitiesComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }