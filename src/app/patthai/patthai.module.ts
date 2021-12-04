import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatthaiPageRoutingModule } from './patthai-routing.module';

import { PatthaiPage } from './patthai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatthaiPageRoutingModule
  ],
  declarations: [PatthaiPage]
})
export class PatthaiPageModule {}
