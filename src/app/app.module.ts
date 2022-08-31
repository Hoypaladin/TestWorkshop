import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestCaseOneComponent } from './test-case-one/test-case-one.component';
import { TestCaseOneAnswerComponent } from './test-case-one/test-case-one-answer/test-case-one-answer.component';
import { TestCaseTwoComponent } from './test-case-two/test-case-two/test-case-two.component';
import { TestCaseTwoAnswerComponent } from './test-case-two/test-case-two-answer/test-case-two-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCaseOneComponent,
    TestCaseOneAnswerComponent,
    TestCaseTwoComponent,
    TestCaseTwoAnswerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
