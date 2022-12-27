let popup = document.getElementById('productPopup').getElementsByClassName('popupText')[0];
let btnClosePopup = document.getElementById('btnClosePopup');
let btnProduct = document.getElementById('btnProduct');


btnProduct.addEventListener('click', function() {
  popup.classList.toggle("show");
  popup.classList.toggle("popupText");
});

btnClosePopup.addEventListener('click', function() {
  popup.classList.toggle("popupText");
  popup.classList.contains('show') ? popup.classList.remove('show'): popup.classList.add('popupText');
});
