import { TestBed } from '@angular/core/testing';

import { KanbanHandlerService } from './kanban-handler.service';

describe('KanbanHandlerService', () => {
  let service: KanbanHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanbanHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
