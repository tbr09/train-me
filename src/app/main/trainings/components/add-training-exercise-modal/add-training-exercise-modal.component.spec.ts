import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainingExerciseModalComponent } from './add-training-exercise-modal.component';

describe('AddTrainingExerciseModalComponent', () => {
  let component: AddTrainingExerciseModalComponent;
  let fixture: ComponentFixture<AddTrainingExerciseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrainingExerciseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrainingExerciseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
