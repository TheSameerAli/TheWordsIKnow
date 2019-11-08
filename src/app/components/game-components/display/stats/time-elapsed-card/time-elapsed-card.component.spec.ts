import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeElapsedCardComponent } from './time-elapsed-card.component';

describe('TimeElapsedCardComponent', () => {
  let component: TimeElapsedCardComponent;
  let fixture: ComponentFixture<TimeElapsedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeElapsedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeElapsedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
