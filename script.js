const container = document.querySelector(".container");

let numberOfDiv = 16 * 16;

function addElement(number) {
  let newDiv = "";

  for (let index = 0; index < number - 1; index++) {
    newDiv += `<div><p>${index}</p></div>`;
  }

  container.innerHTML = newDiv;
}

addElement(numberOfDiv);
