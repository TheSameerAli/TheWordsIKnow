import { Injectable } from '@angular/core';
declare var require: any;
@Injectable({
  providedIn: 'root'
})

export class WordVerifyService {
  public englishWords;

  constructor() {
    this.englishWords = require('an-array-of-english-words');
  }


  public isValidWord(word: string, existingWords: string[]) {
    const wordsMatched = this.englishWords.filter(w => w === word);
    if (!/^[a-zA-Z0-9_]+$/.test(word) || existingWords.includes(word)
    || wordsMatched.length === 0) {
      return false;
    }
    return true;
  }
}
