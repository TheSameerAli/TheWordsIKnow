import { GameStateService } from './../../../../services/game/game-state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-input',
  templateUrl: './word-input.component.html',
  styleUrls: ['./word-input.component.scss']
})
export class WordInputComponent implements OnInit {
  word: string;

  constructor(private gameStateService: GameStateService) { }

  ngOnInit() {
  }

  addWord() {
    this.gameStateService.addWord(this.word);
    this.clearInput();
  }

  clearInput() {
    this.word = '';
  }

}
