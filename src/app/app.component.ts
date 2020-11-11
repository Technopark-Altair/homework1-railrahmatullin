import {
  Component
}
from "@angular/core"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculatorRail';
  public zeroxzero: string;
  public zeroxone: string;
  public onexzero: string;
  public onexone: string;

  andorman = true;
  inverseNum = true;
  public num1: number;
  public num2: number;
  public one: boolean;
  public two: boolean;
  public result: string;
  calculateTable() {

      if (this.num1 == 0) {
          this.one = false;
      } else if (this.num1 == 1) {
          this.one = true;
      } else {
          this.result = "Пожалуйста введите 1 или 0 в поле"
          return;
      }
      if (this.num2 == 0) {
          this.two = false;
      } else if (this.num2 == 1) {
          this.two = true;
      } else {
          this.result = "Пожалуйста введите 1 или 0 в поле"
          return;
      }
      this.result = ""
      

      this.zeroxzero = ""+this.calculate(0,0);
      this.zeroxone = ""+this.calculate(0,1);
      this.onexzero = ""+this.calculate(1,0);
      this.onexone = ""+this.calculate(1,1);
  }
  calculate(numOne, numTwo) {
    var expression = "";

    if (""+this.inverseNum == "true") {
        expression = expression + "!";
    }
    expression = expression + "(";
    if (this.one == numOne) {
        expression = expression + "true";
    } else {
        expression = expression + "false";
    }

    if (this.andorman) {
        expression = expression + "&&";
    } else {
        expression = expression + "||";
    }

    if (this.two == numTwo) {
        expression = expression + "true";
    } else {
        expression = expression + "false";
    }
    expression = expression + ")";
console.log(expression);
  return eval (expression);
  }
}