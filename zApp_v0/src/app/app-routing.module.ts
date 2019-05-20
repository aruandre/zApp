import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'all-alerts', pathMatch: 'full' },
  //{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'all-alerts', children: [
    { path: '', loadChildren: './all-alerts/all-alerts.module#AllAlertsPageModule' },
    { path: ':alertId', loadChildren: './single-alert/single-alert.module#SingleAlertPageModule' },
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
