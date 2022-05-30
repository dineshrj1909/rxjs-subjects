import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncSubjectRxjsComponent } from './async-subject-rxjs.component';

describe('AsyncSubjectRxjsComponent', () => {
  let component: AsyncSubjectRxjsComponent;
  let fixture: ComponentFixture<AsyncSubjectRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncSubjectRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncSubjectRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
