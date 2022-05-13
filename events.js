console.log("JS Events");

// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click

function eventClick(event) {
  console.log(event);
};

document.getElementById('#btnToClick')
addEventListener('click', eventClick)

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

let eventFocus = function () {
  console.log(input.value);
}

const input = document.querySelector('input[class="focus"]');
input.addEventListener("focus", eventFocus);

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const input2 = document.querySelector('input');
const log = document.getElementById('value');

function updateValue() {
  console.log(input2.value);
};

input2.addEventListener('input', updateValue);

