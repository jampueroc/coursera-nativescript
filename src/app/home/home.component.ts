import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { isAndroid } from "tns-core-modules/platform";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.css"]
})
export class HomeComponent implements OnInit {
    items: Array<string>  = 'hello word, splitting this string'.split('');
    customText: string = 'Dummy text, hidden on android';
    constructor() {
        if (isAndroid) { // I don't know how to get page.android D: . Docs show me this when I search on google
           this.customText = "Changing text, Welcome to Android.";
        }
    }

    ngOnInit(): void {
        // Init your component properties here.

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
