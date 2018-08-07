class Calculator {

    constructor() {
        this.result = 0;
        this.addElement = document.getElementsByName('add')[0];
        this.subtractElement = document.getElementsByName('subtract')[0];
        this.multiplyElement = document.getElementsByName('multiply')[0];
        this.divideElement = document.getElementsByName('divide')[0];
        this.equalElement = document.getElementsByName('calculate')[0];
        this.displayInput = document.getElementById("display");
        this.digitValueElements = document.getElementsByClassName('digit');
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

        this.addElement.addEventListener('click', (event) => {
            this.isOperatorClicked = true;
            this.storedOperator = this.addElement.value;
            this.storedNumber = this.displayValue;
            this.clearTextInput();
        });
        this.equalElement.addEventListener('click', (event) => {
            this.isFinished = true;
            this.numberToCalculate = this.displayValue;
            this.calculate();
        });
        this.subtractElement.addEventListener('click', (event) => {
            this.isOperatorClicked = true;
            this.storedOperator = this.subtractElement.value;
            this.storedNumber = this.displayValue;
            this.clearTextInput();
        });
        this.multiplyElement.addEventListener('click', (event) => {
            this.isOperatorClicked = true;
            this.storedOperator = this.multiplyElement.value;
            this.storedNumber = this.displayValue;
            this.clearTextInput();
        });
        this.divideElement.addEventListener('click', (event) => {
            this.isOperatorClicked = true;
            this.storedOperator = this.divideElement.value;
            this.storedNumber = this.displayValue;
            this.clearTextInput();
        });
                
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

    add() {
        this.result = this.storedNumber + this.numberToCalculate;
        this.clearTextInput();
    }

    subtract() {
        this.result = this.storedNumber - this.numberToCalculate;
        this.clearTextInput();
    }

    multiply() {
        this.result = this.storedNumber * this.numberToCalculate;
        this.clearTextInput();
    }

    divide() {
        this.result = this.storedNumber / this.numberToCalculate;
        this.clearTextInput();
    }

    equation() {
        this.calculate();
        this.displayInput.value = this.result;
        this.storedNumber = 0;
        this.numberToCalculate = 0;
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
