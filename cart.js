const quantityInput = document.getElementById('qty');
const subtotalDisplay = document.getElementById('subtotal');
const removeBtn = document.querySelector('.remove-btn');
const cartItem = document.querySelector('.cart-item');

const pricePerItem = 19.99;


const cartCount = document.getElementById('cart-count');
const existingCount = parseInt(localStorage.getItem('cartCount')) || 0;
cartCount.textContent = existingCount;
