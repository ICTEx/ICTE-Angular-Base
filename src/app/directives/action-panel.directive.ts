
import { Directive, Inject, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[actionPanel]',
})

export class ActionPanelDirective {

  constructor(public vc: ViewContainerRef) {
  //  vc.constructor.name === "ViewContainerRef"; // true
  }
}
