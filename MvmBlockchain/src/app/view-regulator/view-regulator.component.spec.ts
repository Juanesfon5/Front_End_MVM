import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegulatorComponent } from './view-regulator.component';

describe('ViewRegulatorComponent', () => {
  let component: ViewRegulatorComponent;
  let fixture: ComponentFixture<ViewRegulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRegulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRegulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
