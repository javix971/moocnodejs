// Math.random() devuelve número aleatorio entre 0 y 1
var numero = Math.random();

if (numero <= 0.33) {
	console.log('\n' + numero + ' MENOR QUE 0.33 \n');
}
else if (numero <= 0.66) {
	console.log('\n' + numero + ' MENOR QUE 0.66 \n');	
}
else {
	console.log('\n' + numero + ' MAYOR QUE 0.66 \n');
}