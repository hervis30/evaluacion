const nombreEmpleado = document.querySelector('#nombre');
const valorHora = document.querySelector('#valorHora');
const cantidadHoras = document.querySelector('#cantidadHoras');

const imagen = document.createElement('img')
const mostrarImagen = document.querySelector('#mostrarImagen')
const salarioBruto = document.querySelector('#salarioBruto');
const salarioNeto = document.querySelector('#salarioNeto');
const salarioQuincenal = document.querySelector('#quincena');
const salud = document.querySelector('#salud');
const pension = document.querySelector('#pension');
const mostrarNombre = document.querySelector('#mostrarNombre')
const btnCalcular = document.querySelector('#btnCalcular');

imagen.src = ('https://www.gurusonline.com.co/wp-content/uploads/2017/06/primer-empleado.png');
mostrarImagen.appendChild(imagen);

btnCalcular.addEventListener('click', function () {
    let calcularSalarioBruto = 0;
    let calcularPension = 0;





    if (cantidadHoras.value < 198 & cantidadHoras.value > 48) {
        calcularSalarioBruto = parseFloat(valorHora.value) * parseFloat(cantidadHoras.value);
        salarioBruto.value = calcularSalarioBruto;

        calcularPension = (parseInt(salarioBruto.value) * 0.04);
        pension.value = calcularPension;

        calcularSalud = (parseInt(salarioBruto.value) * 0.04);
        salud.value = calcularSalud;

        calcularSalarioNeto = ((parseFloat(salarioBruto.value)) - (parseFloat(salud.value)) * 2);
        salarioNeto.value = calcularSalarioNeto;

        calcularQuincena = (parseFloat(salarioNeto.value) / 2);
        salarioQuincenal.value = calcularQuincena;

        mostrarNombre.textContent = 'Los datos mostrados corresponden al empleado: ' + nombreEmpleado.value;


    } else {
        alert('Por favor verifique las limites de horas laborales');
    }


})
