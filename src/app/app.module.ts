import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { PaymentsListComponent } from './components/payments-list/payments-list.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainAppRoutingModule } from './app.routes.module';

@NgModule({
  declarations: [
    AppComponent,
    PaymentsListComponent,
    ListItemComponent,
    ListPageComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    MainAppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
