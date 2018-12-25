import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[footerContainer]'
})
export class FooterDirective {

  constructor(public vc: ViewContainerRef) { }

}
