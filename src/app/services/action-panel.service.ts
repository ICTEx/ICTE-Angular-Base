import { Injectable, EventEmitter, Output } from '@angular/core';
@Injectable()

export class ActionPanelService {
  isOpen = false;
  show = false;
  @Output() calculatorNotification: EventEmitter<any> = new EventEmitter();
  @Output() actionPanel: EventEmitter<any> = new EventEmitter();
  @Output() headerEvent: EventEmitter<any> = new EventEmitter();
  @Output() footerEvent: EventEmitter<any> = new EventEmitter();

  setActionPanel(component): void {
    return this.actionPanel.emit(component);
  }

  setHeader(component): void {
    return this.headerEvent.emit(component);
  }

  setFooter(component): void {
    return this.footerEvent.emit(component);
  }

  notification(obj) {
   this.calculatorNotification.emit(obj);
  }
}
