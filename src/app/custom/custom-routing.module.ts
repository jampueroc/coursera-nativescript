import { NgModule } from '@angular/core';
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AboutMeComponent } from "~/app/custom/about-me/about-me.component";
import { ContactMeComponent } from "~/app/custom/contact-me/contact-me.component";

const routes: Routes = [
    {path: 'about-me', component: AboutMeComponent},
    {path: 'contact-me', component: ContactMeComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CustomRoutingModule { }
