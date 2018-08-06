class Calculator {
    constructor() {
        this.result = 0;
        this.addElement = document.getElementsByName('add')[0];
        this.equalElement = document.getElementsByName('calculate')[0];
        this.displayInput = document.getElementById("display");

        this.initialize();
    }

    get displayValue() {
        if(this.displayInput.value) {
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
    }

    add() {
        this.result += this.displayValue;

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

displayNum = "";
storedNum = "";
operation = 0;
queuedOperation = 0;
calculationFinished = false;

function clearDisplay() {
    let display = document.getElementById("display");
    displayNum = "";
    storedNum = "";
    operation = 0;
    queuedOperation = 0;
    display.value = displayNum;
}

function numInput(num) {
    let display = document.getElementById("display");

    if ((display.value == "") && num == "0") {
        return;
    }
    else if (calculationFinished == true) {
        display.value = num;
        calculationFinished = false;
    }
    else {
        display.value += num;
    }
}

function setOperation(command) {
    let display = document.getElementById("display");

    displayNum = display.value;
    evalDisplay = eval(displayNum);
    evalStored = eval(storedNum);

    if (queuedOperation === 0) {
        storedNum = display.value;
    }
    else if (queuedOperation === 1) {
        storedNum = evalStored + evalDisplay;
    }
    else if (queuedOperation === 2) {
        storedNum = evalStored - evalDisplay;
    }
    else if (queuedOperation === 3) {
    }
}

function calculateFormula() {
    let display = document.getElementById("display");
    displayNum = display.value;
    let evalDisplay = eval(displayNum),
        evalStored = eval(storedNum);


    operation = 0;
    queuedOperation = 0;
    displayNum = "";
    storedNum = "";
}
