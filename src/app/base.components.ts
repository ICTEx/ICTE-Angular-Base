import {OnInit} from '@angular/core';
import {MarketDataService} from './services/market-data.service';
import {Router} from '@angular/router';
import {Symbols} from 'icte-market-data/lib/model/Symbols';

export class BaseComponent implements OnInit {

  constructor(protected service: MarketDataService, protected router: Router) {

  }

  get s(): Symbols {
    return this.service.d;
  }

  ngOnInit() {
  }

  getBenchmarkName(): string {
    return this.s.getBenchmarkName();
  }

  getDateTime() {
    return new Date();
  }
}
