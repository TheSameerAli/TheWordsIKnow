import { GameStateService } from './../../../services/game/game-state.service';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.scss']
})
export class GameCanvasComponent implements OnInit {
  public showStarting = false;
  public startingTimer = 3;
  constructor(public gameStateService: GameStateService) { }

  ngOnInit() {
  }

  startGame() {
    this.showStarting = true;
    interval(1000).subscribe(time => {
      this.startingTimer -= 1;
      if (this.startingTimer <= 0) {
        this.gameStateService.startGame();
      }
    });
  }

}
