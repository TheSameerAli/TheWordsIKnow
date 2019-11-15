import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-correct-words-card',
  templateUrl: './correct-words-card.component.html',
  styleUrls: ['./correct-words-card.component.scss']
})
export class CorrectWordsCardComponent implements OnInit {
  @Input() value: number;

  constructor() {
  }

  ngOnInit() {
  }

}
