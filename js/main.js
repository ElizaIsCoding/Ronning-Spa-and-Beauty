let homePopup = document.getElementById('homePopup').getElementsByClassName('popupText')[0];


document.getElementById('btnHome').addEventListener('click', function() {
  homePopup.classList.toggle("show");
  homePopup.classList.toggle("popupText");

});

document.getElementById('btnClosePopup').addEventListener('click', function() {homePopup.classList.toggle("popupText");
  homePopup.classList.contains('show') ? homePopup.classList.remove('show'): homePopup.classList.add('popupText');
})
