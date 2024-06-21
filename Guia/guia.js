// Alertas
// alert("Esta es una alerta en JS")

// Variables
let userName = "Ryan Hz";
userName = "Bran Hernandez";
let altura = 1.75;

// Constante
const PI = 3.1426;

// Concatenación
let conca = userName + " " + PI;

// Mostrar consola
console.log(userName);
console.log(PI);
console.log(conca);

// Seccionar elementos de la pagina
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <hr>
    <h1>Seleccionar elementos desde la pagina</h1>
    <h2>Mi nombre es ${userName}</h2>
    <h3>Y el valor de PI es ${PI}</h3>
    <hr>`;

// Condiciones
datos.innerHTML += "<h1>Condiciones en JS</h1>";
if (altura >= 1.70) {
    console.log("Eres alto");
    datos.innerHTML += `<h2>Eres una persona alta ya que mides ${altura}</h2><hr>`;
} else {
    console.log("Eres bajo");
    datos.innerHTML += `<h2>Eres una persona baja ya que mides menos de 1.70</h2>
    <hr>`;
}

// Bucles
console.log("Bucles en JS")
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

datos.innerHTML += "<h1>Bucles en JS</h1>";
for (let year = 2015; year <= 2024; year++) {
    datos.innerHTML += `<h3>Estamos en el año : ${year}</h3>`;
}

// Arrays
let nombres = ["Victor", "Pablo", "Fabian", "Marcelo"];

let divNombres = document.querySelector("#nombres");

divNombres.innerHTML = nombres[2]; // Por indice

nombres.forEach(nombres => {
    divNombres.innerHTML += `<li>${nombres}</li>\n`; // Por bucle
});

// Funciones

datos.innerHTML += `<hr><h1>Funciones en JS</h1>`;
const miInformacion = (nombre, altura) => {
    let misDatos = `
    <h2>Soy la caja de datos</h2>
    <h2>Mi nombre es ${userName}</h2>
    <h3>Y mido ${altura}</h3><hr>`;

    return misDatos;

};

const imprimir = () => {
    let datos = document.querySelector("#datos");
    datos.innerHTML += miInformacion("Ryan Hz", 175);
}

imprimir();

// Objetos
datos.innerHTML += "<h1>Objetos en JS</h1>"
let coche = {
    modelo: 'Mercedes Clase A',
    maxVel: '320km/h',
    año: '2019',
    color: 'Escarlata',
    mostrarDatos() {
        console.log(this.modelo, this.maxVel, this.año, this.color);
    }
};

document.write(`<h3>${coche.modelo}</h3>`);
document.write(`<h3>${coche.maxVel}</h3>`);
document.write(`<h3>${coche.año}</h3>`);
document.write(`<h3>${coche.color}</h3>`);
coche.mostrarDatos();

// Promesas (Representa un valor que puede estar, ahora, después, o nunca)
let saludar = new Promise((resolve, reject) => {

    setTimeout(() => {
        let saludo = "Hola como estas?";

        if (saludo) {
            resolve(saludo);
        } else {
            reject("No se pudo saludar");
        }

    }, 2000);

});

saludar.then(resultado => {
    // alert(resultado);
}).catch(error => {
    // alert(error);
});

// Clases
class Coche {
    constructor(modelo, velocidad, año, puertas) {
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.año = año;
        this.puertas = puertas;
    }

    aumentarVelocidad() {
        this.velocidad += 10;
    }

    reducirVelocidad() {
        this.velocidad -= 10;
    }

}

let cocheNum1 = new Coche('BMW', 250, 2019, 4);
let cocheNum2 = new Coche('Mercedes', 320, 2017, 2);
let cocheNum3 = new Coche('Fort', 200, 2023, 2);
let cocheNum4 = new Coche('Audi', 220, 2020, 2);

console.log(cocheNum1);
console.log(cocheNum3);
document.write("<h1>Clases en JS</h1>");
document.write(`<h3>La velocidad del ${cocheNum1.modelo} es de ${cocheNum1.velocidad}</h3>`);
document.write(`<h3>La velocidad del ${cocheNum4.modelo} es de ${cocheNum4.velocidad}</h3>`);

cocheNum4.aumentarVelocidad();
cocheNum4.aumentarVelocidad();
cocheNum4.aumentarVelocidad();

document.write(`<h3>Ahora la velocidad del ${cocheNum4.modelo} es de ${cocheNum4.velocidad}</h3>`)


// Herencia
class Autobus extends Coche {
    constructor(modelo, velocidad, año, puertas){
        super(modelo, velocidad, año, puertas);
        this.asientos = 25;
    }

    aumentarAsientos(){
        this.asientos += 1
    }

}

let autobusNum1 = new Autobus('ODT', 130, 2019, 2);
let autobusNum2 = new Autobus('Tizatuca', 120, 2015, 1);

console.log(autobusNum1);
console.log(autobusNum1);

autobusNum1.aumentarAsientos();
autobusNum1.aumentarAsientos();
autobusNum1.aumentarAsientos();
autobusNum1.aumentarAsientos();
autobusNum1.aumentarAsientos();

document.write("<h1>Herencias en JS</h1>")
document.write(`<h3>El año del camion ${autobusNum1.modelo} es de ${autobusNum1.año} y tiene ${autobusNum1.asientos} asientos</h3>`);
document.write(`<h3>El año del camion ${autobusNum2.modelo} es de ${autobusNum2.año} y tiene ${autobusNum2.asientos} asientos</h3>`);
