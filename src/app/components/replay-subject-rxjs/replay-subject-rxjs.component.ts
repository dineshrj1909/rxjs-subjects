import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject-rxjs',
  templateUrl: './replay-subject-rxjs.component.html',
  styleUrls: ['./replay-subject-rxjs.component.css'],
})
export class ReplaySubjectRxjsComponent implements OnInit {
  myReplaySubject = new ReplaySubject<number>(2, 100);
  logs: Array<number> = [];
  constructor() {}

  ngOnInit(): void {
    this.myReplaySubject.next(1);
    this.myReplaySubject.next(2);
    this.myReplaySubject.next(3);

    this.myReplaySubject.subscribe((value) => this.logs.push(value));
    this.myReplaySubject.next(10);
  }
}
