import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransDeclarationsComponent } from './view-trans-declarations.component';

describe('ViewTransDeclarationsComponent', () => {
  let component: ViewTransDeclarationsComponent;
  let fixture: ComponentFixture<ViewTransDeclarationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTransDeclarationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTransDeclarationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
