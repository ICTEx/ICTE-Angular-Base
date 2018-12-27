import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleActionPanelComponent } from './example-action-panel.component';

describe('ExampleActionPanelComponent', () => {
  let component: ExampleActionPanelComponent;
  let fixture: ComponentFixture<ExampleActionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleActionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleActionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
