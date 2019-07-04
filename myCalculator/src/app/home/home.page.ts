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
    console.log('btnClicked: ' + btn + " result: " + this.result );
    var lastResult = "";
    try {
      if (btn == "C") {
        this.calculate = "";
      } else if (btn == "=") {  
        this.calculate = eval(this.calculate);
      } else if (btn == "%") {
        this.calculate = eval(this.calculate+"/"+100);
      } else if (btn == "backspace") {
        this.calculate = this.calculate.substr(0, this.calculate.length - 1);
      } else if (btn == "negate") {
        this.calculate = eval('-'+'('+this.calculate+')');
      }  else {
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
