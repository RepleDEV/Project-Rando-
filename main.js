//All of the main constants
const inp = document.getElementById("input");
const applyBtn = document.getElementById("apply");
const mDiv = document.getElementById("divMain");
const lP = document.getElementById("listP");
const calc = document.getElementById("calc");
const randRes = document.getElementById("res");
const reset = document.getElementById("reset");

//List Global Array
let list = [];
//Index Global Variable
let i = 0;

//Function that allows you to press the "Enter" key to add an item
inp.addEventListener("keyup", event => {if(event.keyCode === 13){event.preventDefault(); document.getElementById("apply").click();}});

//Add List Function
applyBtn.onclick = () => {
    //Adds the item into "list" array
    list.push(inp.value);
    //Resets the input box
    inp.value = ""
    //Writes the list into the <p> tag
    if (i > 0){lP.innerHTML = lP.innerHTML + ", " + list[i];} else {lP.innerHTML = "List: " + list[i];}
    //Increments the "i" (index) global variable (let)
    i++;
};

//Reset Button function
reset.onclick = () => {list = []; i = 0; lP.innerHTML = " "; randRes.innerHTML = "";}

//RNG Calculate Function
calc.onclick = () => {
    var rng = Math.floor(Math.random() * i);
    randRes.innerHTML = ""
    if (i == 0){randRes.innerHTML = "You need to add an item to the list first!"} else {randRes.innerHTML = randRes.innerHTML + "Randomizer results: " + list[rng];}
}