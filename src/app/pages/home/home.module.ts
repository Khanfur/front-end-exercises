import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@app-modules/shared/shared.module';
import { HomeComponent } from '@app-pages/home/home.component';

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
    ],
    declarations: [
        HomeComponent,
    ],
})
export class HomeModule {
}
