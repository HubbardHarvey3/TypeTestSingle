import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Pane 1
  sampleText = "Bacon turkey sausage pork belly, pancetta jowl short ribs jerky alcatra chuck buffalo porchetta."
  sampleTextCharNums: number = 0

  // Pane 2
  typeInputForm: FormGroup;
  resultText: string = "";
  resultTextCharNums: number = 0;
  isTimer: boolean = false;
  isTypingDone: boolean = false;
  infinity: number = Infinity;

  // Pane 3
  seconds: number = 0;
  minutes: number = 0;
  timeInSeconds: number;
  wpm: number;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // Initialize the Textarea
    this.typeInputForm = this.formBuilder.group({
      typeInputField: ''
    });
    // Capture the textarea values and store in resultText
    this.typeInputForm.valueChanges.subscribe(() => {
      this.resultText = this.typeInputForm.value.typeInputField
      this.resultTextCharNums = this.resultText.length
    });
    this.sampleTextCharNums = this.sampleText.length
    this.intervalLengthCheck();
    this.intervalTimeCheck();
  }



  // Methods
  intervalLengthCheck() {
    setInterval(() => {
      this.textLengthTest()
    }, 500)
  }
  intervalTimeCheck() {
    setInterval(() => {
      if (this.isTimer && !this.isTypingDone) {
        this.seconds += 1
        if (this.seconds === 60) {
          this.minutes += 1;
          this.seconds = 0;
        }
      }
      this.calculateWPM()
    }, 1000)
  }
  // Pane 1


  // Pane 2
  textLengthTest() {
    if (this.sampleTextCharNums <= this.resultTextCharNums) {
      this.isTypingDone = true
    }
  }

  // Pane 3
  startTime() {
    this.isTimer = true
  }
  calculateWPM() {
    this.calculateTimeinSeconds()
    this.wpm = (this.sampleTextCharNums / 5) / (this.timeInSeconds / 60)
    this.wpm = Math.round(this.wpm)
  }
  calculateTimeinSeconds() {
    this.timeInSeconds = (this.minutes * 60) + this.seconds
  }
}
