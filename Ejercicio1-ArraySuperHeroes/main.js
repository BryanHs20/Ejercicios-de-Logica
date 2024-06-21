/*
    Enunciado 1:
    Dado un array o un objeto de superheroes de marvel, haz un programa
    que pueda mostrar la información de un superhéroe

    Y añade la capacidad de buscar la información de varios 
    superheroes a la vez
*/

// Creación del Array
const superHeroes = {
    'IronMan': {
        name: "Tony Stark",
        powers: ['Super tecnología', 'Vuelo', 'Escudo vórtice'],
        team: "Los Vengadores"
    },
    'SpiderMan': {
        name: "Peter Parker",
        powers: ['Super agilidad', 'Lanza telarañas', 'Sentido arácnido'],
        team: "Solitario"
    },
    'Wolverine': {
        name: "Logan",
        powers: ['Super regeneración', 'Buenos reflejos', 'Garras de andamantium'],
        team: "X-Men"
    },
    'Hulk': {
        name: "Bruce Banner",
        powers: ['Super fuerza', 'Super salto', 'Descontrol'],
        team: "Los Vengadores"
    },
    'Mystic':
    {
        name: "Nataly",
        powers: ['Cambio de piel', 'Super fuerza'],
        team: "X-Men"
    },
    'Deadpool':
    {
        name: "Waite",
        powers: ['Super regeneración', 'Habilidad con armas', 'Buen humor'],
        team: "Solitario"
    }
};

// Mi forma
const mostrarInfoIndividual = (apodo) => {

    // Comprobamos si el superhéroe existe dentro del array
    console.log("########## "+apodo+" ##########");
    if(apodo in superHeroes){
        // Conseguimos la información y la mostramos
        console.log("Nombre: " + superHeroes[apodo].name);
        console.log("Poderes: " + superHeroes[apodo].powers.join(", ")); //El join sirve para separar y unir los elementos del array de la forma en la que digamos
        console.log("Equipo: " + superHeroes[apodo].team);
        console.log("")

    }else{
        console.log(`${apodo} no esta en la lista`);
    };
};

const mostrarInfoTodos = (apodo) => {
    apodo.forEach(nombre => {
        mostrarInfoIndividual(nombre);
    });
};

mostrarInfoIndividual("Hulk");
mostrarInfoTodos(["SpiderMan", "Deadpool", "Harley Quin", "Joker", "Wolverine", "Mystic"]);

// Forma alterna
// function mostrarInfoindividualSuperheroe(apodo) {

//     // Comprobamos si el superhéroe existe dentro del array
//     if(apodo in superHeroes){
//         // Conseguimos la información
//         const info = superHeroes[apodo];

//         // Mostramos la información
//         console.log(`Nombre: ${info.name}`);
//         console.log(`Poderes: ${info.powers.join(", ")}`);
//         console.log(`Equipo: ${info.team}`);

//     }else{
//         console.log(`${apodo} no esta en la lista`);
//     };
// };

// mostrarInfoindividualSuperheroe("Hulk");
