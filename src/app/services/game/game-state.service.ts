import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  wordsAdded: string[] = [];
  correctWordCount;
  incorrectWordCount = 0;

  constructor() {
    this.correctWordCount = 0;
    this.incorrectWordCount = 0;
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
