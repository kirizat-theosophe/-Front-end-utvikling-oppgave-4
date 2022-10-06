const listeRetter = document.querySelector("#listeRetter");
const favorittRett1 = prompt("Hva er favorittretten din?(1.valg)");
const favorittRett2 = prompt("Hva er favorittretten din?(2.valg)");
const favorittRett3 = prompt("Hva er favorittretten din?(3.valg)");

function registrerRetter(r1,r2,r3){

    listeRetter.innerHTML += `
      <li>${r1}</li>
      <li>${r2}</li>
      <li>${r3}</li>
    `;
}

registrerRetter(favorittRett1,favorittRett2,favorittRett3);