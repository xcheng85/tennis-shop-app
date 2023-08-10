import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlayerV2Component } from './create-player-v2.component';

describe('CreatePlayerV2Component', () => {
  let component: CreatePlayerV2Component;
  let fixture: ComponentFixture<CreatePlayerV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePlayerV2Component]
    });
    fixture = TestBed.createComponent(CreatePlayerV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
