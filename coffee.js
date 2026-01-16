let cart = [];

function addToCart(name, price) {
  const item = cart.find((i) => i.name === name);
  if (item) item.qty++;
  else cart.push({ name, price, qty: 1 });

  updateCart();
}

function updateCart() {
  const cartBox = document.getElementById("cartItems");
  const total = document.getElementById("total");
  const count = document.getElementById("count");

  cartBox.innerHTML = "";
  let sum = 0;

  cart.forEach((item, index) => {
    sum += item.price * item.qty;
    cartBox.innerHTML += `
      <div class="cart-item">
        <span>${item.name} x ${item.qty}</span>
        <button onclick="removeItem(${index})">X</button>
      </div>`;
  });

  total.innerText = sum.toFixed(2);
  count.innerText = cart.length;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("active");
}

function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}