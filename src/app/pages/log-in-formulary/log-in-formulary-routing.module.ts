import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInFormularyPage } from './log-in-formulary.page';

const routes: Routes = [
  {
    path: '',
    component: LogInFormularyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogInFormularyPageRoutingModule {}
