const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const resultado = document.querySelector('#resultado')

form.addEventListener('submit', sumar)

function sumar (event) {
    const sumaInputs = (parseFloat(input1.value) + parseFloat(input2.value));
    event.preventDefault();
    resultado.innerHTML ="Resultado es " + sumaInputs
}