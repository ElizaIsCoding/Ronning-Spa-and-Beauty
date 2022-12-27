//function that is calling a popup window
document.getElementById('buttonClicked').addEventListener('click', function() {
  alert('Button clicked!');
});

//Function that is logging message to the console
document.getElementById('consoleButton').addEventListener('click', function() {
  console.log('Here is the message.');
});

document.getElementById('buttonCalculate').addEventListener('click', function() {
  let empName = '';
  let hoursWorked = 0;
  let rateOfPay = 0;
  let taxRate = 5;

  //user is entering the values in prompt location and values get assigned to the variables.
  empName = prompt('Enter user name: ');
  hoursWorked = prompt('Enter hours worked: ');
  rateOfPay = prompt('Enter rate of pay: ');

//calculations done upon entry of the values
  let salary = hoursWorked * rateOfPay;
  let taxPaid = (salary * taxRate)/100;
  let netPay = salary - taxPaid;

  //creating a popup window with calculated info
  alert('Employee: ' + empName + '\n' +
    'Gross pay: ' + salary + '\n' +
    'Tax paid: ' + taxPaid + '\n' +
    'Net Pay: ' + netPay);


  //displaying all the values in the console
  console.log('Employee: ' + empName + ' ' +
    ' Gross pay: ' + salary + ' ' +
    ' Tax paid: ' + taxPaid + ' ' +
    ' Net Pay: ' + netPay);
})

let lJsPopup = document.getElementById('learningPopup').getElementsByClassName('popupText')[0];
let button = document.getElementById('btnLearning');

button.addEventListener('click', function() {
  lJsPopup.classList.toggle("show");
  lJsPopup.classList.toggle("popupText");

  //modifying DOM
  lJsPopup.classList.contains("show") ?
    button.style.background = '#9F95F0' : button.style.background = '#D1D5F6';
});

document.getElementById('btnClosePopup').addEventListener('click', function() {
  if(lJsPopup.classList.contains('show')) {
    lJsPopup.classList.remove('show')
    button.style.background = '#D1D5F6'
    lJsPopup.classList.add('popupText')
  }
})
