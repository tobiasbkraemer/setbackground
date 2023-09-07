console.log("jeg er i konsollen")

const inpColor = document.querySelector(".inpColor")
console.log(inpColor)

const inpColorValue = document.querySelector(".inpColorValue")
console.log(inpColorValue)

const inpColorPicker = document.getElementById("inpColorPicker")

const pbSetColor = document.querySelector(".pbSetColor")
console.log(pbSetColor)
pbSetColor.textContent = "Tryk på mig for set color";

const bdy = document.querySelector("body");
console.log(bdy);

const pTags = document.getElementsByTagName("p")
console.log(pTags)

const pArray = Array.from(pTags)
console.log(pArray)

const increaseButton = document.getElementById("increaseButton");
console.log(increaseButton)

const decreaseButton = document.getElementById("decreaseButton");
console.log(decreaseButton)

let fontSize = 20


function increaseFontSize(element) {
    console.log(element)
    element.style.fontSize = fontSize + 'px';
    console.log("New font size: " + fontSize + "px");
}

function decreaseFontSize(element) {
    console.log(element)
    element.style.fontSize = fontSize + 'px';
    console.log("New font size: " + fontSize + "px");
}

function increaseFont() {
    fontSize ++;
    pArray.forEach(increaseFontSize)
}

function decreaseFont() {
    fontSize --;
    pArray.forEach(decreaseFontSize)
}


function setBackgroundColor() {
    let col = inpColor.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor
}

function useColorPicker() {
    let col = inpColorPicker.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor
}

pbSetColor.addEventListener("click", setBackgroundColor)
document.addEventListener("keyup", setBackgroundColor)
inpColorPicker.addEventListener("input", useColorPicker)
increaseButton.addEventListener("click", increaseFont)
decreaseButton.addEventListener("click", decreaseFont)