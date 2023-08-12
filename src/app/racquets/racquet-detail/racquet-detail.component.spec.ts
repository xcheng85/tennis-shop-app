import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacquetDetailComponent } from './racquet-detail.component';

describe('RacquetDetailComponent', () => {
  let component: RacquetDetailComponent;
  let fixture: ComponentFixture<RacquetDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RacquetDetailComponent]
    });
    fixture = TestBed.createComponent(RacquetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
