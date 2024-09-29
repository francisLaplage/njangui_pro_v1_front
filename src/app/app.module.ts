import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MembreComponent } from './membres/membre/membre.component';
import {HttpClientModule} from '@angular/common/http';
import { AddMembreComponent } from './membres/add-membre/add-membre.component'

@NgModule({
  declarations: [
    AppComponent,
    MembreComponent,
    AddMembreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
