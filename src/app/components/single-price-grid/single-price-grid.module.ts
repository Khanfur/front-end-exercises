import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SinglePriceGridComponent } from '@app-components/single-price-grid/single-price-grid.component';

@NgModule({
    declarations: [
        SinglePriceGridComponent,
    ],
    exports: [
        SinglePriceGridComponent,
    ],
    imports: [
        CommonModule,
    ],
})
export class SinglePriceGridModule {
}
