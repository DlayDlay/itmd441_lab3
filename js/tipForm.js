document.addEventListener('DOMContentLoaded', function(){
  
  let billTotal = document.getElementById("billTotal");
  let tipSlider = document.getElementById("tipSlider");
  let tipPercent = document.getElementById("tipPercent");
  let tipAmount = document.getElementById("tipAmount");
  let grandTotal = document.getElementById("grandTotal");
  
  tipSlider.addEventListener("input", tipEdit);
  billTotal.addEventListener("input", billEdit);  
  
  
  function tipEdit() {
    tipPercent.value = tipSlider.value;
	billEdit();
  }
  
  function billEdit() {
	if(isNaN(billTotal.value)){
	  alert("Input should only contain numbers and decimal points");
	}
	else{
	  let percent = (parseFloat(tipSlider.value) / 100);
      let subtotal = parseFloat(billTotal.value);
      let grand = subtotal + (subtotal * percent);
	  tipAmount.value = Number.parseFloat(subtotal * percent).toFixed(2);
      grandTotal.value = Number.parseFloat(grand).toFixed(2);
	}	
  }
  
}); // end DOMContentLoaded