import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportInfoComponent } from './support-info.component';

describe('SupportInfoComponent', () => {
  let component: SupportInfoComponent;
  let fixture: ComponentFixture<SupportInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupportInfoComponent]
    });
    fixture = TestBed.createComponent(SupportInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
