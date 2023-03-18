
let dniUsuario= "37863939";
let ingreso= false;

alert ("Bienvenido/a al cotizador");
for (let i = 2; i >= 0; i--) {
    let dniIngreso = prompt("Ingresa tu DNI. Tenés " + (i+1) + " oportunidades");
    if (dniUsuario== dniIngreso){
        alert("Bienvenido, ya podés cotizar tu auto");
        ingreso= true;
        break;
    } else{
        alert("Dni erroneo");
    } 
}

if(ingreso){
function Auto(marca, modelo, anio){
    this.marca=marca;
    this.modelo=modelo;
    this.anio=anio;
} 

let marca= prompt("Ingresa la marca");
let modelo= prompt("ingresá el modelo");
let anio= prompt("ingresá el año del vehículo");

const autoCliente= new Auto(marca, modelo, anio);
console.log(autoCliente);


let costoRC= 3000;
let costoTC= 8000;
let costoTR= 14000;

let opcion= prompt("Seleccioná una de las coberturas \n1-Responsabilidad Civil \n2-Terceros Completo \n3-Todo Riesgo")
switch (opcion) {
    case "1":
        alert("Seleccionaste Responsabilidad Civil");
        alert("Tu costo es de $ " + costoRC);

    break;
    case "2":
        alert("Seleccionaste Terceros Completo"); 
        alert("Tu costo es de $ " + costoTC);   
    break;
    case "3":
        alert("Seleccionaste Todo Riesgo");
        alert("Tu costo es de $ " + costoTR);
    break;

    default:
        alert("Opción no valida");
    break;
}

} else {
    alert(" no podes ingresar al cotizador");
}