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
        this.isOperatorClicked = false;
        this.initialize();
    }

    get displayValue() {
        if (this.displayInput.value) {
            return parseInt(this.displayInput.value);
        } else {
            return 0;
        }
    }
    setDigitIntoDisplay(num){
        if ((this.displayInput.value === "") && num === "0") {
            return;
        }
        else if (this.isOperatorClicked === true) {
            this.displayInput.value = num;
            this.isOperatorClicked = false;
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
        for(let i = 0; i < this.digitValueElements.length; i++) {
            this.digitValueElements[i].addEventListener('click', (event) => {
                console.log("Clicked index: " + i);
                this.setDigitIntoDisplay(this.digitValueElements[i].value);
            })
        }

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
    divide() {
        this.result /= this.displayValue;
        this.clearResult();
    }
    equation() {
        this.displayInput.value = this.result;
     }

    clearResult() {
        this.isOperatorClicked = true;
        this.displayInput.value = '';
    }

}

let calculator = new Calculator();
