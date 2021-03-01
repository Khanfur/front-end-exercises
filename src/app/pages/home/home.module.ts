import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@app-modules/shared/shared.module';

import { HomeComponent } from '@app-pages/home/home.component';

import { SinglePriceGridModule } from '@app-components/single-price-grid/single-price-grid.module';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        SinglePriceGridModule,
    ],
    declarations: [
        HomeComponent,
    ],
})
export class HomeModule {
}
