import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingOptionPageRoutingModule } from './setting-option-routing.module';

import { SettingOptionPage } from './setting-option.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingOptionPageRoutingModule
  ],
  declarations: [SettingOptionPage]
})
export class SettingOptionPageModule {}
