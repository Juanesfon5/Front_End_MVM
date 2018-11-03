import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XMLogedComponent } from './xmloged.component';

describe('XMLogedComponent', () => {
  let component: XMLogedComponent;
  let fixture: ComponentFixture<XMLogedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XMLogedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XMLogedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
