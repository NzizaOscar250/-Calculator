let expression = "";

function updateDisplay() {
  document.getElementById("display").value = expression;
}

function appendNumber(num) {
  expression += num;
  updateDisplay();
}

function appendOperator(op) {
  expression += " " + op + " ";
  updateDisplay();
}

function appendDecimal() {
  if (expression === "" || expression.endsWith(" ")) {
    expression += "0.";
  } else if (!expression.includes(".")) {
    expression += ".";
  }
  updateDisplay();
}

function clearDisplay() {
  expression = "";
  updateDisplay();
}

function deleteLastChar() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(expression);
    expression = String(result);
    updateDisplay();
  } catch (error) {
    expression = "Error";
    updateDisplay();
  }
}

updateDisplay();
