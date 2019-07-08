import { TestBed } from '@angular/core/testing';

import { ForumrespostaService } from './forumresposta.service';

describe('ForumrespostaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForumrespostaService = TestBed.get(ForumrespostaService);
    expect(service).toBeTruthy();
  });
});
