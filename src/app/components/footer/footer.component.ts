/*
 HTU Framework Action Panel Component
 Created by: Ytzvan Mastino - ym@htu.io
*/
import { Component, OnInit, ViewChild, HostListener, ComponentFactoryResolver, AfterViewChecked} from '@angular/core';
import { Router } from '@angular/router';
import { ActionPanelService } from '../../services/action-panel.service';
import { MarketDataService } from '../../services/market-data.service';
import { BaseComponent } from '../../base.components';
import { FooterDirective } from '../../directives/footer.directive';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends BaseComponent implements  OnInit, AfterViewChecked {
    public footerData: any;
    public footerCfg: any;
    private componentFactory;
    @ViewChild(FooterDirective)
    public footerHost: FooterDirective;

    constructor(protected service: MarketDataService, protected router: Router,  private aPService: ActionPanelService,
      private resolver: ComponentFactoryResolver) {
      super(service, router);
    }

    ngOnInit() {
      this.aPService.footerEvent.subscribe(component => {
        this.renderComponent(component);
     });

    }
    ngAfterViewChecked() 	{
    }

    renderComponent(component) {
      const viewContainerRef = this.footerHost.vc;
      if (component) {
        viewContainerRef.clear();
        const componentFactory = this.resolver.resolveComponentFactory(component);
        const componentRef = viewContainerRef.createComponent(componentFactory);
      } else  {
        viewContainerRef.clear();
      }
    }
}
