function letsClick() {
	var x1 = document.getElementById('email').value;
	alert(x1);
}

function setInputTextLength() {
	var emailInput = document.getElementById('email');
	if (emailInput.value.length == emailInput.maxLength) {
		alert('max count');
	}
}









/*function letsClick() {
	var x1 = document.getElementById('email').value;
	if (typeof letsClick == 'string') {}
	alert("only number");
	if (typeof letsClick == number) {}
	alert('x1')
}*/











/*function onlyDigit(){
 // get value from input field
 var val = document.getElementsByTagName('input')[0].value;
 
 // regular expression for a non-digit character
 var nonDigit = /\D/;
 
 // check for null or empty
 if(val == null || val == ''){
    alert('Value is required');
 }
 
 // check for a non-digit character
 else if(val.match(nonDigit)){
  alert('only digits are allowed');
 }
}
 
// invoking function on keyup
window.addEventListener('load',function(){
 document.getElementsByTagName('input')[0].addEventListener('keyup',function(){
  onlyDigit();
 });
});*/