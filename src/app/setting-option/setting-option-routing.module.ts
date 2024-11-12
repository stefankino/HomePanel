import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingOptionPage } from './setting-option.page';

const routes: Routes = [
  {
    path: '',
    component: SettingOptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingOptionPageRoutingModule {}
