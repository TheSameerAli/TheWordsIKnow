import { GameStateService } from './../../../services/game/game-state.service';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    // this.db.collection('users').doc('oHmKVHYSS1XgIUVGZ9y1').collection('scores').valueChanges().subscribe(data => {
    //   console.log(data);
    // });
  }



}
