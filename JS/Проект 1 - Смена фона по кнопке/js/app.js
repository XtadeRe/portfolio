const button = document.getElementById("btn");
const color = document.querySelector(".color");


const hex = [
    "0",
    "1", 
    "2", 
    "3", 
    "4", 
    "5", 
    "6", 
    "7", 
    "8", 
    "9", 
    "A", 
    "B", 
    "C", 
    "D", 
    "E", 
    "F"
];

button.addEventListener("click", () => {
    let hexcolor = generateHex();
    document.body.style.backgroundColor = hexcolor;
    color.textContent = hexcolor;
});

function generateHex() {
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
        hexcolor += hex[getRandomColor()];
    }

    return hexcolor;
}

function getRandomColor() {
    return Math.floor(Math.random() * hex.length);
}
