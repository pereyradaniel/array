
let registro = true;
let nombre;
let edad;
let votos1 = 0;
let votos2 = 0;
let total = 0;
let candidato;

// funcion cuenta votos
function totalvotos(){
  if (candidato == "AXEL"){
      votos1 = votos1+1;
      alert ("Total de respuestas de la provincia de Buenos Aires "+votos1);

  } else if (candidato =="RODOLFO"){
      votos2 = votos2+1;
      alert ("Total de respuestas de la provincia de Mendoza "+votos2);
  }
}

// funcion total votantes
function totalvotantes(){
  total = votos1 + votos2;
  alert("Total de respuestas de la encuesta "+total);
}



class Persona {
  constructor(nombre, edad){
      this.nombre = nombre;
      this.edad = edad;
  }
  saludar(){
            alert(`Hola ${this.nombre}, Vamos a comenzar con una breve encuesta`);
}}


while(registro == true){
   nombre = prompt("Ingrese un nombre");
   edad = prompt("Ingrese una edad");
  let personas = new Persona(nombre, edad);

  if((nombre!="") && (edad>=18)){
    personas.saludar();
    entrada = prompt(" Ingrese: \n1. para Buenos Aires \n2. para Mendoza \n3. 3 para salir");
    while(entrada!="3"){
      switch(entrada){
        case "1":
          candidato = prompt("Ingrese en nombre del Gobernador de Buenos Aires").toUpperCase();
                 if( candidato == "AXEL"){
                     alert("Tu respuesta es correcta");

                     totalvotos();

                 }else {
                     alert("Fallaste en la respuesta");
                 }
                 break;
                 case '2':
                  candidato = prompt("Ingrese en nombre del Gobernador de Mendoza").toUpperCase();
                 if( candidato == "RODOLFO"){
                     alert("Tu respuesta es correcta");
                     totalvotos();

                 }else {
                     alert("Fallaste en la respuesta");
                 }
                  break;
              default:
                  alert("Ingrese otro dato");
                  break;
      }
      entrada = prompt(" Ingrese: \n1. para Buenos Aires \n2. para Mendoza \n3. 3 para salir");
      if (entrada =="3"){
          alert(nombre+" gracias por participar");
          totalvotantes();
      }
    }

  }else if(edad<18){
    alert("La encuesta es para mayores de 18 años, Gracias");
  }else if(nombre ==""){
    alert("Tiene que completar su nombre");
  }
}
