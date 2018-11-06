import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLineDeclarationsComponent } from './view-line-declarations.component';

describe('ViewLineDeclarationsComponent', () => {
  let component: ViewLineDeclarationsComponent;
  let fixture: ComponentFixture<ViewLineDeclarationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLineDeclarationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLineDeclarationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
