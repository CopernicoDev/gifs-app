import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page'),
        children: [
            {
                path: 'search',
                loadComponent: () => import('./gifs/pages/search/search')

            },
            {
                path: 'trending',
                loadComponent: () => import('./gifs/pages/trending/trending')
            },
            {
                path: 'history/:query',
                loadComponent: () => import('./gifs/pages/gif-history/gif-history')
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }

];
