
let container;
const width = 560;
let size;
let row;
let square;
let colorSelector = document.querySelector("#colorinput")
let numOfGrid = document.querySelector("#numOfGrid")
let btnsubmit;
let color = colorSelector.value







function generatRow(num) {
  size = (width / num - 0.1);

  container = document.createElement("div")
  container.classList.add("container")

  document.querySelector("body").appendChild(container)

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



    container.addEventListener('mouseover', function (e) {
      // But only alert for elements that have an alert-button class
      if (e.target.classList.contains('squares')) {
        e.target.style.backgroundColor = color
      }
    });



  }

}

(generatRow(100))

colorSelector.addEventListener('input', () => {
  color = colorSelector.value;
});

document.getElementById("btnSubmit").onclick = function () {

  document.querySelectorAll(".container").forEach(e => e.remove());

  color = colorSelector.value;


  let value = numOfGrid.value

  generatRow(value)
}





