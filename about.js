// Sync cart count from localStorage
const cartCount = document.getElementById('cart-count');
cartCount.textContent = localStorage.getItem('cartCount') || 0;
