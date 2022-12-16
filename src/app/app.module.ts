import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YahyaComponent } from './yahya/yahya.component';
import { LoopItemComponent } from './loop-item/loop-item.component';

@NgModule({
  declarations: [AppComponent, YahyaComponent, LoopItemComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
