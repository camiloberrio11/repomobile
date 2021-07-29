import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainRecordLocatorPageRoutingModule } from './main-record-locator-routing.module';

import { MainRecordLocatorPage } from './main-record-locator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainRecordLocatorPageRoutingModule
  ],
  declarations: [MainRecordLocatorPage]
})
export class MainRecordLocatorPageModule {}
