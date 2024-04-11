let memoryValue = 0;
const resultElement = document.getElementById('result');

function appendToResult(value) {
  resultElement.value += value;
}

function clearResult() {
  resultElement.value = '';
}

function calculate() {
  try {
    const result = eval(resultElement.value);
    if (!Number.isFinite(result) || isNaN(result)) {
      throw new Error('Invalid calculation');
    }
    if (Math.abs(result) >= 1e9) {
      resultElement.value = result.toExponential(0).replace("+", "");
    } else {
      resultElement.value = result;
    }
  } catch (error) {
    alert('Error: ' + error.message);
  }
}

function memoryRecall() {
  appendToResult(memoryValue);
}

function memoryAdd() {
  memoryValue += parseFloat(resultElement.value);
}

function memorySubtract() {
  memoryValue -= parseFloat(resultElement.value);
}

// Testing functionalities
function runBasicFunctionalityTests() {
  const testCases = [
    ['5+7', 12],
    ['10-3', 7],
    ['5*4', 20],
    ['20/4', 5],
    ['10+5', ''],
    ['-10+5', -5],
    ['0.1*5', 0.5],
    ['5', 15],
    ['10+5', '']
  ];

  testCases.forEach(([input, expected]) => {
    resultElement.value = input;
    calculate();
    console.assert(resultElement.value === (expected === '' ? '' : expected.toString()), `Test failed for: ${input}`);
  });
}

function runFunctionalTests() {
  // Functional test cases
}

function runBoundaryTests() {
  // Boundary test cases
}

