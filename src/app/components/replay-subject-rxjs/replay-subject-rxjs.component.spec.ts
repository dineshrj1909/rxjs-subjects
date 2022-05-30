import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaySubjectRxjsComponent } from './replay-subject-rxjs.component';

describe('ReplaySubjectRxjsComponent', () => {
  let component: ReplaySubjectRxjsComponent;
  let fixture: ComponentFixture<ReplaySubjectRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplaySubjectRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaySubjectRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
