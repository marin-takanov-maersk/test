import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  foo(importantParam: string, param1: string, param2: number) {
    console.log(importantParam, param1, param2)
  }

  bar() {
    console.log('bar')
  }
  
  xyz() {
    console.log('xyz')
  }
}
