import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {InAppBrowser} from "@awesome-cordova-plugins/in-app-browser/ngx";
import {SocialSharing} from '@awesome-cordova-plugins/social-sharing/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComponentsModule} from "./components/components.module";
import {IonicStorageModule} from "@ionic/storage-angular";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    InAppBrowser,
    SocialSharing,
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {
}
