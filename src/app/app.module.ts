import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { SafePipe } from './safe-style';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    SafePipe,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
