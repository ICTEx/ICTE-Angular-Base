import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InViewportModule } from 'ng-in-viewport';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {MarketDataService} from './services/market-data.service';
import {ActionPanelService} from './services/action-panel.service';
import { PersistanceService } from './services/persistant-service';


import { HomeComponent } from './components/home/home.component';

import { ActionPanelComponent } from './components/action-panel/action-panel.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { ActionPanelDirective } from './directives/action-panel.directive';
import { HeaderHomeComponent } from './components/home/header-home/header-home.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderDirective } from './directives/header.directive';
import { FooterComponent } from './components/footer/footer.component';
import { FooterDirective } from './directives/footer.directive';
import { FooterHomeComponent } from './components/home/footer-home/footer-home.component';
import { ExampleComponent } from './components/example/example.component';
import { ExampleActionPanelComponent } from './components/example/example-action-panel/example-action-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    ActionPanelDirective,
    ActionPanelComponent,

    SafeHtmlPipe,

    HeaderHomeComponent,
    HeaderComponent,
    HeaderDirective,

    FooterComponent,
    FooterDirective,
    FooterHomeComponent,
    ExampleComponent,
    ExampleActionPanelComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InViewportModule,
     ],
  entryComponents: [HeaderHomeComponent, FooterHomeComponent, ExampleActionPanelComponent],
  providers: [MarketDataService, ActionPanelService, PersistanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
