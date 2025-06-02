const cartCount = document.getElementById('cart-count');
const addToCartBtn = document.querySelector('.add-btn');

let existingCount = parseInt(localStorage.getItem('cartCount')) || 0;
cartCount.textContent = existingCount;

// If already in cart, disable the button
if (existingCount >= 1) {
  addToCartBtn.textContent = "Already in Cart";
  addToCartBtn.disabled = true;
  addToCartBtn.style.backgroundColor = "#444";
}

addToCartBtn.addEventListener('click', () => {
  if (existingCount < 1) {
    existingCount = 1;
    localStorage.setItem('cartCount', existingCount);
    cartCount.textContent = existingCount;

    // Visual feedback
    addToCartBtn.textContent = "Added!";
    addToCartBtn.disabled = true;
    addToCartBtn.style.backgroundColor = "#00c851";

    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.classList.add('pop');
    setTimeout(() => cartIcon.classList.remove('pop'), 400);
  }
});



  
