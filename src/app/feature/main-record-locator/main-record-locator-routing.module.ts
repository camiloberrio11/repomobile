import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainRecordLocatorPage } from './main-record-locator.page';

const routes: Routes = [
  {
    path: '',
    component: MainRecordLocatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRecordLocatorPageRoutingModule {}
