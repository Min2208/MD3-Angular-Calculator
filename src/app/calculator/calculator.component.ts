import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number;
  firstNumber: number;
  secondNumber: number;
  operation = '+';

  firstNumberChange(value) {
    this.firstNumber = Number(value);
  }

  secondNumberChange(value) {
    this.secondNumber = Number(value);
  }

  operationChange(value) {
    this.operation = value;
  }

  calculator() {
    switch (this.operation) {
      case '+':
        this.result = this.firstNumber + this.secondNumber;
        break;
      case '-':
        this.result = this.firstNumber - this.secondNumber;
        break;
      case '*':
        this.result = this.firstNumber - this.secondNumber;
        break;
      case '/':
        this.result = this.firstNumber / this.secondNumber;
        break;

    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
