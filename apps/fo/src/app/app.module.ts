import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HouseListComponent } from './components/houses/house-list/house-list.component';
import { HouseCardComponent } from './components/houses/house-card/house-card.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // ts path config
import { MaterialModule } from '../../../../libs/core/src/public-api';

const PAGES_COMPONENTS = [
  HomeComponent,
  ContactComponent,
  NotFoundComponent,
];

const COMPONENTS = [
  HeaderComponent,
  HouseListComponent,
  HouseCardComponent
];

@NgModule({
  // define components
  declarations: [
    AppComponent,
    ...PAGES_COMPONENTS,
    ...COMPONENTS,
  ],
  // load features
  imports: [
    BrowserModule, // CommonModule + ApplicationModule + other features (injector)
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    provideAnimationsAsync()
  ], // load injectables
  exports: [],
  bootstrap: [AppComponent] // start app with
})
export class AppModule { }
