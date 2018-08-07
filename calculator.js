class Calculator {

    constructor() {
        this.result = 0;
        this.equalElement = document.getElementsByName('calculate')[0];
        this.displayInput = document.getElementById("display");
        this.digitValueElements = document.getElementsByClassName('digit');
        this.operatorValueElements = document.getElementsByClassName('operator');
        this.clearElement = document.getElementById("clear");
        this.isOperatorClicked = false;
        this.isFinished = false;
        this.numberToCalculate = 0;
        this.storedOperator = '';
        this.initialize();
    }

    get displayValue() {
        if (this.displayInput.value) {
            return parseInt(this.displayInput.value);
        } else {
            return 0;
        }
    }

    setDigitIntoDisplay(num) {
        if ((this.displayInput.value === '') && num === '0') {
            return;
        }
        else if (this.isOperatorClicked === true) {
            this.displayInput.value = num;
        }
        else {
            this.displayInput.value += num;
        }

    }

    initialize() {
        this.equalElement.addEventListener('click', (event) => {
            this.isFinished = true;
            this.numberToCalculate = this.displayValue;
            this.calculate();
        });

        for (let i = 0; i < this.operatorValueElements.length; i++) {
            this.operatorValueElements[i].addEventListener('click', (event) => {
                console.log("Clicked operator: " + this.operatorValueElements[i].name);
                this.setOperatorForCalculation(this.operatorValueElements[i].value);
            });
        }

        for (let i = 0; i < this.digitValueElements.length; i++) {
            this.digitValueElements[i].addEventListener('click', (event) => {
                console.log("Clicked index: " + i);
                this.setDigitIntoDisplay(this.digitValueElements[i].value);
            });
        }
        this.clearElement.addEventListener('click', (event) => {
            this.clearAll();
        });

    }

    setOperatorForCalculation(operatorValue) {
        this.isOperatorClicked = true;
        this.storedOperator = operatorValue;
        this.storedNumber = this.displayValue;
        this.clearTextInput();
    }

    calculate() {
        if (this.isFinished && this.storedOperator !== '') {
            switch (this.storedOperator) {
                case '+':
                    this.result = this.storedNumber + this.numberToCalculate;
                    break;
                case '-':
                    this.result = this.storedNumber - this.numberToCalculate;
                    break;
                case'*':
                    this.result = this.storedNumber * this.numberToCalculate;
                    break;
                case'/':
                    this.result = this.storedNumber / this.numberToCalculate;
                    break;
                default:
                    this.result = this.storedNumber;
                    break;
            }

        }
        this.displayInput.value = this.result;
        this.isOperatorClicked = false;
    }

    clearTextInput() {
        this.displayInput.value = '';
        this.isOperatorClicked = false;
    }

    clearAll() {
        this.clearTextInput();
        this.result = 0;
        this.numberToCalculate = 0;
    }
}

let calculator = new Calculator();
