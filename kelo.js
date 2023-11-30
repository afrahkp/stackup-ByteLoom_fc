// Sample product data (you would fetch this from your backend)
const products = [
    { id: 1, category: 'Gadgets', name: 'Smartphone X', price: 499.99 },
    { id: 2, category: 'Gadgets', name: 'Smartwatch Z', price: 199.99 },
    { id: 3, category: 'Accessories', name: 'Wireless Earbuds', price: 79.99 },
    { id: 4, category: 'Accessories', name: 'Laptop Backpack', price: 49.99 },
    { id: 5, category: 'Gadgets', name: 'Camera Drone', price: 299.99 },
    { id: 6, category: 'Accessories', name: 'Bluetooth Speaker', price: 129.99 }
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