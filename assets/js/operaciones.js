function operacion() {
  let numero1 = parseFloat(document.getElementById("txtNumero1").value);
  let numero2 = parseFloat(document.getElementById("txtNumero2").value);
  let operacion = document.getElementById("tipooperacion").value;
  let resultado;

  if (operacion == 'suma') {
    resultado = numero1 + numero2;
  } else if (operacion == 'resta'){
    resultado = numero1-numero2;
  } else if (operacion == 'mult'){
    resultado = numero1*numero2;
  } else if (operacion == 'division'){
    resultado = numero1/numero2;
  } else if (operacion == 'residuo'){
    resultado = numero1%numero2;
  }
  alert("La " + operacion +' del '+ 'numero '+ numero1+ ' y ' + 'numero '+numero2+' es '+ resultado);
}


