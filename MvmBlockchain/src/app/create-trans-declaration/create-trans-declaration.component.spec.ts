import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTransDeclarationComponent } from './create-trans-declaration.component';

describe('CreateTransDeclarationComponent', () => {
  let component: CreateTransDeclarationComponent;
  let fixture: ComponentFixture<CreateTransDeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTransDeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTransDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
