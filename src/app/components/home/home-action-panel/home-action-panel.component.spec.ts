import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeActionPanelComponent } from './home-action-panel.component';

describe('HomeActionPanelComponent', () => {
  let component: HomeActionPanelComponent;
  let fixture: ComponentFixture<HomeActionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeActionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeActionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
