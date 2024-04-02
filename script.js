
const container = document.querySelector(".container");
const width = 560;
let size;
let row;
let square;
let colorSelector = document.querySelector("#colorinput")
let numOfGrid = document.querySelector("#numOfGrid")
let btnsubmit;







function generatRow(num) {
  size = (width / num - 0.1);

  for (let i = 0; i < num - 1; i++) {

    row = document.createElement("div")
    row.style.width = (size + "px")
    row.style.height = (size + "px")
    row.classList.add("newdiv")

    container.appendChild(row)
    for (let i = 0; i < num - 1; i++) {

      square = document.createElement("div")
      square.style.width = (size + "px")
      square.style.height = (size + "px")
      square.classList.add("squares")

      row.appendChild(square)



    }





  }

}

(generatRow(100))


function addcolor(p) {
  square.style.backgroundColor = p;

}


container.addEventListener('mouseover', function (e) {
  // But only alert for elements that have an alert-button class
  if (e.target.classList.contains('squares')) {
    e.target.classList.add("squareOver")
  }
});





document.getElementById("btnSubmit").onclick = function () {
  let s = document.querySelector("newdiv")
  container.removeChild(row)
  let value = numOfGrid.value
  let colorValue = colorSelector.value

  addcolor(colorValue)
  generatRow(value)
}