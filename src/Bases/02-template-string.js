const nameC = 'Juan';
const apellido= 'Toribio';

const nombreCompleto= `${nameC} ${apellido}`;
console.log(nombreCompleto);

function getHola(nameC){
    return nameC;
}
console.log(`Te llamas: ${getHola(nameC)} ${getHola(apellido)}`)
