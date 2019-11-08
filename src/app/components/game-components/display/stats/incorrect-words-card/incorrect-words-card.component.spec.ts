import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorrectWordsCardComponent } from './incorrect-words-card.component';

describe('IncorrectWordsCardComponent', () => {
  let component: IncorrectWordsCardComponent;
  let fixture: ComponentFixture<IncorrectWordsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncorrectWordsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncorrectWordsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
