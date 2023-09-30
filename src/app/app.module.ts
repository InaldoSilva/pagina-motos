import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardComponent } from './components/card/card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    MenuBarComponent,
    CardComponent,
    SmallCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
