console.log("JS Events");

// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click

const countClick = document.querySelector("#btnToClick");
countClick.addEventListener('click', function (event) {
  console.log(`Hemos hecho click`);
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

let input = document.getElementById('focus')
inpunt.addEventListener('focus')

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.