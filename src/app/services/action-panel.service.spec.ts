import { TestBed } from '@angular/core/testing';

import { ActionPanelService } from './action-panel.service';

describe('ActionPanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActionPanelService = TestBed.get(ActionPanelService);
    expect(service).toBeTruthy();
  });
});
