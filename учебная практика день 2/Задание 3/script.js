document.getElementById("textInput").addEventListener("input", function () {
    var text = document.getElementById("textInput").value;
    document.getElementById("text").textContent = text;
});

function changeFontSize(size) {
    document.getElementById("text").style.fontSize = size + "px";
}

function changeFontStyle(style) {
    document.getElementById("text").style.fontStyle = style;
}



function changeColor(color) {
    document.body.style.backgroundColor = color;
}




function turnOn() {
    document.body.style.backgroundColor = "#ffffff";
}

function turnOff() {
    document.body.style.backgroundColor = "#000000";
}

function makeBright() {
    document.body.style.opacity = "1.5";
}

function makeDark() {
    document.body.style.opacity = "-0.5";
}

function reset() {
    document.body.style.backgroundColor = '';
    document.body.style.opacity = '';
}





let buttonCount = 1;

function createButton() {
  let button = document.createElement("button");
  button.innerHTML = "Новая кнопка ";
  document.getElementById("buttonContainer").appendChild(button);
  buttonCount++;
}