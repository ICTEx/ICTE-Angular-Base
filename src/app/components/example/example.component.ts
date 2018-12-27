import {Component, OnInit, AfterViewInit, AfterViewChecked} from '@angular/core';
import {HeaderHomeComponent} from '../home/header-home/header-home.component';
import {ExampleActionPanelComponent} from '../example/example-action-panel/example-action-panel.component';
import {MarketDataService} from '../../services/market-data.service';
import {ActionPanelService} from '../../services/action-panel.service';
import {BaseComponent} from '../../base.components';
import {Router} from '@angular/router';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {FooterHomeComponent} from '../home/footer-home/footer-home.component';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
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
    this.apService.setActionPanel(ExampleActionPanelComponent);
    this.apService.setFooter(FooterHomeComponent);
  }

  get s() {
    return this.service.d;
  }

  ngAfterViewInit() {
    for (let i = 0; i < this.s.arr.length; i++) {
      this.s.changeSymbolStatus(i);
    }
  }

  ngAfterViewChecked() {
//    console.log(this.s.arr[0].name);
    //   console.log(this.s.arr[0].price);
  }
}
