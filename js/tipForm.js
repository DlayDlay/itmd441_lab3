document.addEventListener('DOMContentLoaded', function(){
  
  let billTotal = document.getElementById("billTotal");
  let tipSlider = document.getElementById("tipSlider");
  let tipPercent = document.getElementById("tipPercent");
  let tipAmount = document.getElementById("tipAmount");
  let grandTotal = document.getElementById("grandTotal");
  
  tipSlider.addEventListener("input", tipEdit); 
  
  
  function tipEdit() {
    tipPercent.value = tipSlider.value;
  }
  
  
  
  
  
}); // end DOMContentLoaded