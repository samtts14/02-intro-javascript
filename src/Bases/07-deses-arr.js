const equipos=['Aguilas', 'Toros', 'estrellas'];
const [posicion]= equipos;
console.log(posicion);

const uoEstado=(valor)=>{
    return [valor, ()=>{console.log("hola")}];
}

const [nombre, setNombre]= uoEstado('lol');
console.log(nombre);
setNombre();