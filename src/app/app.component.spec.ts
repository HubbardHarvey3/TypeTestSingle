import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormBuilder } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [
        AppComponent
      ],
      providers: [FormBuilder]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Timer should start off', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const bool = fixture.componentInstance.isTimer;
    expect(bool).toBeFalse
  });

  it('Typing Done boolean should start false', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const bool = fixture.componentInstance.isTypingDone;
    expect(bool).toBeFalse
  });

});
