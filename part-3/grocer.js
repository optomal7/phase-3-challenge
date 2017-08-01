document.addEventListener("DOMContentLoaded", function(event) {
  console.log("Sanity check, grocer.js is working.");
  var modal = document.getElementById('cart-modal');
  var cartBtn = document.getElementById("cart-button");
  var close = document.getElementsByClassName("close")[0];
  var add = document.querySelectorAll(".add");
  var clear = document.getElementById("clear");


  for(var z = 0; z < add.length; z++) {
    var elem = add[z];
    elem.onclick = function() {
      var countHolder = parseInt(document.getElementById("count-number").innerText);
      countHolder = countHolder + 1;
      document.getElementById("count-number").innerHTML = countHolder;
      return false;
    };
  }

  clear.onclick = function() {
    document.getElementById("count-number").innerHTML = 0;
  }
  
  console.log(cartBtn);
  console.log(add);

  function test() {
    console.log("audible click noise")
  }
  add.onclick = function() {
    console.log("click noise");
  }

  cartBtn.onclick = function() {
      modal.style.display = "block";
  }

  close.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
})
