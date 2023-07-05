let cuentas = [
    {usuario:"Antonio", saldo:600, clave:"123"},
    {usuario:"Marcela", saldo:500, clave:"456"},
    {usuario:"Santiago", saldo:800, clave:"789"}
]

let cuentaseleccionada;
    function seleccionarcuenta(nombre){
        let cuenta = cuentas.find(cuenta => cuenta.usuario === nombre);
        if (cuenta) {
            let passsword = prompt("ingrese su contraseña");
            if (password === cuenta.passsword){
                cuentaseleccionada = cuenta;
                alert("Bienvenido ${cuenta.usuario}");
                mostraropciones();
            } 
            else {
                alert ("contraseña incorrecta");
            }
        } else {
            alert("cuenta no encontrada");
    }
}

function mostraropciones(){
    let opcion = promt("seleccionar una opción:\n1.consultar saldo\n2.ingresar monto\n3.retirar monto");
    switch (opcion){
        case 1 : consultarsaldo () ; break;
        case 2 : ingresarmontos () ; break;
        case 3 : retirarmonto () ; break;
        default:alert("opcion invalida");
        mostraropciones () ; break;
    }
}

function consultarsaldo(){
    alert("tu saldo actual es de $${entaseleccionada.saldo}");
}

function ingresarmonto(){
    let monto = parseint(prompt("ingresar el monto a depositar:"));
        if (monto > 0) {
            if (cuentaseleccionada.saldo + moto > 990)
                alert("NO puede tener mas de $990 en tu cuenta");
        } else {
            cuentaseleccionada.saldo +=monto;
            alert("Has depositado $${monto}. Tu nuevo saldo es de $${cuentaseleccionada.saldo}");
        {
            alert("El monto debe ser mayor a cero");
            }
}
}

function retirarmonto(){
    let monto=parseint(prompt("ingresa el monto a retirar."));
    if(monto > 0){
        if(cuentaseleccionada.saldo - monto < 10 ){
            alert("No puede tener menos de $10 en tu cuenta");
    } else {
        cuentasseleccionada.saldo -=monto;
        alert("has retirado $${monto}. Tu nuevo saldo es de $${cuentaseleccionada.saldo}");
    }
    }else{
        alert("El monto debe ser mayor a cero");
    }
}