import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LogInFormularyPageRoutingModule } from './log-in-formulary-routing.module';
import { LogInFormularyPage } from './log-in-formulary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogInFormularyPageRoutingModule
  ],
  declarations: [LogInFormularyPage]
})
export class LogInFormularyPageModule {}
