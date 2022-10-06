const firkant = document.querySelector("#firkant");
const inpX = document.querySelector("#inpX");
const inpY = document.querySelector("#inpY");

const x = Number(inpX);
const y = Number(inpY);

function flyttFirkantX(evt){
    firkant.style.left = evt.target.value + "vw";
}

function flyttFirkantY(evt){
    firkant.style.top = evt.target.value + "px";
}

inpX.addEventListener("input",flyttFirkantX);
inpY.addEventListener("input",flyttFirkantY);
