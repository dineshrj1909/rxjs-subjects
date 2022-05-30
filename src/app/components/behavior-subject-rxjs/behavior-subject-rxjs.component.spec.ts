import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubjectRxjsComponent } from './behavior-subject-rxjs.component';

describe('BehaviorSubjectRxjsComponent', () => {
  let component: BehaviorSubjectRxjsComponent;
  let fixture: ComponentFixture<BehaviorSubjectRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviorSubjectRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorSubjectRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
