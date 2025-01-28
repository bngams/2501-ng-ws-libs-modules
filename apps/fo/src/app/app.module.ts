import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from '@project/core'; // ts path config

@NgModule({
  // define components
  declarations: [
    AppComponent
  ],
  // load features
  imports: [
    BrowserModule, // CommonModule + ApplicationModule + other features (injector)
    AppRoutingModule,
    CoreComponent // a standalone component is a module
],
  providers: [], // load injectables
  exports: [],
  bootstrap: [AppComponent] // start app with
})
export class AppModule { }
