import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApihandelComponent } from './apihandel.component';

describe('ApihandelComponent', () => {
  let component: ApihandelComponent;
  let fixture: ComponentFixture<ApihandelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApihandelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApihandelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
