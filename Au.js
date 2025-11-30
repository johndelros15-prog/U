const products = {
    women: [
        {
            id: 'w1',
            name: 'Chloe Le Parfum',
            price: 3550,
            image: 'https://i.imgur.com/8QZ9Z1K.jpg',
            description: 'Chloe Le Parfum blooms with soft, graceful florals that linger with effortless femininity. This exquisite fragrance opens with a delicate bouquet of rose and jasmine, creating an immediate sense of romantic elegance. The heart reveals powdery iris and warm honey notes that add depth and sophistication. As it settles, the base notes of cedarwood and white musk provide a lasting impression of refined femininity. Perfect for the modern woman who appreciates timeless beauty and understated luxury.'
        },
        {
            id: 'w2',
            name: 'Rose Ambre Fragonard',
            price: 3000,
            image: 'https://i.imgur.com/5N6P7K2.jpg',
            description: 'Soft, warm, and exquisitely floral, Rose Ambre leaves a trail of refined, captivating charm. This luxurious fragrance combines the classic beauty of rose with the warmth of amber, creating a sophisticated scent that evolves beautifully throughout the day. The opening is bright with fresh rose petals, while the heart reveals a rich amber accord complemented by hints of vanilla and sandalwood. The result is a fragrance that is both romantic and mysterious, perfect for evening wear or special occasions.'
        },
        {
            id: 'w3',
            name: 'Velvet Blossom Sand + Fog',
            price: 1500,
            image: 'https://i.imgur.com/7M8N9P3.jpg',
            description: 'Soft, enchanting, and quietly luxurious, Velvet Blossom Sand + Fog evokes a trail of sophisticated serenity. This unique fragrance captures the essence of a peaceful morning by the sea, with notes of fresh ocean air, delicate florals, and warm sand. The opening is crisp and clean, reminiscent of sea spray, while the heart reveals soft peony and jasmine. The dry-down is warm and comforting with hints of white musk and driftwood, creating a scent that is both calming and alluring.'
        },
        {
            id: 'w4',
            name: 'Haya Lattafa',
            price: 3000,
            image: 'https://i.imgur.com/9O1Q2R4.jpg',
            description: 'A luminous blend of florals and gentle sweetness, Haya leaves a trail of pure, radiant femininity. This captivating fragrance opens with sparkling citrus notes that immediately uplift the senses. The heart reveals a beautiful bouquet of white flowers - jasmine, tuberose, and orange blossom - that create an aura of elegance and grace. The base is warm and sensual with vanilla, white musk, and subtle woody notes, making it perfect for the confident woman who wants to leave a lasting impression.'
        },
        {
            id: 'w5',
            name: 'Vanilla Aura',
            price: 2900,
            image: 'https://i.imgur.com/3R4S5T6.jpg',
            description: 'Vanilla Aura unfolds like a gentle whisper of sweetness, leaving an irresistible, cozy charm. This delightful fragrance reimagines vanilla in the most sophisticated way, combining Madagascar vanilla with hints of caramel and tonka bean. The opening is soft and inviting with notes of vanilla orchid, while the heart reveals rich bourbon vanilla absolute. The dry-down is warm and comforting with amber and musk, creating a scent that is both familiar and extraordinary. Perfect for everyday wear or cozy evenings.'
        }
    ],
    men: [
        {
            id: 'm1',
            name: 'Horizon Guy Laroche',
            price: 3200,
            image: 'https://i.imgur.com/2T3U4V5.jpg',
            description: 'A bold journey of citrus and spice, Horizon captures the spirit of modern adventure. This dynamic fragrance opens with an invigorating burst of grapefruit and mandarin, immediately awakening the senses. The heart reveals a sophisticated blend of ginger, nutmeg, and cardamom that adds warmth and complexity. The base notes of cedarwood, vetiver, and musk provide a masculine foundation that lingers confidently throughout the day. Designed for the man who embraces challenges and lives life to the fullest.'
        },
        {
            id: 'm2',
            name: 'Shuhrah Elixir Rasasi',
            price: 3000,
            image: 'https://i.imgur.com/5U6V7W8.jpg',
            description: 'Shuhrah Elixir exudes opulent warmth and gentle sensuality, lingering with timeless charm. This sophisticated oriental fragrance opens with fresh bergamot and lavender, creating an immediate impression of refined masculinity. The heart reveals rich spices - cinnamon, clove, and cardamom - that add depth and intrigue. The base is luxurious with oud, amber, and musk creating a warm, sensual trail that commands attention without being overwhelming. Perfect for the discerning gentleman who appreciates traditional craftsmanship with modern appeal.'
        },
        {
            id: 'm3',
            name: 'Dynasty Lattafa',
            price: 3000,
            image: 'https://i.imgur.com/7W8X9Y0.jpg',
            description: 'A sophisticated harmony of deep spices and smooth amber, Dynasty leaves a trail of timeless allure. This commanding fragrance opens with bold black pepper and saffron, creating an immediate impression of power and confidence. The heart reveals a complex blend of rose, jasmine, and patchouli that adds sophistication and depth. The base is rich and lasting with amber, oud, and leather notes that create a memorable signature scent. Designed for the man who leads with elegance and leaves a lasting legacy.'
        },
        {
            id: 'm4',
            name: 'Asad Elixir Lattafa',
            price: 3000,
            image: 'https://i.imgur.com/9X0Y1Z2.jpg',
            description: 'Bold, smooth, and unforgettable, Asad Elixir captures the essence of refined masculinity. This powerful fragrance opens with fresh citrus and aromatic herbs that immediately command attention. The heart reveals a sophisticated blend of florals and spices - rose, jasmine, and black pepper - that create complexity and intrigue. The base is warm and sensual with vanilla, amber, and musk providing a luxurious foundation that lasts for hours. Perfect for the modern man who is both strong and sophisticated.'
        },
        {
            id: 'm5',
            name: 'Club De Nuit Urban',
            price: 2300,
            image: 'https://i.imgur.com/1Y2A3B4.jpg',
            description: 'A striking fusion of vibrant energy and refined warmth, Urban Elixir embodies contemporary elegance. This modern fragrance opens with fresh lemon and bergamot that immediately energize the senses. The heart reveals a unique blend of iris and pink pepper that adds sophistication and urban edge. The base is warm and masculine with amberwood, musk, and oakmoss creating a scent that is both fresh and grounding. Designed for the man who navigates the city with confidence and style.'
        }
    ],
    unisex: [
        {
            id: 'u1',
            name: 'Eclaire Lattafa',
            price: 2700,
            image: 'https://i.imgur.com/4C5D6E7.jpg',
            description: 'Eclaire captivates the senses with a creamy sweetness that lingers like a soft, luminous whisper. This unisex gourmand fragrance opens with delicious notes of caramel and vanilla that immediately create a sense of comfort and luxury. The heart reveals creamy sandalwood and white flowers that add sophistication and balance. The dry-down is warm and sensual with musk and amber creating a scent that is both edible and elegant. Perfect for those who appreciate sweet fragrances that are refined and wearable for any occasion.'
        },
        {
            id: 'u2',
            name: 'Forbidden Fruit',
            price: 2700,
            image: 'https://i.imgur.com/6F7G8H9.jpg',
            description: 'Delicate yet daring, Forbidden Fruit lingers with a refined, irresistible charm. This intriguing unisex fragrance opens with fresh apple and blackcurrant that create an immediate sense of mystery and allure. The heart reveals a sophisticated blend of rose and jasmine that adds floral elegance without being too feminine. The base is warm and sensual with patchouli, vanilla, and musk creating a scent that is both fresh and seductive. Perfect for those who want to make a subtle yet memorable statement.'
        },
        {
            id: 'u3',
            name: 'Island Vanilla Dunes',
            price: 2400,
            image: 'https://i.imgur.com/8H9I0J1.jpg',
            description: 'Island Vanilla Dunes carries the warmth of sun-kissed sands and creamy vanilla, leaving a soft, captivating trail. This beach-inspired unisex fragrance opens with fresh coconut and sea salt that immediately transport you to a tropical paradise. The heart reveals creamy vanilla and tiare flower that create a sense of relaxation and luxury. The dry-down is warm and comforting with sandalwood and white musk, reminiscent of warm skin after a day at the beach. Perfect for those who want to carry the essence of summer with them year-round.'
        },
        {
            id: 'u4',
            name: 'Amber Empire',
            price: 4410,
            image: 'https://i.imgur.com/0I1J2K3.jpg',
            description: 'Warm, opulent, and irresistibly smooth, Amber Empire leaves a trail of refined elegance. This luxurious unisex fragrance opens with rich amber and incense that immediately create an atmosphere of sophistication and mystery. The heart reveals a complex blend of spices - cinnamon, cardamom, and nutmeg - that add warmth and depth. The base is sensual and lasting with oud, sandalwood, and vanilla creating a scent that is both exotic and familiar. Perfect for special occasions or when you want to feel truly luxurious.'
        },
        {
            id: 'u5',
            name: 'Vanilla 01 Swiss Arabian',
            price: 3500,
            image: 'https://i.imgur.com/2J3K4L5.jpg',
            description: 'A rich swirl of velvety vanilla that leaves a soft, addictive warmth lingering beautifully on the skin. This sophisticated vanilla fragrance reimagines the beloved note in the most luxurious way possible. The opening is bright with vanilla orchid and hints of citrus that prevent it from being too sweet. The heart reveals rich Madagascar vanilla absolute complemented by tonka bean. The base is warm and sensual with amber and musk creating a scent that is both comforting and alluring. Perfect for vanilla lovers who want something refined and unique.'
        }
    ]
};

// Shopping cart
let cart = [];
let orders = [];

// Initialize the store
function init() {
    renderProducts('women');
    renderProducts('men');
    renderProducts('unisex');
    updateOrderCount();
}

// Render products for each category
function renderProducts(category) {
    const container = document.getElementById(`${category}-products`);
    container.innerHTML = products[category].map(product => `
        <div class="product-card" onclick="showProductDetails('${product.id}', '${category}')">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description.substring(0, 100)}...</p>
                <p class="product-price">₱${product.price.toLocaleString()}</p>
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart('${product.id}', '${category}')">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Show product details
function showProductDetails(productId, category) {
    const product = products[category].find(p => p.id === productId);
    const modal = document.getElementById('product-modal');
    const details = document.getElementById('product-details');
    
    details.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-detail-image">
        <h2 class="product-detail-name">${product.name}</h2>
        <p class="product-detail-price">₱${product.price.toLocaleString()}</p>
        <p class="product-detail-description">${product.description}</p>
        <div class="quantity-controls">
            <button class="quantity-btn" onclick="updateQuantity('${productId}', -1)">-</button>
            <span class="quantity" id="quantity-${productId}">1</span>
            <button class="quantity-btn" onclick="updateQuantity('${productId}', 1)">+</button>
        </div>
        <button class="add-to-cart-btn" onclick="addToCartFromModal('${productId}', '${category}')">
            Add to Cart
        </button>
    `;
    
    modal.style.display = 'block';
}

// Update quantity
function updateQuantity(productId, change) {
    const quantityElement = document.getElementById(`quantity-${productId}`);
    let currentQuantity = parseInt(quantityElement.textContent);
    currentQuantity = Math.max(1, currentQuantity + change);
    quantityElement.textContent = currentQuantity;
}

// Add to cart from modal
function addToCartFromModal(productId, category) {
    const quantity = parseInt(document.getElementById(`quantity-${productId}`).textContent);
    addToCart(productId, category, quantity);
    closeProductModal();
}

// Add to cart
function addToCart(productId, category, quantity = 1) {
    const product = products[category].find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity,
            category: category
        });
    }
    
    updateOrderCount();
    showNotification('Added to cart!');
}

// Update order count
function updateOrderCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('order-count').textContent = totalItems;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #8b6f47;
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Toggle orders modal
function toggleOrders() {
    const modal = document.getElementById('orders-modal');
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        renderOrders();
        modal.style.display = 'block';
    }
}

function renderOrders(){
    const listEl = document.getElementById('orders-list');
    const totalEl = document.getElementById('total-price');

    if(cart.length === 0){
        listEl.innerHTML = '<p style="text-align:center">Your beige-cart is empty 🌸</p>';
        totalEl.textContent = '0';
        return;
    }

    listEl.innerHTML = cart.map(item => `
        <div class="order-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="order-info">
                <h4>${item.name}</h4>
                <p>₱${item.price.toLocaleString()} each</p>
                <div class="cart-qty-controls">
                    <button onclick="changeCartQty('${item.id}',-1)">–</button>
                    <span class="cart-qty">${item.quantity}</span>
                    <button onclick="changeCartQty('${item.id}',+1)">+</button>
                </div>
                <p style="font-weight:700;margin-top:4px">₱${(item.price * item.quantity).toLocaleString()}</p>
            </div>
            <button class="remove-order-btn" onclick="removeFromCart('${item.id}')">✖</button>
        </div>
    `).join('');

    const total = cart.reduce((sum,it) => sum + it.price * it.quantity, 0);
    totalEl.textContent = total.toLocaleString();

    // checkout button
    listEl.innerHTML += `
        <button class="submit-order-btn" onclick="proceedToPayment()" style="margin-top:20px;width:100%">
            Proceed to Payment
        </button>`;
}

// helper: change quantity in cart
function changeCartQty(id, delta){
    const item = cart.find(i => i.id === id);
    if(!item) return;
    item.quantity = Math.max(1, item.quantity + delta);
    renderOrders();          // refresh panel
    updateOrderCount();      // update floating badge
}


// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateOrderCount();
    renderOrders();
}

// Proceed to payment
function proceedToPayment() {
    document.getElementById('orders-modal').style.display = 'none';
    document.getElementById('payment-modal').style.display = 'block';
}

// Select payment method
function selectPayment(method) {
    const form = document.getElementById('payment-form');
    form.style.display = 'block';
    form.onsubmit = (e) => {
        e.preventDefault();
        processOrder(method);
    };
}

// Process order
function processOrder(paymentMethod) {
    const name = document.getElementById('customer-name').value;
    const number = document.getElementById('customer-number').value;
    
    if (!name || !number) {
        alert('Please fill in all fields');
        return;
    }
    
    // Create order
    const order = {
        id: Date.now(),
        items: [...cart],
        customer: { name, number },
        paymentMethod: paymentMethod,
        date: new Date().toLocaleString(),
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    };
    
    orders.push(order);
    
    // Clear cart
    cart = [];
    updateOrderCount();
    
    // Close payment modal
    closePaymentModal();
    
    // Show success message
    alert('Thanks for your order, this is only a demo store');
}

// Close modals
function closeProductModal() {
    document.getElementById('product-modal').style.display = 'none';
}

function closePaymentModal() {
    document.getElementById('payment-modal').style.display = 'none';
    document.getElementById('payment-form').style.display = 'none';
}

// Show category
function showCategory(category) {
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Show selected category
    document.querySelectorAll('.category-section').forEach(section => section.classList.remove('active'));
    document.getElementById(category).classList.add('active');
}

// Initialize on load
window.onload = init;

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}
