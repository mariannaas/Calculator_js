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
        this.numberToCalculate = 0;
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
        else if (this.isOperatorClicked) {
            this.displayInput.value = num;
            this.isOperatorClicked = false;
            this.numberToCalculate = this.displayValue;
        }
        else {
            this.displayInput.value += num;
        }
    }


    initialize() {

        this.addElement.addEventListener('click', (event) => {
            this.add();
        });

        this.equalElement.addEventListener('click', (event) => {
            this.equation();
        });
        this.subtractElement.addEventListener('click', (event) => {
            this.subtract();
        });
        this.multiplyElement.addEventListener('click', (event) => {
            this.multiply();
        });
        this.divideElement.addEventListener('click', (event) => {
            this.divide();
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

    add() {
        this.result += this.numberToCalculate;
        this.clearResult();
    }

    subtract() {
        this.result -= this.numberToCalculate;
        this.clearResult();
    }

    multiply() {
        this.result *= this.numberToCalculate;
        this.clearResult();
    }

    divide() {
        this.result /= this.numberToCalculate;
        this.clearResult();
    }

    equation() {
        this.displayInput.value = this.result;
    }

    clearResult() {
        this.isOperatorClicked = true;
        this.displayInput.value = ''
    }

    clearAll() {
        this.clearResult();
        this.result = 0;
        this.numberToCalculate = 0;
    }
}

let calculator = new Calculator();
