/*
 HTU Framework Action Panel Component
 Created by: Ytzvan Mastino - ym@htu.io
 Copyright 2018-2019 HTU Technologies
*/
import { Component, OnInit, ViewChild, HostListener, ComponentFactoryResolver, AfterViewChecked} from '@angular/core';
import { Router } from '@angular/router';
import { ActionPanelService } from '../../services/action-panel.service';
import { MarketDataService } from '../../services/market-data.service';
import { BaseComponent } from '../../base.components';
import { HeaderDirective } from '../../directives/header.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements  OnInit, AfterViewChecked {
    public headerData: any;
    public headerCfg: any;
    private componentFactory;
    @ViewChild(HeaderDirective)
    public headerHost: HeaderDirective;

    constructor(protected service: MarketDataService, protected router: Router,  private aPService: ActionPanelService,
      private resolver: ComponentFactoryResolver) {
      super(service, router);
    }

    ngOnInit() {
      this.aPService.headerEvent.subscribe(component => {
        this.renderComponent(component);
     });

    }
    ngAfterViewChecked() 	{
    }

    renderComponent(component) {
      const viewContainerRef = this.headerHost.vc;
      if (component) {
        viewContainerRef.clear();
        const componentFactory = this.resolver.resolveComponentFactory(component);
        const componentRef = viewContainerRef.createComponent(componentFactory);
      } else  {
        viewContainerRef.clear();
      }
    }
}
