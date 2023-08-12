import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacquetListComponent } from './racquet-list.component';

describe('RacquetListComponent', () => {
  let component: RacquetListComponent;
  let fixture: ComponentFixture<RacquetListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RacquetListComponent]
    });
    fixture = TestBed.createComponent(RacquetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
