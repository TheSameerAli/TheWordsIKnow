import { GameStateService } from './../../../../../services/game/game-state.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-elapsed-card',
  templateUrl: './time-elapsed-card.component.html',
  styleUrls: ['./time-elapsed-card.component.scss']
})
export class TimeElapsedCardComponent implements OnInit {
  @Input() timeElapsed: Date;
  constructor(public gameStateService: GameStateService) {
  }

  ngOnInit() {
  }

}
