
const encuestados = [];
const candidatos = [];
let nombre;
let edad;
let encuestado;
let candidato;
let indice;

// class encuestado
class Encuestado {
  constructor(nombre, edad, provincia) {
    this.nombre = nombre;
    this.edad = edad;
    this.provincia = provincia;
  }
  saludar() {
    alert(`Hola ${this.nombre}, Vamos a comenzar con una breve encuesta`);
  }
}

// class candidato
class Candidato {
  constructor(nombre, provincia) {
    this.nombre = nombre;
    this.provincia = provincia;
    this.votos = 0;
  }
}

// registro de candidatos en la clase
candidatos.push(new Candidato("Axel", "BUENOS AIRES"));
candidatos.push(new Candidato("Rodolfo", "MENDOZA"));

// console.log(candidatos);

function registroEncuesta(){
do {
  nombre = prompt("Ingrese su Nombre");
  edad = prompt("Ingrese su Edad");

  if (nombre != "" && edad >= 18) {
    provincia = prompt("Ingrese su Provincia").toUpperCase();
    encuestado = new Encuestado(nombre, edad, provincia);
    let provinciaEncuestado = candidatos.find((p) => p.provincia == provincia);
    if (provinciaEncuestado) {
      encuestados.push(encuestado);
      let indice = candidatos.findIndex((c) => c.provincia == provincia);
      candidatos[indice].votos = candidatos[indice].votos + 1;
      alert(
        "Cantidad de participantes de tu misma provincia " +
          candidatos[indice].votos
      );
    }else{
        alert(nombre+" No te encuentras dentro de las pronvincias registradas. Gracias");
        break;
    }
    encuestado.saludar();
    entrada = prompt(
      " Ingrese su provincia: \n1. para Buenos Aires \n2. para Mendoza \n3. 3 para salir"
    );
    switch (entrada) {
      case "1":
        candidato = prompt(
          "Ingrese en nombre del Gobernador de Buenos Aires"
        ).toUpperCase();
        if (candidato == "AXEL") {
          alert("Tu respuesta es correcta");
        } else {
          alert("Fallaste en la respuesta");
        }
        break;

      case "2":
        candidato = prompt(
          "Ingrese en nombre del Gobernador de Mendoza"
        ).toUpperCase();
        if (candidato == "RODOLFO") {
          alert("Tu respuesta es correcta");
        } else {
          alert("Fallaste en la respuesta");
        }
        break;
        default:
        break;
    }
  } else if (edad < 18) {
    alert("La encuesta es para mayores de 18 años, Gracias");
  } else if (nombre == "") {
    alert("Tiene que completar su nombre");
    registroEncuesta();
  }
} while (entrada != "3");
{
  alert(
    "Cantidad de participantes de tu misma provincia " +
      candidatos[indice].votos
  );
  alert("Hasta la Proxima " + nombre);
}}

registroEncuesta();
