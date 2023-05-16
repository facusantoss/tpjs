const marcaSelector = document.getElementById('marca');
const modeloSelector = document.getElementById('modelo');
const anioSelector = document.getElementById('anio');
const seguroSelector = document.getElementById('seguro');

const marcaSelect = document.querySelector('#marca');
const modeloSelect = document.querySelector('#modelo');
const anioSelect = document.querySelector('#anio');
const seguroSelect = document.querySelector('#seguro');


// cargar los datos del archivo JSON
fetch('../data/datos.json')
  .then(response => response.json())
  .then(data => {

    // crear las opciones para el selector de marcas
    const marcas = data.map(item => item.nombre);
    marcas.forEach(marca => {
      const option = document.createElement('option');
      option.textContent = marca;
      marcaSelector.appendChild(option);
    });

    // actualizar los modelos cuando se cambia la marca
    marcaSelector.addEventListener('change', () => {
      const modelos = data.find(item => item.nombre === marcaSelector.value).modelos;
      modeloSelector.innerHTML = '';
      anioSelector.innerHTML = '';

      if (marcaSelector.value === '') {
        modeloSelector.disabled = true;
        anioSelector.disabled = true;
      } else {
        modeloSelector.disabled = false;
        anioSelector.disabled = false;
      
      modelos.forEach(modelo => {
        const option = document.createElement('option');
        option.textContent = modelo.nombre;
        modeloSelector.appendChild(option);
      });
    }
    });

    // actualizar los años cuando se cambia el modelo
    modeloSelector.addEventListener('change', () => {
      const marca = data.find(item => item.nombre === marcaSelector.value);
      const modelo = marca.modelos.find(item => item.nombre === modeloSelector.value);
      anioSelector.innerHTML = '';
      modelo.anios.forEach(anio => {
        const option = document.createElement('option');
        option.textContent = anio;
        anioSelector.appendChild(option);
      });
    });

  })
  .catch(error => console.error(error));


  
function validarCampos() {
  if (
    marcaSelector.value === '' ||
    modeloSelector.value === '' ||
    anioSelector.value === ''
  ) {
    Swal.fire({
      icon: 'error',
      text: 'Por favor, seleccione la marca, el modelo y el año antes de calcular el costo.',
    });
    return false;
  }

  return true;
}

function calcularCosto() {
  if (!validarCampos()) {
    return;
  }

  const marca = marcaSelector.value;
  const modelo = modeloSelector.value;
  const anio = anioSelector.value;
  const tipoSeguro = seguroSelect.value;

  const costo = calcularCostoSeguro(marca, modelo, anio, tipoSeguro);

  if (costo !== 0) {
    Swal.fire({
      icon: 'info',
      text: `El costo del seguro seleccionado es de $${costo}`,
    });
  }
}

function calcularCosto() {
  if (!validarCampos()) {
    return;
  }

  const marca = marcaSelector.value;
  const modelo = modeloSelector.value;
  const anio = anioSelector.value;
  const tipoSeguro = seguroSelect.value;

  const costo = calcularCostoSeguro(marca, modelo, anio, tipoSeguro);

  if (costo !== 0) {
    Swal.fire({
      icon: 'info',
      text: `El costo del seguro seleccionado es de $${costo}`,
    });
  }
}

function calcularCostoSeguro(marca, modelo, anio, tipoSeguro) {
  let costoBase = 0;
  let factorAnio = 0;
  let factorTipoSeguro = 0;

  // Determinar el costo base según el tipo de seguro seleccionado
  switch (tipoSeguro) {
    case 'responsabilidad-civil':
      factorTipoSeguro = 0.8; // Reducción del 20% en el costo base
      costoBase = 3000;
      break;
    case 'terceros-completo':
      factorTipoSeguro = 1.0; // Sin modificación en el costo base
      costoBase = 8000;
      break;
    case 'todo-riesgo':
      factorTipoSeguro = 1.2; // Aumento del 20% en el costo base
      costoBase = 14000;
      break;
    default:
      break;
  }

  // Determinar el factor según el año del auto
  const anioActual = new Date().getFullYear();
  const antiguedad = anioActual - anio;
  if (antiguedad >= 10) {
    factorAnio = 0.5; 
  } else if (antiguedad >= 8) {
    factorAnio = 0.7; 
  } else if (antiguedad >= 5) {
    factorAnio = 0.8; 
  } else if (antiguedad >= 3) {
    factorAnio = 0.9; 
  } else {
    factorAnio = 1.0; // Sin modificación para autos con menos de 5 años de antigüedad
  }

  const costo = costoBase * factorAnio * factorTipoSeguro;

  return costo;
}

document.getElementById("cotizar").addEventListener("click", calcularCosto);



 

// Agregar evento change a cada select
marcaSelect.addEventListener('change', function() {
  localStorage.setItem('marca', marcaSelect.value);
});

modeloSelect.addEventListener('change', function() {
  localStorage.setItem('modelo', modeloSelect.value);
});

anioSelect.addEventListener('change', function() {
  localStorage.setItem('anio', anioSelect.value);
});

seguroSelect.addEventListener('change', function() {
  localStorage.setItem('seguro', seguroSelect.value);
});
  
  