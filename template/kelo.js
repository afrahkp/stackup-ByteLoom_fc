// Sample product data (you would fetch this from your backend)
const products = [
    { id: 1,  name: 'product1', price: 19.99 },
    { id: 2, name: 'product2', price: 29.99 },
    { id: 3,  name: 'product3', price: 29.99 },
    { id: 4, name: 'product4', price: 29.99 },
    { id: 5, name:'product5', price: 29.99 },
    { id: 6, name: 'product6', price: 29.99 }
];

 

function displayProducts() {
    const productListing = document.getElementById('product-listing');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productListing.appendChild(card);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
        total += item.price;
    });

    totalAmount.textContent = total.toFixed(2);
}

function checkout() {
    document.getElementById('shopping-cart').style.display = 'none';
    document.getElementById('checkout').style.display = 'block';
}

function completePurchase() {
    alert('Thank you for your purchase!');
    // You would typically send the cart data to your backend for processing here
    // and handle the payment and order completion logic on the server side.
}
// main.js
 // main.js
 document.addEventListener('DOMContentLoaded', function() {
    // Fetch products from the backend API
    fetch('http://127.0.0.1:8000/api/products/')
        .then(response => response.json())
        .then(data => {
            // Update the frontend UI with the product list
            const productList = document.getElementById('product-list');
            data.products.forEach(product => {
                productList.innerHTML += `<p>${product.name} - $${product.price}</p>`;
            });
        })
        .catch(error => console.error('Error:', error));
});

