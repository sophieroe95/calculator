"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//2. create js class
var Calculator =
/*#__PURE__*/
function () {
  function Calculator(previousOperandTextElement, currentOperandTextElement) {
    _classCallCheck(this, Calculator);

    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  } //3. clear the display


  _createClass(Calculator, [{
    key: "clear",
    value: function clear() {
      this.currentOperand = '0';
      this.previousOperand = '';
      this.operation = undefined;
    } //5. delete current display

  }, {
    key: "deleteItems",
    value: function deleteItems() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
    } //4. add multiple numbers

  }, {
    key: "appendNumber",
    value: function appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return;
      this.currentOperand = this.currentOperand.toString() + number.toString();
    } //6. display operation

  }, {
    key: "chooseOperation",
    value: function chooseOperation(operation) {
      if (this.currentOperand === '') return;

      if (this.previousOperand !== '') {
        this.compute();
      }

      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';
    } //7. calculate

  }, {
    key: "compute",
    value: function compute() {
      var computation;
      var prev = parseFloat(this.previousOperand);
      var current = parseFloat(this.currentOperand);
      if (isNaN(prev) || isNaN(current)) return;

      switch (this.operation) {
        case '+':
          computation = prev + current;
          break;

        case '-':
          computation = prev - current;
          break;

        case '*':
          computation = prev * current;
          break;

        case '÷':
          computation = prev / current;
          break;

        case '%':
          computation = current / 100;
          break;

        default:
          return;
      }

      this.currentOperand = computation;
      this.operation = undefined;
      this.previousOperand = '';
    } // adds commas to long numbers, allows decimals to be added to decimals/integers

  }, {
    key: "getDisplayNumber",
    value: function getDisplayNumber(number) {
      var stringNumber = number.toString();
      var integerDigits = parseFloat(stringNumber.split('.')[0]);
      var decimalDigits = stringNumber.split('.')[1];
      var integerDisplay;

      if (isNaN(integerDigits)) {
        integerDisplay = '';
      } else {
        integerDisplay = integerDigits.toLocaleString('en', {
          maximumFractionDigits: 0
        });
      }

      if (decimalDigits != null) {
        return "".concat(integerDisplay, ".").concat(decimalDigits);
      } else {
        return integerDisplay;
      }
    } // shows current and previous display 

  }, {
    key: "updateDisplay",
    value: function updateDisplay() {
      this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);

      if (this.operation != null) {
        this.previousOperandTextElement.innerText = "".concat(this.getDisplayNumber(this.previousOperand), " ").concat(this.operation);
      } else {
        this.previousOperandTextElement.innerText = '';
      }
    }
  }]);

  return Calculator;
}(); //1. create event handlers


var numberButtons = document.querySelectorAll('[data-number]');
var operationButtons = document.querySelectorAll('[data-operation]');
var equalsButton = document.querySelector('[data-equals]');
var deleteButton = document.querySelector('[data-delete]');
var posNeg = document.querySelector('pos-neg');
var allClearButton = document.querySelector('[data-all-clear]');
var previousOperandTextElement = document.querySelector('[data-previous-operand]');
var currentOperandTextElement = document.querySelector('[data-current-operand]');
var calculator = new Calculator(previousOperandTextElement, currentOperandTextElement); // add functions to buttons

numberButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
operationButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});
equalsButton.addEventListener('click', function (button) {
  calculator.compute();
  calculator.updateDisplay();
});
allClearButton.addEventListener('click', function (button) {
  calculator.clear();
  calculator.updateDisplay();
});
deleteButton.addEventListener('click', function (button) {
  calculator.deleteItems();
  calculator.updateDisplay();
});
posNeg.addEventListener('click', function (button) {
  calculator.makeCurrentValueNegative();
  calculator.updateDisplay();
}); // $("#opp").click(function(opposite){
//   var b=document.getElementById("output");
//   var n=b.value; 
//   n = n * -1;
//   b.value = n; // assign the value of n back to the output
// });
// function makeCurrentValueNegative() {
//   var currentValue = document.getElementById("current-operand").innerHTML
//    console.log('currentValue in makeInputNegative is: ', currentValue)
//    if(currentValue[0] === "-") {
//     currentValue = currentValue.slice(1)
//     $("#currentValue").html(currentValue)
//    } else {
//     $("#currentValue").prepend("-")
//    }
//    return currentValue
//  }