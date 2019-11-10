import { Injectable, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  wordsAdded: string[] = [];
  correctWordCount = 0;
  incorrectWordCount = 0;
  elapsedTimeInSeconds = 0;
  started = false;
  elapsedTime: Date = new Date(0, 0, 0, 0, 0, 0, 0);

  constructor() {
    this.correctWordCount = 0;
    this.incorrectWordCount = 0;
    this.elapsedTimeInSeconds = 0;
    this.started = false;
  }

  startGame() {
    this.started = true;
    this.wordsAdded = [];
    this.correctWordCount = 0;
    this.incorrectWordCount = 0;
    this.elapsedTimeInSeconds = 0;
    interval(1000).subscribe(() => {
      this.elapsedTime = new Date(0, 0, 0, 0, 0, 0, 0);
      this.elapsedTimeInSeconds++;
      this.elapsedTime.setSeconds(this.elapsedTimeInSeconds);
    });
  }

  addWord(word: string) {
    word = word.trim();
    if (!word || word === '') {
      return;
    }
    if (this.isValidWord(word)) {
      this.wordsAdded.push(word);
      this.correctWordCount++;
    } else {
      this.incorrectWordCount++;
    }
  }

  private isValidWord(word: string) {
    if (this.wordsAdded.includes(word)) {
      return false;
    }
    return true;
  }
}
