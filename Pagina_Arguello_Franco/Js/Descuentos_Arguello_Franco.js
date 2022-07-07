// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function descuentos() {
	var bolita, color_bolita, descuento, importe, importe_descuento;
	document.write("Bienvenido a nuestro sistema de descuentos por sorteo!",'<BR/>');
	document.write("",'<BR/>');
	document.write("",'<BR/>');
	document.write("",'<BR/>');
	document.write("",'<BR/>');
	document.write("[Presione Enter para Continuar]",'<BR/>');
	prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta función (vease document.onKeyUp), lo cual no siempre es posible
	document.body.innerHTML = '';
	document.write("Presione Espacio para sacar una bolita",'<BR/>');
	prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta función (vease document.onKeyUp), lo cual no siempre es posible
	document.body.innerHTML = '';
	bolita = Math.floor(Math.random()*4)+1;
	document.write(bolita,'<BR/>');
	if (bolita==1) {
		color_bolita = "Roja";
		document.write("Su Bolita es de color ",color_bolita,'<BR/>');
		document.write("Obtiene un descuento del 80%",'<BR/>');
		descuento = 80;
	}
	if (bolita==2) {
		color_bolita = "Azul";
		document.write("Su Bolita es de color ",color_bolita,'<BR/>');
		document.write("Obtiene un descuento del 50 %",'<BR/>');
		descuento = 50;
	}
	if (bolita==3) {
		color_bolita = "Verde";
		document.write("Su Bolita es de color ",color_bolita,'<BR/>');
		document.write("Obtiene un descuento del 25 %",'<BR/>');
		descuento = 25;
	}
	if (bolita==4) {
		color_bolita = "Blanca";
		document.write("Su Bolita es de color ",color_bolita,'<BR/>');
		document.write("Obtiene un descuento del 5% ",'<BR/>');
		descuento = 5;
	}
	document.write("",'<BR/>');
	document.write("",'<BR/>');
	document.write("",'<BR/>');
	document.write("",'<BR/>');
	document.write("[Precione Enter para continuar]",'<BR/>');
	prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta función (vease document.onKeyUp), lo cual no siempre es posible
	document.body.innerHTML = '';
	document.write("Inserte Su Importe total",'<BR/>');
	importe = Number(prompt());
	importe_descuento = importe-(importe/100*descuento);
	document.write("Su Importe con descuento es:  ",importe_descuento,'<BR/>');
	document.write("",'<BR/>');
	document.write("",'<BR/>');
	document.write("",'<BR/>');
	document.write("",'<BR/>');
	document.write("[Presione enter para terminar]",'<BR/>');
	prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta función (vease document.onKeyUp), lo cual no siempre es posible
	document.body.innerHTML = '';
	document.write("Gracias por comprar en [Inserte Nombre de Empresa]",'<BR/>');
}

