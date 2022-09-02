import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TestCaseOneAnswerComponent } from './test-case-one/test-case-one-answer/test-case-one-answer.component';
import { TestCaseTwoComponent } from './test-case-two/test-case-two/test-case-two.component';
import { TestCaseTwoAnswerComponent } from './test-case-two/test-case-two-answer/test-case-two-answer.component';
import { TestCaseThreeComponent } from './test-case-three/test-case-three/test-case-three.component';
import { TestCaseThreeAnswerComponent } from './test-case-three/test-case-three-answer/test-case-three-answer.component';
import { TestCaseOneComponent } from './test-case-one/test-case-one/test-case-one.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCaseOneComponent,
    TestCaseOneAnswerComponent,
    TestCaseTwoComponent,
    TestCaseTwoAnswerComponent,
    TestCaseThreeComponent,
    TestCaseThreeAnswerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
