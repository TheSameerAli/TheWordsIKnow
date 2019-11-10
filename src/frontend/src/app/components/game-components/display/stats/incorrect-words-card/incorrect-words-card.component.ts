import { GameStateService } from './../../../../../services/game/game-state.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incorrect-words-card',
  templateUrl: './incorrect-words-card.component.html',
  styleUrls: ['./incorrect-words-card.component.scss']
})
export class IncorrectWordsCardComponent implements OnInit {
  @Input() value: number;

  constructor(public gameStateService: GameStateService) {
  }

  ngOnInit() {
  }

}
