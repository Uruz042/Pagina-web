var bolita, color_bolita, descuento, importe, importe_descuento;


function inicio() {


	document.getElementById("titular").textContent = "Haga click para sacar una bolita";
	document.getElementById("boton").style.display = "none";
	document.getElementById("boton2").style.display = "inline";


}



function precarga() {


	document.getElementById("titular").textContent = "Mezclando...";
	document.getElementById("boton2").style.display = "none";
	document.getElementById("preloader").style.display = "block";

	setTimeout(() => {
		document.getElementById("titular").textContent = "Sacando...";
	}, 2000)



	setTimeout(bolita, 3000);



}







function bolita() {


	document.getElementById("preloader").style.display = "none";
	document.getElementById("titular").textContent = "Su bolita es de color.";
	document.getElementById("color").style.display = "inline-grid";
	document.getElementById("colortxt").style.display = "inline-grid";
	document.getElementById("descuento").style.display = "flex";


	bolita = Math.floor(Math.random() * 4) + 1;

	if (bolita == 1) {
		color_bolita = "Roja";

		document.getElementById("color").style.backgroundColor = "red";
		document.getElementById("colortxt").textContent = "ROJO";
		document.getElementById("colortxt").style.color = "red";
		document.getElementById("descuento").textContent = "Obtienes un descuento del 80%";
		descuento = 80;
	}
	if (bolita == 2) {

		color_bolita = "Azul";



		document.getElementById("color").style.backgroundColor = "blue";
		document.getElementById("colortxt").textContent = "AZUL";
		document.getElementById("colortxt").style.color = "blue";
		document.getElementById("descuento").textContent = "Obtienes un descuento del 50%";

		/*document.write("Obtiene un descuento del 50 %",'<BR/>');*/


		descuento = 50;
	}
	if (bolita == 3) {
		color_bolita = "Verde";

		document.getElementById("color").style.backgroundColor = "green";
		document.getElementById("colortxt").textContent = "VERDE";
		document.getElementById("colortxt").style.color = "green";
		document.getElementById("descuento").textContent = "Obtienes un descuento del 25%";

		/*document.write("Obtiene un descuento del 25 %",'<BR/>');*/


		descuento = 25;
	}
	if (bolita == 4) {
		color_bolita = "Blanca";


		document.getElementById("color").style.backgroundColor = "white";
		document.getElementById("colortxt").textContent = "Blanco";
		document.getElementById("colortxt").style.color = "white";
		document.getElementById("descuento").textContent = "Obtienes un descuento del 5%";


		/*document.write("Obtiene un descuento del 5% ",'<BR/>');*/


		descuento = 5;
	}

	setTimeout(datos, 3000);

}


function datos() {

	document.getElementById("titular").textContent = "Inserte su importe para calcular el descuento";
	document.getElementById("color").style.display = "none";
	document.getElementById("colortxt").style.display = "none";
	document.getElementById("descuento").style.display = "none";
	document.getElementById("importe").style.display = "inline-grid";
	document.getElementById("botonsubmit").style.display = "inline";






}

function calculo() {
	document.getElementById("titular").textContent = "Su importe final es de :";
	document.getElementById("importefinal").style.display = "inline";
	document.getElementById("importe").style.display = "none";
	document.getElementById("botonsubmit").style.display = "none";
	document.getElementById("reset").style.display = "inline-grid";
	
	importe = document.getElementById("importe").value;





	importe_descuento = importe - (importe / 100 * descuento);
	
	
	
	
	document.getElementById("importefinal").innerHTML = importe_descuento;

}

function recarga(){
	location.reload();
}
