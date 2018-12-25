import {Injectable} from '@angular/core';
import {ICTE} from 'icte-market-data';
import {Symbols} from 'icte-market-data/lib/model/Symbols';

@Injectable()
export class MarketDataService {
  private icteMd;
  private marketData: Symbols;

  constructor() {
    this.icteMd = new ICTE();
    this.icteMd.init();
    this.icteMd.getData().subscribe(m => {
      this.marketData = m;
    });
  }

  public get d():Symbols {
    return this.marketData;
  }

  getClassName(rowId: number): string {
    return this.d.isSymbolEnabled(rowId) ? 'active' : '';
  }
}

