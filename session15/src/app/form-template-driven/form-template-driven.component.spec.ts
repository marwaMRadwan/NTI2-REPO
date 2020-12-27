import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateDrivenComponent } from './form-template-driven.component';

describe('FormTemplateDrivenComponent', () => {
  let component: FormTemplateDrivenComponent;
  let fixture: ComponentFixture<FormTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTemplateDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
