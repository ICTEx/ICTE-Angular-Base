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
import { ActionPanelDirective } from '../../directives/action-panel.directive';

@Component({
  selector: 'app-action-panel',
  templateUrl: './action-panel.component.html',
  styleUrls: ['./action-panel.component.css']
})
export class ActionPanelComponent extends BaseComponent implements  OnInit, AfterViewChecked {
    public actionPanelData: any;
    public actionPanelCfg: any;
    private componentFactory;
    @ViewChild(ActionPanelDirective)
    public actionPanelHost: ActionPanelDirective;

    constructor(protected service: MarketDataService, protected router: Router,  private aPService: ActionPanelService,
      private resolver: ComponentFactoryResolver) {
      super(service, router);
    }


    @HostListener('click',  ['$event'])
    notification(e) {
      let elem = e.target || e.srcElement || e.currentTarget;
      let target = elem.getAttribute('data-target');
      let params = [];
      params.push(elem.getAttribute('data-params'));
      let obj = {
        'target': target,
        'params': params
      };
      if (target) {
        this.aPService.notification(obj);
      }
    }

    ngOnInit() {
      this.aPService.actionPanel.subscribe(component => {
        this.renderComponent(component);
     });

    }
    ngAfterViewChecked() 	{
    }

    renderComponent(component) {
      const viewContainerRef = this.actionPanelHost.vc;
      if (component) {
        viewContainerRef.clear();
        const componentFactory = this.resolver.resolveComponentFactory(component);
        const componentRef = viewContainerRef.createComponent(componentFactory);
      } else  {
        viewContainerRef.clear();
      }
    }
}
