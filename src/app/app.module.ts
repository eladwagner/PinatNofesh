import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { AccommodationPicturesViewerComponent } from './accommodation-pictures-viewer/accommodation-pictures-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    AccommodationPicturesViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
