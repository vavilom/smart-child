import { Component, OnInit } from '@angular/core';
import { PlusNumber } from '../../models/number.model';
import { Helper } from '../../services/helper.service';

enum State{
  question,
  error,
  success
}

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.css']
})
export class PlusComponent implements OnInit {

  numbers: PlusNumber[] = [];
  mainNumber: number = 3;
  currentIndex: number = 0;
  seletedNumber: number = -1;
  messageError: boolean = false;
  messageSuccess: boolean = false;
  currentState = State.question;
  states = State;

  constructor(public helper: Helper) { }

  ngOnInit() {
    this.numbers = this.getRangeNumber(this.mainNumber);
  }

  getRangeNumber(number){
    let result: PlusNumber[] = [];

    for (let i = 0; i <= number; i++) {
      result.push(new PlusNumber(i));
    }

    return this.helper.shuffleInPlace(result);
  }

  setAnswer(num: number){
    this.seletedNumber = num;

    let result = this.numbers[this.currentIndex].value + this.seletedNumber;

    if(result === this.mainNumber){
      this.messageError = false;
      this.messageSuccess = true;

      setTimeout(() => {
        this.messageSuccess = false;
        this.checkEnd();
      },2000);
    } else {
      this.messageError = true;
    }
  }

  checkEnd(){
    this.seletedNumber = -1;

    if(this.currentIndex == this.numbers.length - 1){
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }

  newGame(val){
    this.mainNumber = +this.mainNumber;

    this.numbers = this.getRangeNumber(this.mainNumber);
    this.currentIndex = 0;
    this.seletedNumber = -1;
  }

}
