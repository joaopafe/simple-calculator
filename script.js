function getCurrentCalculation() {
  return document.getElementById("calculation").innerText;
}

function updateCalculation(result) {
  document.getElementById("calculation").innerText = result;
}

function insertNumber(number) {
  const currentCalculation = getCurrentCalculation();

  if (!isNaN(number)) {
    document.getElementById("calculation").innerText =
      currentCalculation + number;
  }
}

function insertOperator(operator) {
  const currentCalculation = getCurrentCalculation();
  const lastCharacter = currentCalculation.slice(-1);

  if (!isNaN(lastCharacter) && operator != "=") {
    document.getElementById("calculation").innerText =
      currentCalculation + operator;
  }

  if (isNaN(lastCharacter) && operator != "=") {
    const newCurrentCalculation = currentCalculation.slice(0, -1) + operator;

    document.getElementById("calculation").innerText = newCurrentCalculation;
  }
}

function calculateResult(operator) {
  if (operator === "=") {
    let currentCalculation = getCurrentCalculation();
    const lastCharacter = currentCalculation.slice(-1);

    if (isNaN(lastCharacter)) {
      currentCalculation = currentCalculation.slice(0, -1);
    }

    const result = eval(currentCalculation);

    updateCalculation(result);

    document.getElementById("calculation-result").innerText = result;
  }
}

function resetCalculation() {
  document.getElementById("calculation").innerText = "";
  document.getElementById("calculation-result").innerText = "";
}
