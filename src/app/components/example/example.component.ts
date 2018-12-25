import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { HeaderHomeComponent } from '../home/header-home/header-home.component';
import { MarketDataService } from '../../services/market-data.service';
import { ActionPanelService } from '../../services/action-panel.service';
import { BaseComponent } from '../../base.components';
import { Router } from '@angular/router';

@Component({
  selector: "app-example",
  templateUrl: "./example.component.html",
  styleUrls: ["./example.component.css"]
})
export class ExampleComponent extends BaseComponent
  implements OnInit, AfterViewInit, AfterViewChecked {
  constructor(
    protected service: MarketDataService,
    protected apService: ActionPanelService,
    protected router: Router
  ) {
    super(service, router);
  }

  ngOnInit() {
    this.apService.setHeader(HeaderHomeComponent);
  }

  get s() {
    return this.service.d;
  }

  ngAfterViewInit() {
    this.s.changeSymbolStatus(1);
    this.s.changeSymbolStatus(2);
    this.s.changeSymbolStatus(3);
    this.s.changeSymbolStatus(7);
    this.s.changeSymbolStatus(8);
    this.s.changeSymbolStatus(9);
    this.s.changeSymbolStatus(10);
                    }

  ngAfterViewChecked() {
//    console.log(this.s.arr[0].name);
 //   console.log(this.s.arr[0].price);
  }
}
