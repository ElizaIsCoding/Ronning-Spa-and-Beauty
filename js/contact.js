
// buttons
let submit = document.getElementById('btmSubmitForm');


// form fields
let userName = document.getElementById('inputName');
let userSurname = document.getElementById('inputSurname');
let userEmail = document.getElementById('inputEmail4');
let userMobile = document.getElementById('inputMobile');



// setting values from input into local storage
submit.addEventListener('click', function() {
  localStorage.setItem('UserName', (`${userName.value + ' ' + userSurname.value}`));
  localStorage.setItem('UserEmail', userEmail.value);
  localStorage.setItem('UserMobile', userMobile.value);
 if(userName.value && userSurname.value) {
   alert('Your request has been successfully submitted');
 }
});


//calling method clear() on localStorage window object
function myFunction() {
  let myInterval = 0.2*60*1000; // 10 sec interval
  setInterval(() => localStorage.clear(), myInterval );
}






