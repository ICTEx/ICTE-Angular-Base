import { Component, OnInit, HostListener } from '@angular/core';
import { ActionPanelService } from '../../services/action-panel.service';
import { PersistanceService } from '../../services/persistant-service';
import { MarketDataService } from '../../services/market-data.service';
import {Symbols} from 'icte-market-data/lib/model/Symbols';
import {HomeActionPanelComponent} from './home-action-panel/home-action-panel.component';
import {HeaderHomeComponent} from './header-home/header-home.component';
import {FooterHomeComponent} from './footer-home/footer-home.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private aPService: ActionPanelService, private persistanceService: PersistanceService, private service: MarketDataService) { }

  ngOnInit() {
    this.aPService.setHeader(HeaderHomeComponent);
    this.aPService.setActionPanel(HomeActionPanelComponent);
    this.aPService.setFooter(FooterHomeComponent);
  }

  get s(): Symbols {
    return this.service.d;
  }
}

