// script.js
const cart = [];

// Add product to cart
function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(`${productName} has been added to your cart.`);
    updateCartCount();
}

// Update cart count in the UI
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cart.length;
}

// Initialize event listeners for "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            addToCart(productName, price);
        });
    });
});
