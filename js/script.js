
console.log('PRESTAMOS')

let tasa_interes_EM=0
let periodo=0

function conversion_tasa_interes(tasa_interes_EA){
	let tasa_interes_EM = Math.pow((1 + (tasa_interes_EA/100)),(1/12))-1
	return tasa_interes_EM
}

function años_en_meses(años){
	let periodo = años*12
	return periodo
}


const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2
  })


function anualidad(){
	let monto_prestamo = document.getElementById("prestamo").value;
	let tasa_interes = conversion_tasa_interes(document.getElementById("interes").value);
	let Numero_cuotas = años_en_meses(document.getElementById("plazo").value);

	let res=((tasa_interes * Math.pow(( 1 + tasa_interes),Numero_cuotas))/((Math.pow((1+tasa_interes),Numero_cuotas))-1))*monto_prestamo;
	document.getElementById("resultado_final").innerHTML = formatter.format(res)

}


const prestamo = document.querySelector('#prestamo')
const output = document.querySelector('.prestamo-output')

output.textContent = prestamo.value

prestamo.addEventListener('input', function() {
  output.textContent = prestamo.value
});



const interes = document.querySelector('#interes')
const output2 = document.querySelector('.interes-output')

output2.textContent = interes.value

interes.addEventListener('input', function() {
  output2.textContent = interes.value
});


const plazo = document.querySelector('#plazo')
const output3 = document.querySelector('.plazo-output')

output3.textContent = plazo.value

plazo.addEventListener('input', function() {
  output3.textContent = plazo.value
});