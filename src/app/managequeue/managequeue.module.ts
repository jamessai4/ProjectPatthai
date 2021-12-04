import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagequeuePageRoutingModule } from './managequeue-routing.module';

import { ManagequeuePage } from './managequeue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagequeuePageRoutingModule
  ],
  declarations: [ManagequeuePage]
})
export class ManagequeuePageModule {}
