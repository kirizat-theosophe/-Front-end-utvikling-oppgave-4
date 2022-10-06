const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");

const inpFargeBox1 = prompt("Hvilken farge velger du?(1.box)");
const inpBreddeBox1 = prompt("Hva skal bredden være?(1.box)");
const inpHoydeBox1 = prompt("Hva skal høyden være?(1.box");
const inpFargeBox2 = prompt("Hvilken farge velger du?(2.box)");
const inpBreddeBox2 = prompt("Hva skal bredden være?(2.box)");
const inpHoydeBox2 = prompt("Hva skal høyden være?(2.box");

const breddeBox1 = Number(inpBreddeBox1);
const hoydeBox1 = Number(inpHoydeBox1);
const breddeBox2 = Number(inpBreddeBox2);
const hoydeBox2 = Number(inpHoydeBox2);


function fargeBox1(farge,bredde,høyde){
    box1.innerHTML += `
        <div style="background-color: ${farge}; width:${bredde}px; height:${høyde}px"> 
        </div>
    `;
}

function fargeBox2(farge,bredde,høyde){
    box2.innerHTML += `
        <div style="background-color: ${farge}; width:${bredde}px; height:${høyde}px"> 
        </div>
    `;
}

fargeBox1(inpFargeBox1,breddeBox1,hoydeBox1);
fargeBox2(inpFargeBox2,breddeBox2,hoydeBox2);
