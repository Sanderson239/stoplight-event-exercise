

var buttons = document.getElementsByClassName('button');
var bulb = document.getElementsByClassName('bulb');

var lights = ['stop', 'slow', 'go'];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    bulb[i].classList.toggle(`${lights[i]}`);
  });
};
