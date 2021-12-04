import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoyTordPageRoutingModule } from './hoy-tord-routing.module';

import { HoyTordPage } from './hoy-tord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoyTordPageRoutingModule
  ],
  declarations: [HoyTordPage]
})
export class HoyTordPageModule {}
