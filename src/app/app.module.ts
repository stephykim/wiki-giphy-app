import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WikiComponent } from './wiki/wiki.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { GiphyComponent } from './giphy/giphy.component';


@NgModule({
  declarations: [
    AppComponent,
    WikiComponent,
    SearchHistoryComponent,
    GiphyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
