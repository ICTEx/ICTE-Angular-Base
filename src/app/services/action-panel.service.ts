import { Injectable, EventEmitter, Output } from '@angular/core';
@Injectable()

export class ActionPanelService {
  isOpen = false;
  show = false;
  @Output() calculatorNotification: EventEmitter<any> = new EventEmitter();
  @Output() actionPanel: EventEmitter<any> = new EventEmitter();
  @Output() headerEvent: EventEmitter<any> = new EventEmitter();
  @Output() footerEvent: EventEmitter<any> = new EventEmitter();

  showComponent(data) {
    //return this.change.emit(data);
  }

  setActionPanel(component): void {
    return this.actionPanel.emit(component);
  }

  setHeader(component): void {
    return this.headerEvent.emit(component);
  }

  setFooter(component): void {
    return this.footerEvent.emit(component);
  }

  destroyActionPanel(): void {
   /*const aPData = {
    'cfg' : {
      'visible': false,
      'closeable': true
    },
    'data' : null
  }; */
   // return this.actionPanel.emit(null);
  }

  notification(obj) {
   this.calculatorNotification.emit(obj);
  }


}
