import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[headerContainer]'
})
export class HeaderDirective {

  constructor(public vc: ViewContainerRef) { }

}
