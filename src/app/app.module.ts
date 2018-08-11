import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteNavComponent } from './quote-nav/quote-nav.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteNavComponent,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
