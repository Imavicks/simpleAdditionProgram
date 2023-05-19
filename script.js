//create a function to calculate sum
function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = num1 + num2;
    document.getElementById('result').textContent = 'Result: ' + sum;
  }
  //call the btn class and add an event listener
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', calculateSum);