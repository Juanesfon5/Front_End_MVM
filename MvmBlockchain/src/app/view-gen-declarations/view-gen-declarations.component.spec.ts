import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGenDeclarationsComponent } from './view-gen-declarations.component';

describe('ViewGenDeclarationsComponent', () => {
  let component: ViewGenDeclarationsComponent;
  let fixture: ComponentFixture<ViewGenDeclarationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGenDeclarationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGenDeclarationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
