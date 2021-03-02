import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@app-modules/shared/shared.module';

import { InsureComponent } from '@app-pages/insure/insure.component';

const routes: Routes = [
    {
        path: '',
        component: InsureComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
    ],
    declarations: [
        InsureComponent,
    ],
})
export class InsureModule {
}
