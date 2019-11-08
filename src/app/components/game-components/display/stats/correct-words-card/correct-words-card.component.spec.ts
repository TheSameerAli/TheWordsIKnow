import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectWordsCardComponent } from './correct-words-card.component';

describe('CorrectWordsCardComponent', () => {
  let component: CorrectWordsCardComponent;
  let fixture: ComponentFixture<CorrectWordsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectWordsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectWordsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
