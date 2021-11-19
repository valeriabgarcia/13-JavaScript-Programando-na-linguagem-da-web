// alert("Olá Mundo!");
// console.log(document);
// console.log("Fui carregado de um arquivo externo");

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista" 

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i <pacientes.length; i++) {

   var paciente = pacientes[i];

   var tdPeso = paciente.querySelector(".info-peso");
   var peso = tdPeso.textContent;

   var tdAltura = paciente.querySelector(".info-altura");
   var altura = tdAltura.textContent;

   var tdImc = paciente.querySelector(".info-imc");

   var pesoEhValido = validaPeso(peso);
   var alturaEhvalida = validaAltura(altura);

   if (!pesoEhValido) {
      console.log("Peso Inválido!!");
      pesoEhValido = false;
      tdImc.textContent = "Peso inválido";
      paciente.classList.add("paciente-invalido");
   }
   if (!alturaEhvalida) {
      console.log("Altura Inválida!!");
      alturaEhvalida = false;
      tdImc.textContent = "Altura inválida";
      paciente.classList.add("paciente-invalido");
   }

   if (pesoEhValido && alturaEhvalida) {
      var imc = calculaImc(peso, altura);
      tdImc.textContent = imc;
   }
}

function calculaImc(peso, altura){
   var imc = 0;

   imc = peso / (altura * altura);

   return imc.toFixed(2);
}

function validaPeso(peso) {
   if (peso > 0 && peso < 1000) {
      return true;
   } else {
      return false;  
   }
}

function validaAltura(altura) {
   if (altura > 0 && altura < 3.00) {
      return true;
   } else {
      return false;  
   }
}



// console.log(paciente); // tr
// console.log(tdPeso); // td que tem o peso
// console.log(peso);
// console.log(tdAltura);
// console.log(altura);
// console.log(imc);
