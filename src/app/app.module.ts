import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TemplatesComponent } from './templates/templates.component';
import { DojomailComponent } from './dojomail/dojomail.component';
import { RetroBarcodeComponent } from './retro-barcode/retro-barcode.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatesComponent,
    DojomailComponent,
    RetroBarcodeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
		HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
