document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');

    // Retrieve cart data from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    let total = 0;

    storedCart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
        total += item.price;
    });

    totalAmount.textContent = total.toFixed(2);
});

function goBack() {
    // Navigate directly to the index page
    window.location.href = 'kelo.html';
<<<<<<< HEAD
}
=======
}
>>>>>>> ef0619075d234bb2fb38d1b7e1dbbd16b3c38e6a
