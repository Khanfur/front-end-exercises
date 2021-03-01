import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@app-modules/shared/shared.module';

import { PricingComponent } from '@app-pages/pricing/pricing.component';

const routes: Routes = [
    {
        path: '',
        component: PricingComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
    ],
    declarations: [
        PricingComponent,
    ],
})
export class PricingModule {
}
