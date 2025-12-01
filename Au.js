const products = {
    women: [
        {
            id: 'w1',
            name: 'Eclaire Lattafa',
            price: 2700,
            image: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.93628.2x.avif',
            description: 'Lattafa Eclaire is a sweet, creamy fragrance that wraps you in warmth and indulgence. It opens with rich notes of caramel and sugar, melting smoothly into soft milky accords and hints of vanilla. As it settles, gentle musks and creamy woods create a cozy, irresistible trail that feels both comforting and luxurious. Perfect for lovers of gourmand scents, Eclaire is like wearing dessert on your skin—soft, addictive, and unforgettable.'
        },
        {
            id: 'w2',
            name: 'Chloé Le Parfum',
            price: 4410,
            image: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.111273.2x.avif',
            description: 'Chloé Le Parfum is a timeless floral fragrance that captures pure femininity and effortless elegance. It opens with fresh, delicate florals that bloom into a soft heart of romantic rose, beautifully balanced by subtle notes of peony and lychee. As it dries down, warm hints of cedarwood and amber add depth and sophistication, leaving a graceful and long-lasting trail. Light, chic, and refined, this scent is perfect for everyday wear or special moments when you want to feel quietly luxurious.'
        },
        {
            id: 'w3',
            name: 'Vanilla 01 Swiss Arabian',
            price: 3700,
            image: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.117520.2x.avif',
            description: 'Vanilla 01 by Swiss Arabian is a warm, creamy fragrance that celebrates the beauty of pure vanilla. It opens with soft sweetness that feels smooth and comforting, slowly unfolding into rich vanilla tones blended with gentle musks. As it settles, the scent becomes deeper and more sensual, wrapping the skin in a cozy, lingering trail that feels both simple and luxurious. Perfect for lovers of soft gourmand fragrances, this scent is ideal for daily wear or anytime you want a touch of sweetness that never feels overwhelming.'
        },
        {
            id: 'w4',
            name: 'Rose Ambre Fragonard',
            price: 2900,
            image: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.25968.2x.avif',
            description: 'Rose Ambre by Fragonard is a rich and sensual fragrance that blends romantic florals with deep oriental warmth. It opens with soft, elegant rose, gently wrapped in subtle spices that add intrigue and depth. As the scent unfolds, warm amber and smooth resins emerge, creating a glowing, luxurious base that feels comforting yet seductive. Balanced between sweetness and warmth, this perfume leaves a lasting impression that is both mysterious and timeless.'
        },
        {
            id: 'w5',
            name: 'Haya Lattafa',
            price: 3500,
            image: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.85031.2x.avif',
            description: 'Haya by Lattafa is a bright and joyful fragrance that blends sparkling fruits with soft florals and creamy sweetness. It opens with a fresh burst of juicy notes that feel playful and uplifting, then melts into a heart of delicate flowers and smooth accords. As it dries down, warm vanilla and gentle musk add a soft, comforting finish that lingers beautifully on the skin. Feminine, youthful, and charming, Haya is perfect for everyday wear or moments when you want to feel light and confident.'
        }
    ],
    men: [
        {
            id: 'm1',
            name: 'Horizon Guy Laroche',
            price: 3200,
            image: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.2070.2x.avif',
            description: 'Horizon by Guy Laroche is a fresh and confident fragrance inspired by freedom and open skies. It opens with crisp, invigorating notes that immediately energize the senses, followed by a heart of soft spices and aromatic woods that add depth and character. As it settles, warm amber and smooth musks create a clean, masculine trail that feels modern and effortlessly stylish. Perfect for daily wear, Horizon is a scent for men who enjoy simplicity with a touch of sophistication.'
        },
        {
            id: 'm2',
            name: 'Amber Empire',
            price: 3550,
            image: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.116876.2x.avif',
            description: 'Amber Empire is a bold and sensual fragrance that celebrates the richness of amber in all its glory. It opens with warm, glowing notes that instantly feel luxurious, then deepens into a smooth blend of resins, soft spices, and subtle sweetness. As it settles, creamy woods and gentle musks create a powerful, long-lasting trail that feels both royal and addictive. This is a scent made for evenings, confidence, and leaving a memorable impression wherever you go.'
        },
        {
            id: 'm3',
            name: 'Club De Nuit Urban',
            price: 3500,
            image: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.77860.2x.avif',
            description: 'Club De Nuit Urban is a bold and energetic fragrance made for the city lifestyle. It opens with a fresh burst that feels vibrant and confident, followed by a heart of smooth spices and subtle florals that add a refined edge. As it dries down, warm woods and soft musks create a masculine, long-lasting trail that feels stylish and powerful. Modern and versatile, this scent is perfect for day-to-night wear when you want to stand out without trying too hard.'
        },
        {
            id: 'm4',
            name: 'Shuhrah Elixir Rasasi',
            price: 3000,
            image: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.112548.2x.avif',
            description: 'Shuhrah Elixir by Rasasi is a deep, intense fragrance made for those who love bold and unforgettable scents. It opens with a smooth touch of sweetness and mystery, quickly revealing a heart filled with dark fruits and warm spices. As it settles, smoky woods, rich amber, and soft musks create a powerful and seductive trail that lasts for hours. Dark, elegant, and addictive, this scent is perfect for evenings, special occasions, and making a strong statement.'
        },
        {
            id: 'm5',
            name: 'Asad Elixir Lataffa',
            price: 3000,
            image: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.117616.2x.avif',
            description: 'Asad Elixir by Lattafa is a powerful and seductive fragrance that radiates confidence and warmth. It opens with a bold sweetness touched by spice, instantly drawing attention. As the scent develops, rich vanilla and aromatic notes take center stage, creating a smooth yet intense heart. The base settles into deep amber, woods, and soft musk, leaving behind a strong, long-lasting trail that feels mysterious and masculine. This is the ideal fragrance for evenings, special occasions, and anyone who wants to make a fearless impression.'
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
