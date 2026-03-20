// ===== SHARED MENU DATA (same as script.js) =====
const menuData = [
    { id: 'f1',  name: 'Margherita Pizza',    description: 'Classic tomato sauce with mozzarella and basil',       category: 'food',       price: 299, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop', available: true },
    { id: 'f2',  name: 'Pepperoni Pizza',      description: 'Loaded with spicy pepperoni and cheese',               category: 'food',       price: 349, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&h=600&fit=crop', available: true },
    { id: 'f3',  name: 'Veg Burger',           description: 'Crispy veg patty with lettuce and special sauce',      category: 'food',       price: 149, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop', available: true },
    { id: 'f4',  name: 'Chicken Burger',       description: 'Grilled chicken with coleslaw and mayo',               category: 'food',       price: 199, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&h=600&fit=crop', available: true },
    { id: 'f5',  name: 'Fried Rice',           description: 'Aromatic wok-tossed rice with vegetables',             category: 'food',       price: 179, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop', available: true },
    { id: 'f6',  name: 'Chicken Fried Rice',   description: 'Fried rice loaded with tender chicken pieces',         category: 'food',       price: 229, image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=800&h=600&fit=crop', available: true },
    { id: 'f7',  name: 'Paneer Butter Masala', description: 'Soft paneer in rich buttery tomato gravy',             category: 'food',       price: 249, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&h=600&fit=crop', available: true },
    { id: 'f8',  name: 'Butter Chicken',       description: 'Tender chicken in creamy tomato-butter sauce',         category: 'food',       price: 279, image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&h=600&fit=crop', available: true },
    { id: 'f9',  name: 'Dal Makhani',          description: 'Slow-cooked black lentils with cream and spices',      category: 'food',       price: 199, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop', available: true },
    { id: 'f10', name: 'Biryani',              description: 'Fragrant basmati rice with spiced meat and saffron',   category: 'food',       price: 299, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop', available: true },
    { id: 'f11', name: 'Veg Biryani',          description: 'Aromatic rice with mixed vegetables and whole spices', category: 'food',       price: 249, image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&h=600&fit=crop', available: true },
    { id: 'f12', name: 'Masala Dosa',          description: 'Crispy dosa filled with spiced potato masala',         category: 'food',       price: 129, image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&h=600&fit=crop', available: true },
    { id: 'f13', name: 'Idli Sambar',          description: 'Soft steamed idlis served with sambar and chutney',    category: 'food',       price: 99,  image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&h=600&fit=crop', available: true },
    { id: 'f14', name: 'Pav Bhaji',            description: 'Spiced mashed vegetables with buttered pav',           category: 'food',       price: 149, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600&fit=crop', available: true },
    { id: 'f15', name: 'Chole Bhature',        description: 'Spicy chickpeas with fluffy deep-fried bread',         category: 'food',       price: 169, image: 'https://images.unsplash.com/photo-1626132647523-66c3f4942c4a?w=800&h=600&fit=crop', available: true },
    { id: 'f16', name: 'Samosa (2 pcs)',       description: 'Crispy pastry filled with spiced potatoes and peas',   category: 'food',       price: 49,  image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop', available: true },
    { id: 'f17', name: 'Spring Rolls',         description: 'Crispy rolls stuffed with veggies and noodles',        category: 'food',       price: 129, image: 'https://images.unsplash.com/photo-1548507769-f8a5b2e1e3e3?w=800&h=600&fit=crop', available: true },
    { id: 'f18', name: 'Hakka Noodles',        description: 'Stir-fried noodles with vegetables and soy sauce',     category: 'food',       price: 169, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop', available: true },
    { id: 'f19', name: 'Chicken Noodles',      description: 'Spicy noodles tossed with chicken and peppers',        category: 'food',       price: 199, image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&h=600&fit=crop', available: true },
    { id: 'f20', name: 'Paneer Tikka',         description: 'Marinated paneer grilled in tandoor with spices',      category: 'food',       price: 229, image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&h=600&fit=crop', available: true },
    { id: 'f21', name: 'Chicken Tikka',        description: 'Juicy chicken marinated in yogurt and spices',         category: 'food',       price: 259, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&h=600&fit=crop', available: true },
    { id: 'f22', name: 'Fish & Chips',         description: 'Crispy battered fish with golden fries',               category: 'food',       price: 279, image: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?w=800&h=600&fit=crop', available: true },
    { id: 'f23', name: 'French Fries',         description: 'Golden crispy fries with ketchup and seasoning',       category: 'food',       price: 99,  image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop', available: true },
    { id: 'f24', name: 'Garlic Bread',         description: 'Toasted bread with garlic butter and herbs',           category: 'food',       price: 89,  image: 'https://images.unsplash.com/photo-1619531040576-f9416740661e?w=800&h=600&fit=crop', available: true },
    { id: 'f25', name: 'Caesar Salad',         description: 'Romaine lettuce with Caesar dressing and croutons',    category: 'food',       price: 179, image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&h=600&fit=crop', available: true },
    { id: 'f26', name: 'Pasta Arrabiata',      description: 'Penne pasta in spicy tomato and garlic sauce',         category: 'food',       price: 219, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop', available: true },
    { id: 'f27', name: 'Cheese Sandwich',      description: 'Grilled sandwich loaded with melted cheese',           category: 'food',       price: 119, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&h=600&fit=crop', available: true },
    { id: 'f28', name: 'Club Sandwich',        description: 'Triple-decker sandwich with chicken, egg and veggies', category: 'food',       price: 189, image: 'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=800&h=600&fit=crop', available: true },
    { id: 'f29', name: 'Gulab Jamun',          description: 'Soft milk-solid dumplings soaked in rose syrup',       category: 'food',       price: 79,  image: 'https://images.unsplash.com/photo-1601303516534-bf4c3b5b5e5e?w=800&h=600&fit=crop', available: true },
    { id: 'f30', name: 'Chocolate Brownie',    description: 'Warm fudgy brownie with vanilla ice cream',            category: 'food',       price: 149, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&h=600&fit=crop', available: true },
    { id: 'd1',  name: 'Coca-Cola',            description: 'Chilled classic Coke, 330ml can',                      category: 'cold-drink', price: 40,  image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&h=600&fit=crop', available: true },
    { id: 'd2',  name: 'Pepsi',                description: 'Ice-cold Pepsi, 330ml can',                            category: 'cold-drink', price: 40,  image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=800&h=600&fit=crop', available: true },
    { id: 'd3',  name: 'Sprite',               description: 'Refreshing lemon-lime soda, 330ml',                    category: 'cold-drink', price: 40,  image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=800&h=600&fit=crop', available: true },
    { id: 'd4',  name: 'Mango Lassi',          description: 'Thick chilled yogurt drink with fresh mango',          category: 'cold-drink', price: 89,  image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop', available: true },
    { id: 'd5',  name: 'Fresh Lime Soda',      description: 'Chilled lime juice with soda and mint',                category: 'cold-drink', price: 69,  image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=600&fit=crop', available: true },
    { id: 'd6',  name: 'Cold Coffee',          description: 'Blended iced coffee with milk and cream',              category: 'cold-drink', price: 99,  image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=600&fit=crop', available: true },
    { id: 'd7',  name: 'Watermelon Juice',     description: 'Fresh chilled watermelon juice, no sugar added',       category: 'cold-drink', price: 79,  image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&h=600&fit=crop', available: true },
    { id: 'd8',  name: 'Orange Juice',         description: 'Freshly squeezed chilled orange juice',                category: 'cold-drink', price: 89,  image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&h=600&fit=crop', available: true },
    { id: 'd9',  name: 'Strawberry Milkshake', description: 'Thick creamy milkshake with real strawberries',        category: 'cold-drink', price: 129, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop', available: true },
    { id: 'd10', name: 'Iced Tea',             description: 'Chilled lemon iced tea with a hint of mint',           category: 'cold-drink', price: 69,  image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=600&fit=crop', available: true },
];

// ===== STATE =====
let quantity = 1;
let currentItem = null;

// ===== HELPERS =====
function notify(msg, type) {
    const el = document.getElementById('notification');
    el.textContent = msg;
    el.className = 'notification ' + type + ' show';
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove('show'), 3000);
}

function getUser() {
    try { return JSON.parse(localStorage.getItem('loggedInUser')); } catch { return null; }
}

function updateTotal() {
    if (!currentItem) return;
    document.getElementById('qty-value').textContent = quantity;
    document.getElementById('total-amount').textContent = '₹' + (currentItem.price * quantity);
}

// ===== RENDER PRODUCT =====
function renderProduct(item) {
    currentItem = item;
    const catLabel = item.category === 'cold-drink' ? '🧊 Cold Drink' : '🍽️ Food';

    document.title = item.name + ' - FoodieHub';

    document.getElementById('product-detail').innerHTML = `
        <div class="product-image-side">
            <img src="${item.image}" alt="${item.name}">
            <span class="product-category-badge ${item.category}">${catLabel}</span>
            <div class="image-price-tag"><span>₹${item.price}</span></div>
        </div>
        <div class="product-info-side">
            <h1 class="product-name">${item.name}</h1>
            <p class="product-tagline">${item.description}</p>
            <div class="divider"></div>
            <div class="product-meta">
                <div class="meta-row">
                    <span class="meta-label">Category</span>
                    <span class="meta-value">${catLabel}</span>
                </div>
                <div class="meta-row">
                    <span class="meta-label">Availability</span>
                    <span class="availability-badge ${item.available ? 'available' : 'unavailable'}">
                        ${item.available ? '✅ In Stock' : '❌ Unavailable'}
                    </span>
                </div>
                <div class="meta-row">
                    <span class="meta-label">Unit Price</span>
                    <span class="meta-value" style="color:var(--gold)">₹${item.price}</span>
                </div>
            </div>
            <div class="divider"></div>
            <div class="quantity-section">
                <span class="qty-label">Quantity</span>
                <div class="qty-controls">
                    <button class="qty-btn" id="qty-minus">−</button>
                    <span class="qty-value" id="qty-value">1</span>
                    <button class="qty-btn" id="qty-plus">+</button>
                </div>
            </div>
            <div class="total-display">
                <span class="total-label">Total Amount</span>
                <span class="total-amount" id="total-amount">₹${item.price}</span>
            </div>
            <div class="action-buttons">
                <button class="btn-buy-now" id="buy-now-btn">🛒 Buy Now — Pay via Paytm</button>
                <button class="btn-add-cart" id="add-cart-btn">+ Add to Cart</button>
            </div>
        </div>
    `;

    // Quantity controls
    document.getElementById('qty-minus').addEventListener('click', () => {
        if (quantity > 1) { quantity--; updateTotal(); }
    });
    document.getElementById('qty-plus').addEventListener('click', () => {
        if (quantity < 99) { quantity++; updateTotal(); }
    });

    // Buy Now
    document.getElementById('buy-now-btn').addEventListener('click', () => {
        if (!item.available) { notify('This item is currently unavailable.', 'error'); return; }
        openDeliveryModal();
    });

    // Add to Cart
    document.getElementById('add-cart-btn').addEventListener('click', () => {
        if (!item.available) { notify('This item is currently unavailable.', 'error'); return; }
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const existing = cart.find(i => i.menuItem.id === item.id);
        if (existing) {
            existing.quantity += quantity;
            existing.subtotal  = existing.menuItem.price * existing.quantity;
        } else {
            cart.push({ menuItem: item, quantity, subtotal: item.price * quantity });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        notify(item.name + ' added to cart!', 'success');
    });
}

// ===== DELIVERY MODAL =====
function openDeliveryModal() {
    // Pre-fill from user profile
    const user = getUser();
    if (user) {
        document.getElementById('del-name').value    = user.name    || '';
        document.getElementById('del-phone').value   = user.phone   || '';
        document.getElementById('del-address').value = user.address || '';
        document.getElementById('del-city').value    = user.city    || '';
        document.getElementById('del-pincode').value = user.pincode || '';
    }

    // Order summary
    const total = currentItem.price * quantity;
    document.getElementById('order-mini').innerHTML = `
        <div class="order-mini-row"><span>${currentItem.name} x${quantity}</span><span>₹${currentItem.price * quantity}</span></div>
        <div class="order-mini-row order-mini-total"><span>Total</span><span>₹${total}</span></div>
    `;

    document.getElementById('delivery-modal').classList.add('active');
}

document.getElementById('close-delivery').addEventListener('click', () => {
    document.getElementById('delivery-modal').classList.remove('active');
});
document.getElementById('delivery-modal').addEventListener('click', e => {
    if (e.target.id === 'delivery-modal') document.getElementById('delivery-modal').classList.remove('active');
});

// ===== PAYMENT =====
document.getElementById('pay-btn').addEventListener('click', () => {
    const name    = document.getElementById('del-name').value.trim();
    const phone   = document.getElementById('del-phone').value.trim();
    const address = document.getElementById('del-address').value.trim();
    const city    = document.getElementById('del-city').value.trim();
    const pincode = document.getElementById('del-pincode').value.trim();

    if (!name || !phone || !address || !city || !pincode) {
        notify('Please fill all delivery details.', 'error');
        return;
    }

    const total   = currentItem.price * quantity;
    const orderId = 'ORD' + Date.now();

    const proceed = confirm(
        `Order: ${currentItem.name} x${quantity}\nTotal: ₹${total}\nDeliver to: ${address}, ${city}\n\nClick OK to simulate Paytm payment success.`
    );

    if (proceed) {
        // Save order
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        orders.push({
            orderId,
            items: [{ menuItem: currentItem, quantity, subtotal: total }],
            total,
            delivery: { name, phone, address, city, pincode },
            timestamp: new Date().toISOString(),
            paymentStatus: 'completed',
            transactionId: 'TXN' + Date.now()
        });
        localStorage.setItem('orders', JSON.stringify(orders));

        document.getElementById('delivery-modal').classList.remove('active');
        document.getElementById('success-msg').textContent = `Order ID: ${orderId} | ₹${total} paid successfully!`;
        document.getElementById('success-overlay').classList.add('active');
    } else {
        notify('Payment cancelled.', 'error');
    }
});

// ===== BOOT =====
window.addEventListener('DOMContentLoaded', () => {
    // Check login
    const user = getUser();
    if (!user) {
        window.location.href = 'index.html';
        return;
    }
    document.getElementById('header-user').textContent = '👤 ' + user.name;

    // Get product id from URL
    const params = new URLSearchParams(window.location.search);
    const id     = params.get('id');
    const item   = menuData.find(i => i.id === id);

    if (!item) {
        document.getElementById('product-detail').innerHTML =
            '<p style="padding:40px;color:#999;text-align:center;">Product not found. <a href="index.html">Go back</a></p>';
        return;
    }

    renderProduct(item);
});
