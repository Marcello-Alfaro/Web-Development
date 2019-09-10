/* Convertir grados F a C o viceversa 
    Formula para C = (F - 32) * 5/9 */
/* 
var c, f, resultado;

f = prompt("Digite los grados en F");

resultado = (f - 32) * 5 / 9;

alert(resultado); */

/* let gasolina = 100;

while (gasolina > 0) {
    console.log("Gasolina " + gasolina);
    gasolina--;

}

console.log("Ya no hay gasoline"); */

/* let num = 7;
let limite = 20;

for(i = 1; i <= limite; i++){
    console.log("" + i + " * " + num + " = " + "" + i*num);
}
 */


/* OBJETOS */

/*  let persona = {
     nombre: 'Marcello',
     edad: 32,
     estatura: 1.79
 }

 console.log(persona.nombre);

 function describirPersona(x){
     console.log(`${x.nombre} tiene una edad de ${x.edad} y una 
     estatura de ${x.estatura}`);
 }

 describirPersona(persona);
 */

/*  VECTOR DE OBJETOS */

/* let persona1 = {
    nombre: 'Marcello',
    edad: 20
};

let persona2 = {
    nombre: "Melissa",
    edad: 27
};

let persona3 = {
    nombre: "Fernando",
    edad: 30
};

let personas = [persona1, persona2, persona3];
 */
/* console.log(personas);

for (let i = 0; i < personas.length; i++) {
    /* console.log("" + personas[i].nombre + " edad " + personas[i].edad);     */
/* console.log(`${personas[i].nombre} edad ${personas[i].edad}`); */
//} 

/* CLASES
Al igual que los objetos, pueden ser
representaciones abastractas de cosas */

/* METODOS
Son funciones relacionadas a la clase
y cualquier variable que sea una 
instancia de la clase, tendra esas funciones */

/* let carro = {
    marca: 'Toyota',
    tipo: 'Sedan',
    puertas: 3
};
 */
/* let carro2 = {
    marca: 'Honda',
    tipo: 'Sedan',
    puertas: 3
};

let carro3 = {
    marca: 'Mazda',
    tipo: 'Sedan',
    puertas: 4
}; */

/* class Carro {

    constructor(marca, tipo, puertas) {
        this.marca = marca;
        this.tipo = tipo;
        this.puertas = puertas;
        this.creadoEn = 'hoy'
        this.encendido = false;
        this.gasolina = 100;
    }

    encenderCarro() {
        if (this.encendido) {
            console.error('El carro ya esta encendido');
        } else {
            this.encendido = true;
            console.log('El carro esta encendido');
        }
        return this;
    }

    realizarViaje(consumo) {

        if (!this.encendido) return console.log('Carro Apagado');

        if (consumo > this.gasolina) return console.log('No se puede realizar el viaje');

        this.gasolina -= consumo;
        console.log('Le queda ' + this.gasolina);

    }


}

let carro = new Carro('Mazda', 'Sedan', 2);

console.log(carro);

 */

/*  let kilogramValue = 0.453592;

 let pounds = 5;

 let resultado;
 resultado = pounds * kilogramValue;
console.log(pounds + ' pounds is ' + resultado + ' kilograms'); 
 */

/* let valorMilla = 0.62;

let kilometros = 5;

resultado = kilometros * valorMilla;

console.log(resultado); */

/* let base = 4;
let altura = 3;
let area = (base * altura) / 2;

console.log(area); */

/* let numeros = [1,6,8,4,2,7,10,3,5];
let mayor = 0;
for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] > mayor) mayor = numeros[i];
}

console.log(mayor);
 */

/* let numeros = [1,6,8,4,2,7,10,3,5];
for (let i = 0; i < numeros.length; i++) {
    (numeros[i] % 2 == 0) ? console.log(numeros[i] + ' es par') : console.log(numeros[i] + ' es impar');
} */

/* 
let num = 1;
for (let i = 1; i <= 5; i++) {
    let espacio = '';
    for (let j = 1; j <= 5; j++) {
        espacio += `${j * i}    `;
    }
    console.log(espacio);
}
 */

/*  function max(a, b, c){
     let mayor = -99999999;
    num = [a, b, c];
    for (let i = 0; i < num.length; i++) {
       if (num[i] > mayor) mayor = num[i];
    }
    return mayor;
 }

 function maxA(a, b, c){
    let mayor;
    if(a > b && a > c){
        mayor = a;
    }else if(b > a && b > c){
        mayor = b;
    }else{
        mayor = c;
    }
    return mayor;
 }

 let mayor = maxA(8,100,1);
 console.log(mayor); */

/*  function masLargo(arr){
     let nombreLargo = '';

     for (let i = 0; i < arr.length; i++) {
         let nombre = arr[i];
        if(nombre.length > nombreLargo.length){
           nombreLargo = nombre;
        }     
     }

    return nombreLargo;
 }

 let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];

 let heroeLargo = masLargo(heroes);
 console.log(heroeLargo);
  */

function filtrarPorLetra(arr, letra) {
    let nuevoArr = [];
    for (let i = 0; i < arr.length; i++) {
        let nombre = arr[i];
        if (nombre[0] == letra) {
            nuevoArr.push(nombre);
        }
    }
    return nuevoArr;
}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Capitan Marvel'];

let heroesCon = filtrarPorLetra(heroes, 'S');

console.log(heroesCon);