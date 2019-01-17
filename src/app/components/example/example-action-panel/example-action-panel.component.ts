import { Component, OnInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-example-action-panel',
  templateUrl: './example-action-panel.component.html',
  styleUrls: ['./example-action-panel.component.css']
})
export class ExampleActionPanelComponent implements OnInit {

  constructor(private tref: ElementRef) {
   }

  ngOnInit() {
    //console.log(this.tref.nativeElement);

  }

}
