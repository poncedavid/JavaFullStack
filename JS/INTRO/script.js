// VARIABLES

// var, let, const

//DECLARANDO VARIABLES TIPO STRING "CADENAS ó TEXTO"
var nombre = "Coding dojo";
let apellido = "Bootcamp";
const apodo = "Nickname";

//DECLARANDO VARIABLES TIPO NUMERICO
var edad = 25;
let altura = 1.75;
const peso = 0.8;

//DECLARANDO VARIABLES TIPO BOOLEANO
var esMayorDeEdad = true;
let esMenorDeEdad = false;

//COLECCIONES DE DATOS

//ARRAYS

var frutas = ["manzana", "pera", "uva", "sandia", "melon"];

//OBJETOS

var persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 25,
  altura: 1.75,
  peso: 0.8,
  esMayorDeEdad: true,
};

//FUNCIONES

function saludar() {
  alert("Hola, bienvenido a Coding Dojo");
  nombre = prompt("Cual es tu nombre?");
  alert("Mucho gusto " + nombre);
}

//CONDICIONALES

function validarEdad() {
  alert("Vamos a validar tu edad");
  edad = prompt("Cual es tu edad?");

  if (edad >= 18) {
    alert("Eres mayor de edad");
  } else {
    alert("Eres menor de edad");
  }
}


var h2 = document.querySelector("h2");
h2.innerText = "HOLANDAAAAAAAA";

var imagen = document.querySelector("#imagen");

function cambioImagen(){

    imagen.src="rigth.jpeg"
}

function esconder(elemento){

    elemento.remove();
}