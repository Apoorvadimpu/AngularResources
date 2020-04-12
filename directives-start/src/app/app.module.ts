import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicDirector } from './basicDirector/BasicDirector.component';
import { NoDirectDomAccess } from './NoDirectDomAccess/NoDirectDomAccess';
import { UseunlessDirective } from './useunless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicDirector,
    NoDirectDomAccess,
    UseunlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
