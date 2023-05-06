const marcaSelector = document.getElementById('marca');
const modeloSelector = document.getElementById('modelo');
const anioSelector = document.getElementById('anio');

  
const marcaSelect = document.querySelector('#marca');
const modeloSelect = document.querySelector('#modelo');
const anioSelect = document.querySelector('#anio');
const seguroSelect = document.querySelector('#seguro');


// FETCH
fetch('../data/datos.json')
  .then(response => response.json())
  .then(data => {

    
    const marcas = data.map(item => item.nombre);
    marcas.forEach(marca => {
      const option = document.createElement('option');
      option.textContent = marca;
      marcaSelector.appendChild(option);
    });

    
    marcaSelector.addEventListener('change', () => {
      const modelos = data.find(item => item.nombre === marcaSelector.value).modelos;
      modeloSelector.innerHTML = '';
      anioSelector.innerHTML = '';
      modelos.forEach(modelo => {
        const option = document.createElement('option');
        option.textContent = modelo.nombre;
        modeloSelector.appendChild(option);
      });
    });

    
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


  function calcularCosto() {
    const tipoSeguro = document.getElementById("seguro").value;
    let costo = 0;
    switch (tipoSeguro) {
      case "responsabilidad-civil":
        costo = 3000;
        break;
      case "terceros-completo":
        costo = 8000;
        break;
      case "todo-riesgo":
        costo = 14000;
        break;
    }
    
    Swal.fire({
      icon: 'info',
      text: `El costo del seguro seleccionado es de $${costo}`,
    })
  }

   document.getElementById("cotizar").addEventListener("click", calcularCosto);



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
  
  
  