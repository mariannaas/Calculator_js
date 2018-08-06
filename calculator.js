class Calculator {
    constructor() {
        this.result = 0;
        this.addElement = document.getElementsByName('add')[0];
        this.addElement = document.getElementsByName('subtract')[0];
        this.addElement = document.getElementsByName('multiply')[0];
        this.equalElement = document.getElementsByName('calculate')[0];
        this.displayInput = document.getElementById("display");

        this.initialize();
    }

    get displayValue() {
        if (this.displayInput.value) {
            return parseInt(this.displayInput.value);
        } else {
            return 0;
        }
    }

    initialize() {
        this.addElement.addEventListener('click', (event) => {
            this.add();
        });

        this.equalElement.addEventListener('click', (event) => {
            this.equation();
        });
        this.equalElement.addEventListener('click', (event) => {
            this.subtract();
        });
        this.equalElement.addEventListener('click', (event) => {
            this.multiply();
        });
    }

    add() {
        this.result += this.displayValue;
        this.clearResult();
    }

    subtract() {
        this.result -= this.displayValue;
        this.clearResult();
    }

    multiply() {
        this.result *= this.displayValue;
        this.clearResult();
    }
    equation() {
        this.displayInput.value = this.result;
    }

    clearResult() {
        this.displayInput.value = '';
    }

}

let calculator = new Calculator();
