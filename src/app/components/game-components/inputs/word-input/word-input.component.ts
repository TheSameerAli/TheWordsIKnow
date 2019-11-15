import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-word-input',
  templateUrl: './word-input.component.html',
  styleUrls: ['./word-input.component.scss']
})
export class WordInputComponent implements OnInit {
  @Output() onEndGame: EventEmitter<any> = new EventEmitter<any>();
  @Output() onWordEntered: EventEmitter<string> = new EventEmitter<string>();

  word: string;

  constructor() { }

  ngOnInit() {
  }

  addWord() {
    this.onWordEntered.emit(this.word);
    this.clearInput();
  }

  clearInput() {
    this.word = '';
  }

  endGame() {
    this.onEndGame.emit();
  }

}
