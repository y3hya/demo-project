import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { YahyaComponent } from './yahya/yahya.component';
import { LoopItemComponent } from './loop-item/loop-item.component';
import { FormComponent } from './form/form.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    YahyaComponent,
    LoopItemComponent,
    FormComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
