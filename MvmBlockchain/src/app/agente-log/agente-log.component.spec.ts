import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenteLogComponent } from './agente-log.component';

describe('AgenteLogComponent', () => {
  let component: AgenteLogComponent;
  let fixture: ComponentFixture<AgenteLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenteLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenteLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
