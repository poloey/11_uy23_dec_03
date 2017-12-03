function addPeople () {
	// getting name value from input field
	var name = document.getElementById('name').value;
	// getting email value from input field
	var email = document.getElementById('email').value;

	// make textnode for name document.createTextNode
	var nameNode = document.createTextNode(name);
	// make a textnode for email document.createTextNode
	var emailNode = document.createTextNode(email);

	// create a td  for name field
	var tdname = document.createElement('td');
	// append name textNode to td
	tdname.appendChild(nameNode);
	// create a td  for email field
	var tdEmail = document.createElement('td');
	// append email textNode to td
	tdEmail.appendChild(emailNode);

	// create a tr element
	var tr = document.createElement('tr');
	// append name td to tr
	tr.appendChild(tdname);
	//append email td to tr
	tr.appendChild(tdEmail);

	// select table
	var table = document.getElementById('table');
	//append tr to table
	table.appendChild(tr);
	document.getElementById('name').value = '';
	document.getElementById('email').value = '';

}