function appendValue(val) {
  const display = document.getElementById("display");
  if (val === 'π') val = Math.PI;
  if (val === 'e') val = Math.E;
  display.value += val;
}

function clearDisplay() {
  document.getElementById("display").value = '';
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let expr = document.getElementById("display").value;

  try {
    // Replace functions with Math methods
    expr = expr.replace(/sin\(/g, 'Math.sin(')
               .replace(/cos\(/g, 'Math.cos(')
               .replace(/tan\(/g, 'Math.tan(')
               .replace(/log\(/g, 'Math.log10(')
               .replace(/sqrt\(/g, 'Math.sqrt(')
               .replace(/\^/g, '**');

    const result = eval(expr);
    document.getElementById("display").value = result;
  } catch (err) {
    document.getElementById("display").value = "Error";
  }
}
