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
  }
  
  function billEdit() {
	let percent = (parseFloat(tipSlider.value) / 100);
    let subtotal = parseFloat(billTotal.value);
    let grand = subtotal + (subtotal * percent);
	tipAmount.value = subtotal * percent;
    grandTotal.value = grand;
  }
  
  
  
}); // end DOMContentLoaded