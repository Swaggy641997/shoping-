 // Toggle active class on button click
  document.querySelectorAll('.actions button').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
    });
  });
   


  let cartItems = [];
  let total = 0;

  function addToCart(name, price) {
    // Add product to cart array
    cartItems.push({ name, price });

    // Update total price
    total += price;

    // Show popup
    showCart();
  }

  function showCart() {
    const cartPopup = document.getElementById('cart-popup');
    const itemsList = document.getElementById('cart-items');
    const totalSpan = document.getElementById('cart-total');

    // Clear previous items
    itemsList.innerHTML = '';

    // Add each item to popup list
    cartItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      itemsList.appendChild(li);
    });

    // Update total price
    totalSpan.textContent = total.toFixed(2);

    // Show popup
    cartPopup.style.display = 'block';
  }

  function closeCart() {
    document.getElementById('cart-popup').style.display = 'none';
  }

  document.getElementById('cart-count').textContent = cartItems.length;
  function addToCart(name, price) {
  // Add product to cart array
  cartItems.push({ name, price });

  // Update total price
  total += price;

  // Update cart item count
  document.getElementById('cart-count').textContent = cartItems.length;

  // Show popup
  showCart();
}

function openPopup() {
  document.getElementById('authPopup').style.display = 'block';
}

function showTab(tabName) {
  document.getElementById('loginTab').style.display = tabName === 'login' ? 'block' : 'none';
  document.getElementById('registerTab').style.display = tabName === 'register' ? 'block' : 'none';
}

function closePopup() {
  document.getElementById('authPopup').style.display = 'none';
}
