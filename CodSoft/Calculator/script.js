let displayValue = '0';

function appendToDisplay(value) {
  if (displayValue === '0') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  document.getElementById('result').value = displayValue;
}

function clearDisplay() {
  displayValue = '0';
  document.getElementById('result').value = displayValue;
}

function backspace() {
  if (displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1);
  } else {
    displayValue = '0';
  }
  document.getElementById('result').value = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
    document.getElementById('result').value = displayValue;
  } catch (error) {
    alert('Invalid expression');
  }
}
