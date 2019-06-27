import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  calculate = "";
  result = "";
  
  constructor() {}

  btnClicked(btn) {
    console.log('CalculatorPage::btnClicked = ' + btn + " result: " + this.result );
    var lastResult = "";
    try {
      if (btn == "C") {
        this.calculate = "";
      } else if (btn == "=") {  
        this.calculate = eval(this.result);
      } else if (btn == "%") {
        this.calculate = eval(this.result+"/"+100);
      } else if (btn == "backspace") {
        this.calculate = eval(this.result.substr(0, this.result.length - 1));
      } else {
        this.calculate += btn;
      }
      try {
        this.result = eval(this.calculate);
        lastResult = this.result;
      } catch {
        this.result = lastResult;
      }
    } catch (e) {
      this.calculate = ("Error");
      console.log(e);
    }
    
  }

}
