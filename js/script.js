
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
		alert("Te haremos unas preguntas que te ayudaran a sumar puntos para calificar de todas maneras para el credito")
		for (let i=1 ;i<=3;i++){
			switch (i){
				case 1:
					let trabajo=0
					while (trabajo !== "SI" && trabajo !== "si" && trabajo !== "Si" &&  trabajo !== "sI" && trabajo !== "NO" && trabajo !== "no" && trabajo !== "No" && trabajo !== "nO"){
						trabajo = prompt("¿Actualmente trabajas y puedes demotrar ingresos? SI o NO")
						if(trabajo !== "SI" && trabajo !== "si" && trabajo !== "Si" &&  trabajo !== "sI" && trabajo !== "NO" && trabajo !== "no" && trabajo !== "No" && trabajo !== "nO"){
							alert("Solo puedes responder SI o NO")
						}
						console.log(trabajo)
					}	
					if (trabajo == "SI" || trabajo == "si" || trabajo == "Si" ||  trabajo == "sI"){
						edad = edad+3
						console.log(edad)
						console.log(trabajo)
					}
					break
				case 2:
					let amparo=0
					while(amparo !== "SI" && amparo !== "si" && amparo !== "Si" &&  amparo !== "sI" && amparo !== "NO" && amparo !== "no" && amparo !== "No" && amparo !== "nO"){
						amparo = prompt("Tienes alguien que te ampare financieramente? SI o NO")
						if(amparo !== "SI" && amparo !== "si" && amparo !== "Si" &&  amparo !== "sI" && amparo !== "NO" && amparo !== "no" && amparo !== "No" && amparo !== "nO"){
							alert("Solo puedes responder SI o NO")
						}
						console.log(amparo)
					}
					if (amparo == "SI" || amparo == "si" || amparo == "Si" ||  amparo == "sI"){
						edad = edad+2
						console.log(edad)
						console.log(amparo)
					}
					break
				case 3:
					let historial=0
					while(historial !== "SI" && historial !== "si" && historial !== "Si" &&  historial !== "sI" && historial !== "NO" && historial !== "no" && historial !== "No" && historial !== "nO"){
						historial=prompt("Tienes hitorial crediticio? SI o NO")
						if(historial !== "SI" && historial !== "si" && historial !== "Si" &&  historial !== "sI" && historial !== "NO" && historial !== "no" && historial !== "No" && historial !== "nO"){
							alert("Solo puedes responder SI o NO")
						}
						console.log(historial)
					}
					if (historial == "SI" || historial == "si" || historial == "Si" ||  historial == "sI"){
						edad = edad+1
						console.log(edad)
						console.log(historial)
					}
					break
				}
			if(edad>=18){
				i=4
			}
		}
		if(edad>=18){
			alert("Aunque no cumples la mayoria de edad, tienes los requisitos para acceder al credito")
			let monto_prestamo = document.getElementById("prestamo").value;
			let tasa_interes = conversion_tasa_interes(document.getElementById("interes").value);
			let Numero_cuotas = años_en_meses(document.getElementById("plazo").value);
	
			let res=((tasa_interes * Math.pow(( 1 + tasa_interes),Numero_cuotas))/((Math.pow((1+tasa_interes),Numero_cuotas))-1))*monto_prestamo;
			document.getElementById("resultado_final").innerHTML = formatter.format(res)
		}
		else{
			alert("lo sentimos, aunque tienes puntos extras no es suficiente, no podemos darte el credito")
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