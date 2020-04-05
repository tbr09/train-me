import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExerciseModalTemplateFormComponent } from './add-exercise-modal-template-form.component';

describe('AddExerciseModalTemplateFormComponent', () => {
  let component: AddExerciseModalTemplateFormComponent;
  let fixture: ComponentFixture<AddExerciseModalTemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExerciseModalTemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExerciseModalTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
