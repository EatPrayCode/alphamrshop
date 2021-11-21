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
            { path: '', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) },
        ]
    },
    {
        path: '',
        component: PagesComponent,
        // component: KitchensinkComponent,
        children: [
            { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
            { path: 'investments', loadChildren: () => import('./pages/investments/investments.module').then(m => m.InvestmentsModule) },
            { path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },
            { path: 'store', loadChildren: () => import('./pages/store/store.module').then(m => m.StoreModule) },
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