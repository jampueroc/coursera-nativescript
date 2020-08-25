import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { CustomRoutingModule } from "./custom-routing.module";



@NgModule({
  declarations: [AboutMeComponent, ContactMeComponent],
  imports: [
    NativeScriptCommonModule, CustomRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CustomModule { }
