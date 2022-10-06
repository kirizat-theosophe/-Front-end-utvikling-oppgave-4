const arrangementoversikt = document.querySelector("#arrangementoversikt");
const inpBilde = document.querySelector("#inpBilde");
const inpTittel = document.querySelector("#inpTittel");
const inpUkedag = document.querySelector("#inpUkedag");
const inpDato = document.querySelector("#inpDato");
const inpAdresse = document.querySelector("#inpAdresse");
const inpGjester = document.querySelector("#inpGjester");
const knapp = document.querySelector("#knapp");

function opprettArrangement(){
    const bilde = inpBilde.value;
    const tittel = inpTittel.value;
    const ukedag = inpUkedag.value;
    const dato = inpDato.value;
    const adresse = inpAdresse.value;
    const gjester = inpGjester.value;
    arrangementoversikt.innerHTML += `
        <section class="arrangement">
            <div class="bilde">
                <img src="${bilde}">
            </div>
            <div class="tekstboks">
                <h3>${tittel}</h3>
                <p>${ukedag}, ${dato} at ${adresse}</p>
                <p id="grey">${gjester} guests</p>
                <a href="">Interested</a>
                <a href="">Going</a>
            </div>
        </section>
    `;
}

knapp.addEventListener("click",opprettArrangement);

