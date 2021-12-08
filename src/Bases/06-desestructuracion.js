//desestructuracion
const persona = {
    nombre: 'Juan',
    apellido: 'Lopez',
    edad: 34,
    clave: 'Elpen',

};
//const{edad, nombre,apellido} = persona;

//console.log(persona);

const retornarPersona = (usuario)=> {
    const{edad, nombre,apellido} = usuario;

     console.log(edad,nombre,apellido);
}
retornarPersona(persona);

//-----------------
const rango = 'capitan';
const retornarPersona2 = ({nombre, edad, r=rango})=> {
    //const{edad, nombre,apellido} = usuario;

    // console.log(edad,nombre, r);
    
}
retornarPersona2(persona);