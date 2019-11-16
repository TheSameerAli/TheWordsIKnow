import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { TopToolbarComponent } from './components/toolbar/top-toolbar/top-toolbar.component';

// Material Design Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { WordInputComponent } from './components/game-components/inputs/word-input/word-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';



import { CorrectWordsCardComponent } from './components/game-components/display/stats/correct-words-card/correct-words-card.component';
import {
  IncorrectWordsCardComponent
} from './components/game-components/display/stats/incorrect-words-card/incorrect-words-card.component';
import { TimeElapsedCardComponent } from './components/game-components/display/stats/time-elapsed-card/time-elapsed-card.component';
import { FormsModule } from '@angular/forms';
import { GameCanvasComponent } from './components/game-components/game-canvas/game-canvas.component';





@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopToolbarComponent,
    WordInputComponent,
    CorrectWordsCardComponent,
    IncorrectWordsCardComponent,
    TimeElapsedCardComponent,
    GameCanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

