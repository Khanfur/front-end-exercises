import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePriceGridComponent } from './single-price-grid.component';

describe('SinglePriceGridComponent', () => {
  let component: SinglePriceGridComponent;
  let fixture: ComponentFixture<SinglePriceGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePriceGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePriceGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
