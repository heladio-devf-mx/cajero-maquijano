let cuentas = [
  { usuario: "Antonio", saldo: 600, password: "123" },
  { usuario: "Marcela", saldo: 500, password: "456" },
  { usuario: "Santiago", saldo: 800, password: "789" },
];

let cuentaSeleccionada;

function hola() {}

/*
nombre de la función: seleccionarCuenta
parámetro(): (nombre)
*/
function seleccionarCuenta(nombreUsuario) {
  // definición de una función
  // Cuerpo de la función
  // seleccionarCuenta("Camila");
  let cuenta = cuentas.find((cuenta) => cuenta.usuario === nombreUsuario);

  if (cuenta) {
    // verdadero /truthy
    let password = prompt("ingrese su contraseña");

    if (password === cuenta.password) {
      cuentaSeleccionada = cuenta;
      //`` // ${expresion}
      alert(`Bienvenido ${cuenta.usuario}`);
      mostrarOpciones(); // llamada a otra función
    } else {
      // validación de contraseña incorrecta
      alert("contraseña incorrecta");
    }
  } else {
    // si es falso que la cuenta existe
    alert("cuenta no encontrada");
  }
}

function mostrarOpciones() {
  let opcion = prompt(
    "Selecciona una opción:\n1. Consultar saldo\n2. Ingresar monto\n3. Retirar monto\n4. Salir"
  );
  // console.log({ opcion });
  /*
  if (opcion === "1") {
    // consultarSaldo();
  } else if (opcion === "2") {
    //   ...
  } else {
    // default
  }
   */
  switch (opcion) {
    case "1":
      consultarSaldo();
      break; // stop
    case "2":
      ingresarMonto();
      break;
    case "3":
      retirarMonto();
      break;
    case "4":
      alert("Adiós!");
      // return false;
      break;
    default:
      alert("Opción inválida");
      mostrarOpciones();
      break;
  }
}

function consultarSaldo() {
  alert(`Tu saldo actual es de $${cuentaSeleccionada.saldo}`);
  mostrarOpciones();
}

function ingresarMonto() {
  let monto = parseInt(prompt("Ingresar el monto a depositar:"));
  // reglas del negocio
  // 1. monto sea mayor que 0
  // 1.1. (cuentaSeleccionada.saldo + monto) no sea mayor a 990
  // 1.2 Si no se cumple la condición: muestra un mensaje
  // 1.3 Si Sí se cumple la condición: actualiza el saldo de la cuenta.
  // 1.3.1. Muestra el saldo actualizado

  if (monto > 0) {
    if (cuentaSeleccionada.saldo + monto > 990) {
      alert("NO puedes tener más de $990 en tu cuenta.");
    } else {
      cuentaSeleccionada.saldo += monto;
      // es equivalente
      // cuentaSeleccionada.saldo = cuentaSeleccionada.saldo + monto;
      alert(
        `Has depositado $${monto}. Tu nuevo saldo es de $${cuentaSeleccionada.saldo}.`
      );
    }
  } else {
    alert("El monto debe ser mayor a cero.");
  }
  // Siempre se va a ejecutar
  mostrarOpciones();
}

function retirarMonto() {
  let monto = parseInt(prompt("Ingresa el monto a retirar."));

  if (monto > 0) {
    if (cuentaSeleccionada.saldo - monto < 10) {
      alert("No puedes tener menos de $10 en tu cuenta.");
    } else {
      cuentaSeleccionada.saldo -= monto;
      alert(
        `Has retirado $${monto}. Tu nuevo saldo es de $${cuentaSeleccionada.saldo}.`
      );
    }
  } else {
    alert("El monto debe ser mayor a cero.");
  }

  mostrarOpciones();
}
