import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./feature/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'main-record-locator',
    loadChildren: () => import('./feature/main-record-locator/main-record-locator.module').then( m => m.MainRecordLocatorPageModule)
  },
  {
    path: 'reservation-menu/:recordlocator',
    loadChildren: () => import('./feature/reservation-menu/reservation-menu.module').then( m => m.ReservationMenuPageModule)
  },
  // {
  //   path: '**',
  //   redirectTo: 'login'
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
