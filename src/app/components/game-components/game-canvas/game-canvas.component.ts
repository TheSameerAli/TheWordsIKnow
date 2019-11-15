import { GameStateService } from './../../../services/game/game-state.service';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.scss']
})
export class GameCanvasComponent implements OnInit {
  wordsAdded: string[] = [];
  correctWordCount = 0;
  incorrectWordCount = 0;
  started = false;
  ended = false;

  // Time mechanism
  public showStarting = false;
  public startingTimer = 3;
  public timeElapsed: Date = new Date(0, 0, 0, 0, 0, 0, 0);
  public timeElapsedInSeconds = 0;
  public interval$: Subscription;
  public gameStartingInterval$: Subscription;


  constructor(public gameStateService: GameStateService) {
    this.correctWordCount = 0;
    this.incorrectWordCount = 0;
    this.started = false;
    this.timeElapsedInSeconds = 0;
  }

  ngOnInit() {
  }

  startGame() {
    this.ended = false;
    this.wordsAdded = [];
    this.correctWordCount = 0;
    this.incorrectWordCount = 0;
    this.showStarting = true;
    this.gameStartingInterval$ = interval(1000).subscribe(time => {
      this.startingTimer -= 1;
      if (this.startingTimer <= 0) {
        this.started = true;
        this.showStarting = false;
        this.startTimer();
      }
    });
  }

  startTimer() {
    this.interval$ = interval(1000).subscribe(() => {
      this.timeElapsed = new Date(0, 0, 0, 0, 0, 0, 0);
      this.timeElapsedInSeconds++;
      this.timeElapsed.setSeconds(this.timeElapsedInSeconds);
    });
    this.gameStartingInterval$.unsubscribe();
  }

  endGame() {
    this.started = false;
    this.ended = true;
    this.interval$.unsubscribe();
    this.showStarting = false;
    this.startingTimer = 3;
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
