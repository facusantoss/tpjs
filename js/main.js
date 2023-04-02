let dniUsuario = "37863939";
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
const vehiculos =[
    {id: 1, marca: "toyota", modelo: "etios", anio: 2018},
    {id: 2, marca: "peugeot", modelo: "208", anio: 2017},
    {id: 3, marca: "fiat", modelo: "punto", anio: 2013},
    {id: 4, marca: "renault", modelo: "kwid", anio: 2019},
    {id: 5, marca: "toyota", modelo: "yaris", anio: 2020},
];

vehiculos.forEach(function(vehiculo, indice) {
  console.log("Vehículo " + (indice+1) + ": Marca: " + vehiculo.marca + ", Modelo: " + vehiculo.modelo);
});

const toyotas = vehiculos.filter(vehiculo => vehiculo.marca === "toyota");
console.log(toyotas);

function nuevoAuto(marca, modelo, anio){
    this.id=vehiculos.length + 1;
    this.marca= marca;
    this.modelo= modelo;
    this.anio= anio;
}

const validarAnio = (anio) => /^\d{4}$/.test(anio);

let marca= prompt("Ingresa la marca");
let modelo= prompt("ingresá el modelo");
let anio= prompt("ingresá el año del vehículo");


while (!validarAnio(anio)) {
  alert("El año ingresado es inválido. Por favor, ingresá un año válido.");
  anio = prompt("ingresá el año del vehículo");
}

const autoCliente= new nuevoAuto(marca, modelo, anio);
vehiculos.push(autoCliente);
console.log(autoCliente);


function calcularCostoRC() {
    const costo = 3000;
    alert("Seleccionaste Responsabilidad Civil");
    alert("Tu costo es de $ " + costo);
  }
  
  function calcularCostoTC() {
    const costo = 8000;
    alert("Seleccionaste Terceros Completo");
    alert("Tu costo es de $ " + costo);
  }
  
  function calcularCostoTR() {
    const costo = 14000;
    alert("Seleccionaste Todo Riesgo");
    alert("Tu costo es de $ " + costo);
  }

let opcion= prompt("Seleccioná una de las coberturas \n1-Responsabilidad Civil \n2-Terceros Completo \n3-Todo Riesgo")
switch (opcion) {
    case "1":
        calcularCostoRC();
    break;
    case "2":
       calcularCostoTC();   
    break;
    case "3":
        calcularCostoTR();
    break;

    default:
        alert("Opción no valida");
    break;
}

} else {
    alert(" no podes ingresar al cotizador");
}

alert("Gracias por utilizar nuestro cotizador de seguros. ¡Que tengas un buen día!");
