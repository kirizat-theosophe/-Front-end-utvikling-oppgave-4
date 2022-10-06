

const bredde = parseInt(prompt("enter a bredde"));
const høyde = parseInt(prompt("enter a høyde"));


function finnrecTangle(bredde, høyde){
    const area = (bredde * høyde);
    document.write("rectangle" + area + "centimeter" )
}

finnrecTangle( Number(bredde), Number(høyde) );
