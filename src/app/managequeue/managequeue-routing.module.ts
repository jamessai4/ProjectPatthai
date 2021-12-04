import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagequeuePage } from './managequeue.page';

const routes: Routes = [
  {
    path: '',
    component: ManagequeuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagequeuePageRoutingModule {}
