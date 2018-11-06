import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLineDeclarationComponent } from './create-line-declaration.component';

describe('CreateLineDeclarationComponent', () => {
  let component: CreateLineDeclarationComponent;
  let fixture: ComponentFixture<CreateLineDeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLineDeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLineDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
