
console.log('PRESTAMOS')
alert("MUEVE LOS PARAMETROS Monto del Credito, Tasa Interes y Plazo PARA CALCULAR TU CUOTA MENSUAL A PAGAR!!! \n RECUERDA QUE DEBES SER MASYOR DE EDAD PARA SOLICITAR UN CREDITO")

let tasa_interes_EM=0
let periodo=0

// funciones para conversion de parametros
function conversion_tasa_interes(tasa_interes_EA){
	let tasa_interes_EM = Math.pow((1 + (tasa_interes_EA/100)),(1/12))-1
	return tasa_interes_EM
}

function años_en_meses(años){
	let periodo = años*12
	return periodo
}

// cambio formato resultado
const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2
  })

// funcion principal para calculo de cuota mensual a pagar del credito
function anualidad(){
	edad=parseInt(prompt("cual es tu edad?"))
	if (edad>=18){
		let monto_prestamo = document.getElementById("prestamo").value;
		let tasa_interes = conversion_tasa_interes(document.getElementById("interes").value);
		let Numero_cuotas = años_en_meses(document.getElementById("plazo").value);

		let res=((tasa_interes * Math.pow(( 1 + tasa_interes),Numero_cuotas))/((Math.pow((1+tasa_interes),Numero_cuotas))-1))*monto_prestamo;
		document.getElementById("resultado_final").innerHTML = formatter.format(res)
		}
	else{
		alert("no tienes edad suficiente para solicitar un credito!!")
		for (let i=1 ;i<=3;i++){
			alert("Te haremos unas preguntas que te ayudaran a sumar puntos y puede que te ayuden a calificar para el credito")
			switch (i){

				case 1:	
					let trabajo = prompt("¿Actualmente trabajas y puedes demotrar ingresos? SI o NO")
					if (trabajo="SI"){
						edad = edad+3
						console.log(edad)
					}
					break
				case 2:
					let amparo = prompt("Tienes alguien que te ampare financieramente? SI o NO")
					if (amparo="SI"){
						edad = edad+2
						console.log(edad)
					}
					break
				case 3:
					let historial=prompt("Tienes hitorial crediticio? SI o NO")
					if (historial="SI"){
						edad = edad+1
						console.log(edad)
					}
					break
				}
			if(edad>=18){
				i=4
			}

		}

		if(edad>=18){
			alert("ya cumples la mayoria de edad, puedes acceder al credito")
			let monto_prestamo = document.getElementById("prestamo").value;
			let tasa_interes = conversion_tasa_interes(document.getElementById("interes").value);
			let Numero_cuotas = años_en_meses(document.getElementById("plazo").value);
	
			let res=((tasa_interes * Math.pow(( 1 + tasa_interes),Numero_cuotas))/((Math.pow((1+tasa_interes),Numero_cuotas))-1))*monto_prestamo;
			document.getElementById("resultado_final").innerHTML = formatter.format(res)
		}
		else{
			alert("lo sentimos, aunque tienes puntos extras no es suficiente")
		}

	}

}


// para mostrar el valor seleccionados en los inputs de rango
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