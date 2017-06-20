import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  buttonStart: Boolean = false;
  buttonGameOn = 'Start Game';
  interval;
  timeOperating = 0;

  @Output() gameStarted = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  gameOn() {
    this.interval =  setInterval(() => {
      this.gameStarted.emit(this.timeOperating + 1);
      this.timeOperating ++;
    }, 1000);

    if (!this.buttonStart) {
      this.buttonStart = !this.buttonStart;
      this.buttonGameOn = 'Game On';

    }
  }

  stopGame() {
    clearInterval(this.interval);
    if (this.buttonStart) {
      this.buttonStart = !this.buttonStart;
      this.buttonGameOn = 'Start Game';
      this.timeOperating = 0;
    }
  }
}
