import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { PagesComponent } from './layouts/pages/pages.component';

export const routes: Routes = [
    {
        path: '',
        component: BlankComponent,
        // component: KitchensinkComponent,
        children: [
            { path: '', loadChildren: () => import('./containers/landing/landing-container.module').then(m => m.LandingContainerModule) },
        ]
    },
    {
        path: '',
        component: PagesComponent,
        // component: KitchensinkComponent,
        children: [
            { path: 'home', loadChildren: () => import('./containers/home/home-container.module').then(m => m.HomeContainerModule) },
            { path: 'investments', loadChildren: () => import('./containers/investments/investments-container.module').then(m => m.InvestmentsContainerModule) },
            { path: 'checkout', loadChildren: () => import('./containers/checkout/checkout-container.module').then(m => m.CheckoutContainerModule) },
            { path: 'store', loadChildren: () => import('./containers/store/store-container.module').then(m => m.StoreContainerModule) },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules, // <- comment this line for activate lazy load
            relativeLinkResolution: 'legacy',
            initialNavigation: 'enabled', // for one load page, without reload
            // useHash: true
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }