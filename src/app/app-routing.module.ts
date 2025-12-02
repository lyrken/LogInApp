import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'log-in-formulary',
    loadChildren: () => import('./pages/log-in-formulary/log-in-formulary.module')
      .then(m => m.LogInFormularyPageModule)
  },
  {
    path: '',
    redirectTo: 'log-in-formulary',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
