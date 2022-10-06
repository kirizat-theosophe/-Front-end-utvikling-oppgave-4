const inpSkriftSize = document.querySelector("#inpSkriftSize");
const inpTekstFarge = document.querySelector("#inpTekstFarge");
const inpBakgrunnsFarge = document.querySelector("#inpBakgrunnsFarge");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");

const SkriftSize = Number(inpSkriftSize);

function endreSkriftSize(evt){
    const storrelse = evt.target.value;
    p1.style.fontSize = storrelse + "px";
    p2.style.fontSize = storrelse + "px";
}

function endreFarge(evt){
    const farge = evt.target.value;
    p1.style.color = farge;
    p2.style.color = farge;
}

function endreBakgrunn(evt){
    const bakgrunnsfarge = evt.target.value;
    document.body.style.backgroundColor = bakgrunnsfarge;
}



inpSkriftSize.addEventListener("input",endreSkriftSize);
inpTekstFarge.addEventListener("input",endreFarge);
inpBakgrunnsFarge.addEventListener("input",endreBakgrunn);