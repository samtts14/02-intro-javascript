//Funciones en JS
//Estructura de funcion, pero no es recomendable.
function saludar(nombre){
    return `hola, ${nombre}`;
}
//puede ser asi


//Funcion de flecha
const saludar2 = (nombre)=>{
    return `hola, ${nombre}`;
}
//La misma funcion de arriba pero corta
const saludar3 = (nombre)=> `hola, ${nombre}`;

console.log(saludar);
console.log(saludar2('hola'));
console.log(saludar3('hola 3'));