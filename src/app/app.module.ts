import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubjectRxjsComponent } from './components/subject-rxjs/subject-rxjs.component';
import { BehaviorSubjectRxjsComponent } from './components/behavior-subject-rxjs/behavior-subject-rxjs.component';
import { ReplaySubjectRxjsComponent } from './components/replay-subject-rxjs/replay-subject-rxjs.component';
import { AsyncSubjectRxjsComponent } from './components/async-subject-rxjs/async-subject-rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectRxjsComponent,
    BehaviorSubjectRxjsComponent,
    ReplaySubjectRxjsComponent,
    AsyncSubjectRxjsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
