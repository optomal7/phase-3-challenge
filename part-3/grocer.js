document.addEventListener("DOMContentLoaded", function(event) {
  console.log("Sanity check, grocer.js is working.");

  let count = document.getElementById("count-number");
  let modal = document.getElementById("cart-modal");
  let cartBtn = document.getElementById("cart-button");
  let close = document.querySelector(".close");
  let add = document.querySelectorAll(".add");
  let clear = document.getElementById("clear");
  let cartContent = document.querySelector('#cart-content');
  let cartTotal = document.querySelector('#final-total');
  let cart = [];

  for(let z = 0; z < add.length; z++) {
    let elem = add[z];
    elem.onclick = function() {
      let itemName = elem.parentNode.querySelector('.item-name');
      let itemPrice = elem.parentNode.querySelector('.item-price');
      cart.push({itemName: itemName.innerText, itemPrice: itemPrice.innerText})
      count.innerHTML = cart.length;
      return false;
    };
  }

  clear.onclick = function() {
    cart.length = 0;
    count.innerHTML = 0;
    cartContent.innerHTML = "";
    cartTotal.innerHTML = "$" + 0.00;
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
    cartContent.innerHTML = "";
    let cartContents = document.createElement('div');
    let finalTotal = 0;
    cart.forEach((cartItem) => {
      finalTotal += parseFloat(cartItem.itemPrice.substring(1), 10)
      let item = document.createElement('div');
      let itemName = document.createElement('span');
      itemName.innerText = cartItem.itemName;
      let itemPrice = document.createElement('span');
      itemPrice.className = "item-cart-price"
      itemPrice.innerText = cartItem.itemPrice;
      item.appendChild(itemName);
      item.appendChild(itemPrice);
      cartContents.appendChild(item);
    });
    cartTotal.innerHTML = "$" + finalTotal
    cartContent.appendChild(cartContents);
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
