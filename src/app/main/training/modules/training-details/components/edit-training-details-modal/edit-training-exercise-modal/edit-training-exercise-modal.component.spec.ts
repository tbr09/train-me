import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrainingExerciseModalComponent } from './edit-training-exercise-modal.component';

describe('EditTrainingExerciseModalComponent', () => {
  let component: EditTrainingExerciseModalComponent;
  let fixture: ComponentFixture<EditTrainingExerciseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTrainingExerciseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTrainingExerciseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
