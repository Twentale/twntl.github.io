var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dirt.png') {
      myImage.setAttribute ('src','images/stiv.png');
    } else {
      myImage.setAttribute ('src','images/dirt.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Введите своё имя.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Добро пожаловать, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Добро пожаловать, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}