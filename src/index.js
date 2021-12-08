import {getHeroeById} from "./Bases/data/heroes";

const promesa = new Promise((resolve, reject) => {
    setTimeout(()=>{

        const p1 = getHeroeById(2);
       // console.log(heroes);
       resolve(p1);
        //reject('no se pudo importar');
    },2000)
});
promesa.then((heroes) =>{
    console.log('Then de heroe promesa', heroes)
})
.catch(err => console.warn(err));