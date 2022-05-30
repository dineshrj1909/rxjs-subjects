import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject-rxjs',
  templateUrl: './behavior-subject-rxjs.component.html',
  styleUrls: ['./behavior-subject-rxjs.component.css'],
})
export class BehaviorSubjectRxjsComponent implements OnInit {
  myBehaviorSubject = new BehaviorSubject<number>(1);
  logs: Array<number> = [];
  constructor() {}

  ngOnInit(): void {
    this.myBehaviorSubject.next(5);
    this.myBehaviorSubject.next(7);

    this.myBehaviorSubject.subscribe((value) => this.logs.push(value));

    this.myBehaviorSubject.next(9);
  }
}
