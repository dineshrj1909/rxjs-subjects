import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject-rxjs',
  templateUrl: './async-subject-rxjs.component.html',
  styleUrls: ['./async-subject-rxjs.component.css'],
})
export class AsyncSubjectRxjsComponent implements OnInit {
  myAsyncSubject = new AsyncSubject<number>();
  logs: Array<number> = [];
  constructor() {}

  ngOnInit(): void {
    this.myAsyncSubject.next(1);
    this.myAsyncSubject.subscribe((value) => this.logs.push(value));
    this.myAsyncSubject.next(2);    
    this.myAsyncSubject.next(3);

    this.myAsyncSubject.next(15);
    this.myAsyncSubject.complete();
  }
}
