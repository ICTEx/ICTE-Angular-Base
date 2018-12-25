import {OnInit} from '@angular/core';
import {MarketDataService} from './services/market-data.service';
import {Router} from '@angular/router';
import {Symbols} from 'icte-market-data/lib/model/Symbols';

export class BaseComponent implements OnInit {

  private _isBenchmarkView: boolean = false;

  constructor(protected service: MarketDataService, protected router: Router) {

  }

  ngOnInit() {
  }

  get s(): Symbols {
    return this.service.d;
  }

  showBenchmark() {
    this._isBenchmarkView = !this._isBenchmarkView;
  }

  isBenchmarkView(): boolean {
    return this._isBenchmarkView;
  }

  getBenchmarkName(): string {
    return this.s.getBenchmarkName();
  }

  getNgClassName(rowId: number): string {
    return this.s.isSymbolEnabled(rowId) ? 'active' : ' ';
  }

  getDateTime() {
    return new Date();
  }

  changeTheme(themeId) {
    const url = this.router.url;
    const tree = this.router.parseUrl(url);

    const g = tree.root.children['primary'];
    const s = g.segments;

    let theme = s[0].path;
    let fullUrl;
    s[0] = themeId;
    if (s[1]) {
      fullUrl = '/' + s[0] + '/' + s[1].path;
    } else {
      fullUrl = '/' + s[0];
    }
    return this.router.navigate([fullUrl], {replaceUrl: true});
  }

  routerNavigate(route: String) {
    return this.router.navigate([route], {replaceUrl: true}); // If return false or invalid
  }
}
