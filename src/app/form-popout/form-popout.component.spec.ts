import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPopoutComponent } from './form-popout.component';

describe('FormPopoutComponent', () => {
  let component: FormPopoutComponent;
  let fixture: ComponentFixture<FormPopoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPopoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPopoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
