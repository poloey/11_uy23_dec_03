function toUpper () {
	// getting value from input field
	var name = document.getElementById('name').value;
	// to change to ascii value
	var ascii = name.charCodeAt(0) -32;
	var capital = String.fromCharCode(ascii);
	// output div ke select kara
	var output = document.getElementById('output');
	// output div a ascii value ta show kara

	output.innerHTML = capital;
	document.getElementById('name').value = ''
}
function toLower () {
	// getting value from input field
	var name = document.getElementById('name').value;
	// to change to ascii value
	var ascii = name.charCodeAt(0) + 32;
	var capital = String.fromCharCode(ascii);
	// output div ke select kara
	var output = document.getElementById('output');
	// output div a ascii value ta show kara

	output.innerHTML = capital;
	document.getElementById('name').value = ''
}
