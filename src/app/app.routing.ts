import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { BlankComponent } from './layouts/blank/blank.component';

export const routes: Routes = [
    {
        path: '',
        component: BlankComponent,
        // component: KitchensinkComponent,
        children: [
            { path: '', loadChildren: () => import('./pages/organiser/organiser.module').then(m => m.OrganiserModule) },
        ]
    },
    {
        path: '',
        component: BlankComponent,
        // component: KitchensinkComponent,
        children: [
            // { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
            { path: 'organiser', loadChildren: () => import('./pages/organiser/organiser.module').then(m => m.OrganiserModule) },
            { path: 'payment-packs', loadChildren: () => import('./pages/organiser/organiser.module').then(m => m.OrganiserModule) },
            { path: 'investment-packs', loadChildren: () => import('./pages/organiser/organiser.module').then(m => m.OrganiserModule) }
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