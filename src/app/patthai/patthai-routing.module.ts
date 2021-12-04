import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatthaiPage } from './patthai.page';

const routes: Routes = [
  {
    path: '',
    component: PatthaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatthaiPageRoutingModule {}
