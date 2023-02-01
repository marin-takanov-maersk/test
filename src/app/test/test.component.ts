import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  foo(importantParam: string, param1: string, param2: number, param3: string) {
    console.log(importantParam, param1, param2, param3);
  }

  bar() {
    console.log('bar');
  }

  xyz() {
    console.log('xyz');
  }

  abc2() {
    console.log('abc');
  }

  abc(p: any) {
    console.log(p);
  }
}
