import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainRecordLocatorPageRoutingModule } from './main-record-locator-routing.module';

import { MainRecordLocatorPage } from './main-record-locator.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    MainRecordLocatorPageRoutingModule
  ],
  declarations: [MainRecordLocatorPage]
})
export class MainRecordLocatorPageModule {}
