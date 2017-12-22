import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesCompareComponent } from './vehicles-compare.component';

describe('VehiclesCompareComponent', () => {
  let component: VehiclesCompareComponent;
  let fixture: ComponentFixture<VehiclesCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
