// Does htis user have a name saved?
if( localStorage.getItem('full-name') ) {
	// Put the name in the name field
	document.querySelector('#full-name').value = localStorage.getItem('full-name');
}

// Has this user picked a country?
if( localStorage.getItem('country') ) {
	// Loop over each option
	var selectElement = document.querySelector('#country'); 
	for(var i=0; i<selectElement.length; i++) {
		// Is this the option thr user chose?
		if( localStorage.getItem('country') == selectElement[i].value ) {
			// Select this option
			selectElement[i].setAttribute('selected', 'selected');
		}
	}
}


// Has user picked a shipping destination?









// Listen for input on the name field
document.querySelector('#full-name').onkeyup = function(){
	localStorage.setItem('full-name', this.value);
} 

// Listen for changes in the country options

document.querySelector('#country').onchange = function(){

	localStorage.setItem('country', this.value);

}









