import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SettingsService, SharedService, SidebarService, UsuarioService,LoginGuardGuard} from './service.index';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SharedService,
     SidebarService,
     UsuarioService,
     LoginGuardGuard
  ]
})
export class ServiceModule { }
