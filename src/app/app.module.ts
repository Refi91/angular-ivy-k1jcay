import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ButtonBarComponent } from './button-bar/button-bar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ButtonBarComponent, HeaderBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
