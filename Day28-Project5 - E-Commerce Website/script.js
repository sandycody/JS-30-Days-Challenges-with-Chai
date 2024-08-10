document.addEventListener('DOMContentLoaded', async () => {
    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const orderDetails = document.getElementById('order-details');
    let cart = [];
    
    // Fetch product data
    const response = await fetch('products.json');
    const products = await response.json();

    // Generate product listing
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt=${product.name}"" />
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>₹${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });

    // Add product to cart
    window.addToCart = async (productId) => {
        const product = products.find(p => p.id === productId);
        if (product) {
            const cartItem = cart.find(item => item.id === productId);
            if (cartItem) {
                cartItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            updateCartDisplay();
        }
    };

    // Example function to calculate total
    function calculateTotal(cart) {
        let cartTotal = 0;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            cartTotal += itemTotal;
        });
        return cartTotal.toFixed(2);
    }

    // Update cart display
    const updateCartDisplay = () => {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `   
                <span>${item.name}</span>
                <span>₹${item.price.toFixed(2)}</span>
                <div class="cart-item-controls">
                <button class="action_btn" onclick="updateQuantity(${item.id}, 'decrease')">-</button>
                <span>${item.quantity}</span>
                <button class="action_btn" onclick="updateQuantity(${item.id}, 'increase')">+</button>
                </div>
                <button class="remove_btn" onclick="removeFromCart(${item.id})">Remove</button>
                `;
            cartItems.appendChild(itemElement);
        });
        document.getElementById('cart-total').textContent = `Total: ₹${calculateTotal(cart)}`;
    };

    // Update quantity of products in the cart
    window.updateQuantity = (productId, action) => {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            if (action === 'increase') {
                cartItem.quantity++;
            } else if (action === 'decrease' && cartItem.quantity > 1) {
                cartItem.quantity--;
            }
            updateCartDisplay();
        }
    };

    // Remove product from cart
    window.removeFromCart = (productId) => {
        const cartIndex = cart.findIndex(item => item.id === productId);
        if (cartIndex !== -1) {
            cart.splice(cartIndex, 1);
            updateCartDisplay();
        }
    };

    document.getElementById('checkout').style.display = "none";
    document.getElementById('checkout-btn').addEventListener('click', () => {

        if (cart.length === 0) {
            alert("Please add some item to cart first");

        } else if (cart.length > 0) {
            alert(`Proceeding to checkout. \nTotal Price : ₹${calculateTotal(cart)}`);
            proceedToCheckout();
            orderDetails.innerHTML += `<strong>Total: ₹${calculateTotal(cart)}</strong>`;
            document.getElementById('checkout').style.display = "block";
        }
    })

    orderDetails.innerHTML = `<h3>Order Details</h3>`;
    function proceedToCheckout() {
        cart.forEach(item => {
            const itemTotal = (item.price * item.quantity);
            orderDetails.innerHTML += `
                <p> ${item.name} X ${item.quantity}: ₹${itemTotal}</p>
            `;
        });
    }
    

    // Handle form submission
    document.getElementById('checkoutForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Simulate order processing
        setTimeout(() => {
            alert('Order placed successfully! Thank you for your purchase.');
            cart = [];
            window.location.href = 'index.html';
        }, 1500);
    });


    // Scrolling of page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetElement = document.querySelector(this.getAttribute('href'));

            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});