import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PreloadDelayed } from './shared/preload-delayed';

const routes: Routes = [
  {
    path: 'fleet',
    loadChildren: () =>
      import('./modules/fleet/fleet.module').then((m) => m.FleetModule),
    data: {
      preload: true,
      delay: 3000,
    },
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
    data: {
      preload: true,
      delay: 10000,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: PreloadDelayed,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
