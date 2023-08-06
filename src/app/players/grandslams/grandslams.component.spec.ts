import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandslamsComponent } from './grandslams.component';

describe('GrandslamsComponent', () => {
  let component: GrandslamsComponent;
  let fixture: ComponentFixture<GrandslamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrandslamsComponent]
    });
    fixture = TestBed.createComponent(GrandslamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
