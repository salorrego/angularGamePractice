import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNum = [];
  evenNum = [];

  numSet(event) {
    if (event % 2 !== 0) {
      this.oddNum.push(event);
    } else {
      this.evenNum.push(event);
    }
  }


}
