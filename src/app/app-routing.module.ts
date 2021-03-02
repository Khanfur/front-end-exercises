import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'pricing',
        loadChildren: () => import('./pages/pricing/pricing.module').then((m) => m.PricingModule),
    },
    {
        path: 'insure',
        loadChildren: () => import('./pages/insure/insure.module').then((m) => m.InsureModule),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }
