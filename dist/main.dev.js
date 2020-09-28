"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// class Calculator {
//     constructor(displayHiddenTextElement, displayShowTextElement ) {
//         this.displayHiddenTextElement = displayHiddenTextElement
//         this.displayShowTextElement = displayShowTextElement
//         this.clear()
//     }
// }
//     clear ();{
//         this.displayShow = ' '
//         this.displayHidden = ''
//         this.operation = undefined
//     }
//     deleter();{
//         this.displayShow = this.displayShow.toString().slice(0,-1)
//     }
//     appendNumber(number);{
//         if (number === '.' && this.displayShow.includes('.'))return
//         this.displayShow = this.displayShow.toString() + number.toString()
//     }
//     chooseOperation(operation);{
//         if (this.displayShow === '') return
//         if (this.displayHidden !== ''){
//             this.compute
//         }
//         this.operation = operation
//         this.displayHidden = this.displayShow
//         this.displayShow = ''
//     }
//     compute();{
//         let computation 
//         const prev = parseFloat(this.displayHidden)
//         const current = parseFloat(this.displayShow)
//         if (isNaN(prev) || isNaN(current)) ;return
//         switch (this.operation){
//             case '+':
//                 computation = prev + current
//                 break
//                 case '-':
//                 computation = prev - current
//                 break
//                 case '*':
//                 computation = prev + current
//                 break
//                 case '/':
//                 computation = prev / current
//                 break
//                 default:
//                     return
//         }
//         this.displayShow = computation
//         this.operation = undefined
//         this.displayHidden = ''
//     }
//     getDisplayNumber(number); {
//         const stringNumber = number.toString()
//         const integerDigits = parseFloat(stringNumber.split('.')[0])
//         const decimalDigits = stringNumber.split('.')[1]
//        let integerDisplay
//        if (isNaN(integerDigits)){
//            integerDisplay =''
//        } else{
//            integerDisplay=integerDigits.toLocaleString('en',{
//                maximumFractionDigits:0})
//            }
//            if (decimalDigits !=null){
//                return `$(integerDisplay).${decimalDigits}`
//            } else {
//                return integerDisplay
//            }
//        }
//     updateDisplay();{
//         this.displayShowTextElement.innerText = this.getDisplayNumber(this.displayShow)
//         if (this.operation != null){
//         this.displayHiddenTextElement.innerText = `${this.getDisplayNumber(this.displayHidden)} ${this.displayHidden}`
//     } else {
//         this.displayHiddenTextElement.innerText = ''
//     }
// }
// const numberButtons = document.querySelectorAll('[data-number]')
// const operationButtons = document.querySelectorAll('[data-operation]')
// const equalsButton = document.querySelector('[data-equals]')
// const deleteButton = document.querySelector('[data-delete]')
// const allclearButton = document.querySelector('[data-all-clear]')
// const displayHiddenTextElement = document.querySelector('[data-display-hidden]')
// const displayShowTextElement = document.querySelector('[data-display-show]')
// const calculator = new Calculator(displayHidden, displayShow)
// numberButtons.forEach(button=> {
//     button.addEventListener('click', () =>{
//         calculator.appendNumber(button.innerText)
//         calculator.updateDisplay()
//     })
// })
// operationButtons.forEach(button=> {
//     button.addEventListener('click', () =>{
//         calculator.chooseOperation(button.innerText)
//         calculator.updateDisplay()
//     })
// })
// equalsButton.addEventListener('click', button => {
//     calculator.compute()
//     calculator.updateDisplay()
// })
// allClearButton.addEventListener('click', button => {
//     calculator.clear()
//     calculator.updateDisplay()
// })
// deleteButton.addEventListener('click', button => {
//     calculator.deleter()
//     calculator.updateDisplay()
// })
var Calculator =
/*#__PURE__*/
function () {
  function Calculator(previousOperandTextElement, currentOperandTextElement) {
    _classCallCheck(this, Calculator);

    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  _createClass(Calculator, [{
    key: "clear",
    value: function clear() {
      this.currentOperand = '';
      this.previousOperand = '';
      this.operation = undefined;
    }
  }, {
    key: "delete",
    value: function _delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
  }, {
    key: "appendNumber",
    value: function appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return;
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }
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
    }
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

        case '/':
          computation = prev / current;
          break;

        default:
          return;
      }

      this.currentOperand = computation;
      this.operation = undefined;
      this.previousOperand = '';
    }
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
    }
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
}();

var numberButtons = document.querySelectorAll('[data-number]');
var operationButtons = document.querySelectorAll('[data-operation]');
var equalsButton = document.querySelector('[data-equals]');
var deleteButton = document.querySelector('[data-delete]');
var allClearButton = document.querySelector('[data-all-clear]');
var previousOperandTextElement = document.querySelector('[data-display-hidden]');
var currentOperandTextElement = document.querySelector('[data-display-show]');
var calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);
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
  calculator["delete"]();
  calculator.updateDisplay();
});