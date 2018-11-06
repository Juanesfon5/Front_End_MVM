import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGenDeclarationComponent } from './create-gen-declaration.component';

describe('CreateGenDeclarationComponent', () => {
  let component: CreateGenDeclarationComponent;
  let fixture: ComponentFixture<CreateGenDeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGenDeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGenDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
