import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { DojomailComponent } from './dojomail/dojomail.component';
import { RetroBarcodeComponent } from './retro-barcode/retro-barcode.component';
import { TimezoneComponent } from './timezone/timezone.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    DojomailComponent,
    RetroBarcodeComponent,
    TimezoneComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
		HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
