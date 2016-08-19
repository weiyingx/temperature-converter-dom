console.log('Boo ya!');

function setInputAsResult() {
	var submit = document.getElementById("strip")
	var input = document.getElementsByTagName("input")[0];

	var value = input.value; 

		var celsius = (5/9) * (input.value - 32);
		celsius= Math.round(celsius);	
	
	var result = celsius + ".C";

	submit.textContent = result;
}

function setInputAsFahrenheit() {
	var submit = document.getElementById("strip")
	var input = document.getElementsByTagName("input")[0];

	var value = input.value; 

		var fahrenheit = input.value * (9/5) + 32 ;
		fahrenheit = Math.round(fahrenheit);
	
	
	var result = fahrenheit + ".F";

	submit.textContent = result;
}

document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded");

document.getElementById("submit").addEventListener("click", function() {
  console.log("submit button clicked");
  setInputAsResult();
});

document.getElementById("clear").addEventListener("click", function() {
  console.log("submit button clicked");
  setInputAsFahrenheit();
});

});



