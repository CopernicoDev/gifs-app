import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'gifs',
        loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page')

    },
    {
        path: '**',
        redirectTo: 'dashboard'
    },
    {
        path: 'trending'

    },
    {
        path: 'search',
        loadComponent: () => import('./gifs/pages/search/search')

    },
    {
        path: 'trending',
        loadComponent: () => import('./gifs/pages/trending/trending')
    }

];
