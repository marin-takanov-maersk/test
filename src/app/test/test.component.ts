import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  foo(importantParam: string) {
    console.log(importantParam)
  }

  bar() {
    console.log('bar')
  }
  
  xyz() {
    console.log('xyz')
  }
}
