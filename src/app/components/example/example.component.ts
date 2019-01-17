import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {HeaderHomeComponent} from '../home/header-home/header-home.component';
import {ExampleActionPanelComponent} from '../example/example-action-panel/example-action-panel.component';
import {MarketDataService} from '../../services/market-data.service';
import {ActionPanelService} from '../../services/action-panel.service';
import {BaseComponent} from '../../base.components';
import {Router} from '@angular/router';
import {FooterHomeComponent} from '../home/footer-home/footer-home.component';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent extends BaseComponent implements OnInit, AfterViewInit, AfterViewChecked {
  constructor(
    protected service: MarketDataService,
    protected apService: ActionPanelService,
    protected router: Router
  ) {
    super(service, router);
  }

  get s() {
    return this.service.d;
  }

  ngOnInit() {
    this.apService.setHeader(HeaderHomeComponent);
    this.apService.setActionPanel(ExampleActionPanelComponent);
    this.apService.setFooter(FooterHomeComponent);
  }

  getBenchmarkName(): string {
    return this.s.getBenchmarkName();
  }

  getClassName(rowId: number): string {
    return this.s.isSymbolEnabled(rowId) ? 'active' : '';
  }

  getSymbolIcon(rowId) {
    return this.s.getSymbolName(rowId);
  }

  ngAfterViewInit() {
    for (let i = 0; i < this.s.arr.length; i++) {
      if (!this.s.isSymbolEnabled(i)) {
        this.s.changeSymbolStatus(i);
      }
    }
  }

  ngAfterViewChecked() {
  }
}
