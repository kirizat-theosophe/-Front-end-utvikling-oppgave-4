const inpOverskrift = document.querySelector("#inpOverskrift");
const inpBilde = document.querySelector("#inpBilde");
const knapp = document.querySelector("#knapp");
const nyhetsartikkel = document.querySelector("#nyhetsartikkel");
const output = document.querySelector("#output");

function lagArtikkel(){
    const bilde = inpBilde.value;
    const overskrift = inpOverskrift.value;
    nyhetsartikkel.innerHTML += `
        <article>
            <img src="${bilde}">
            <h2>${overskrift}</h2>
        </article>
    `;
}

knapp.addEventListener("click",lagArtikkel);

