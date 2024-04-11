function appendToResult(value) {
    document.getElementById('result').value += value;
  }

  function clearResult() {
    document.getElementById('result').value = '';
  }

  function calculate() {
    try {
      var result = eval(document.getElementById('result').value);
      if (result === Infinity || isNaN(result)) {
        throw new Error('Invalid calculation');
      }
      document.getElementById('result').value = result;
    } catch (error) {
      alert('Error: ' + error.message);
    }
  }