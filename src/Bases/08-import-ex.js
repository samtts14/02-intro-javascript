import heroes from'./Bases/data/heroes';

//console.log(heroes);

export const getHeroeById = (id)=>{
    return heroes.find((heroes)=> heroes.id === id);
}

//console.log(getHeroeById(2)); 

export const getHeroeByOwner = (owner)=>{
    return heroes.filter((heroes)=> heroes.owner === owner);
}

//console.log(getHeroeByOwner('DC')); 