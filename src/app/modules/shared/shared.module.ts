import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UiComponentsModule } from '@app-components/ui/ui.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UiComponentsModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        UiComponentsModule,
    ],
})
export class SharedModule {
}
