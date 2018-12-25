import { Component, OnInit, HostListener } from '@angular/core';
import { ActionPanelService } from '../../services/action-panel.service';
import { HeaderHomeComponent } from '../home/header-home/header-home.component';
import { FooterHomeComponent } from '../home/footer-home/footer-home.component';
import { PersistanceService } from '../../services/persistant-service';
import { MarketDataService } from '../../services/market-data.service';
import {Symbols} from 'icte-market-data/lib/model/Symbols';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private aPService: ActionPanelService, private persistanceService: PersistanceService, private service: MarketDataService) { }

  ngOnInit() {
    this.aPService.setHeader(HeaderHomeComponent);
    this.aPService.setActionPanel(null);
    this.aPService.setFooter(FooterHomeComponent);
  //  let key = "test";
  //  let obj = "Ytzvan";
  //  this.persistanceService.saveData(key, obj);
  //  alert(this.persistanceService.retrieveData(key));
  }

  get s(): Symbols {
    return this.service.d;
  }
}

