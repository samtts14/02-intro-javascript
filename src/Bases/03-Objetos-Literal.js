const persona ={
    nombre: "Marcos", apellido: "Abreu",
    dirccion: {
        ciudad: "La vega",
    }
};

const persona2= {...persona}//Los 3 puntos es para hacer un clon del objeto
persona2.nombre = "Elpen";

console.log(persona);
console.log(persona2);
