import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainingModalComponent } from './add-training-modal.component';

describe('AddTrainingModalComponent', () => {
  let component: AddTrainingModalComponent;
  let fixture: ComponentFixture<AddTrainingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrainingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrainingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
