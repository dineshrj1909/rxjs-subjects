import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject-rxjs',
  templateUrl: './subject-rxjs.component.html',
  styleUrls: ['./subject-rxjs.component.css'],
})
export class SubjectRxjsComponent implements OnInit {
  mySubject = new Subject<number>();
  logs: Array<number> = [];

  constructor() {}

  ngOnInit(): void {
    this.mySubject.next(10);

    this.mySubject.subscribe((value) => this.logs.push(value));

    this.mySubject.next(15);
  }
}
