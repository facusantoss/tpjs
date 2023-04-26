const vehiculos =[
    {id: 1, marca: "toyota", modelo: "etios", anio: 2018},
    {id: 2, marca: "peugeot", modelo: "208", anio: 2017},
    {id: 3, marca: "fiat", modelo: "punto", anio: 2013},
    {id: 4, marca: "renault", modelo: "kwid", anio: 2019},
    {id: 5, marca: "toyota", modelo: "yaris", anio: 2020},
  ];
  

  localStorage.setItem ("vehiculo", JSON.stringify (vehiculos))
  
  vehiculos.forEach(function(vehiculo, indice) {
    console.log("Vehículo " + (indice+1) + ": Marca: " + vehiculo.marca + ", Modelo: " + vehiculo.modelo);
  });
  
  
  
  const toyotas = vehiculos.filter(vehiculo => vehiculo.marca === "toyota");
  console.log(toyotas);
  
  const newAuto= JSON.stringify(toyotas);
  localStorage.setItem("autitos", newAuto)

  let toyotaFiltro= JSON.parse(localStorage.getItem("toyotas"))
  console.log(toyotaFiltro);
  
  

  
  
  const validarAnio = (anio) => /^\d{4}$/.test(anio);
  
  function agregarVehiculo(event) {
    event.preventDefault();
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const anio = document.getElementById("anio").value;
  
    
  
  
    const autoCliente= new nuevoAuto(marca, modelo, anio);
    vehiculos.push(autoCliente);
    alert("Vehículo agregado correctamente");
  }
  
  function calcularCostoRC() {
    const costo = 3000;
    document.getElementById("costoSeguro").innerHTML = "Tu costo es de $ " + costo;
  }
  
  
  function calcularCostoTC() {
    const costo = 8000;
    document.getElementById("costoSeguro").innerHTML = "Tu costo es de $ " + costo;
  }
  
  
  function calcularCostoTR() {
    const costo = 14000;
    document.getElementById("costoSeguro").innerHTML = "Tu costo es de $ " + costo;
  }
  
  
  