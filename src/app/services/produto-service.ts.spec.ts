import { TestBed } from '@angular/core/testing';

import { ProdutoServiceTs } from './produto-service.js';

describe('ProdutoServiceTs', () => {
  let service: ProdutoServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
