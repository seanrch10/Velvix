addToCartBtn.addEventListener('click', () => {
    let quantity = parseInt(quantityInput.value);
    if (isNaN(quantity) || quantity < 1) {
      quantity = 1;
      quantityInput.value = 1;
    }
  
    totalItems += quantity;
    cartCount.textContent = totalItems;
  
    // Visual feedback for button
    addToCartBtn.textContent = "✓ Added!";
    addToCartBtn.style.backgroundColor = "#00c851";
  
    // Cart animation
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.classList.add('pop');
    setTimeout(() => cartIcon.classList.remove('pop'), 400);
  
    setTimeout(() => {
      addToCartBtn.textContent = "Add to Cart";
      addToCartBtn.style.backgroundColor = "#ff003c";
    }, 1200);
  });

  const cartCount = document.getElementById('cart-count');
const existingCount = parseInt(localStorage.getItem('cartCount')) || 0;
cartCount.textContent = existingCount;
  

  