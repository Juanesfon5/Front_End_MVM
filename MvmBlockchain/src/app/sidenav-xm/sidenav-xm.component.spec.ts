import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavXMComponent } from './sidenav-xm.component';

describe('SidenavXMComponent', () => {
  let component: SidenavXMComponent;
  let fixture: ComponentFixture<SidenavXMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavXMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavXMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
