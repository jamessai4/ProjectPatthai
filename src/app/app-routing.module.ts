import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'queue',
    loadChildren: () => import('./queue/queue.module').then( m => m.QueuePageModule)
  },
  {
    path: 'patthai',
    loadChildren: () => import('./patthai/patthai.module').then( m => m.PatthaiPageModule)
  },
  {
    path: 'hoy-tord',
    loadChildren: () => import('./hoy-tord/hoy-tord.module').then( m => m.HoyTordPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'managequeue',
    loadChildren: () => import('./managequeue/managequeue.module').then( m => m.ManagequeuePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
