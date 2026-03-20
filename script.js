// ===== MENU DATA =====
const menuData = [
    // ---- FOOD (30 items) ----
    { id: 'f1',  name: 'Margherita Pizza',      description: 'Classic tomato sauce with mozzarella and basil',       category: 'food', price: 299, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop', available: true },
    { id: 'f2',  name: 'Pepperoni Pizza',        description: 'Loaded with spicy pepperoni and cheese',               category: 'food', price: 349, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop', available: true },
    { id: 'f3',  name: 'Veg Burger',             description: 'Crispy veg patty with lettuce and special sauce',      category: 'food', price: 149, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop', available: true },
    { id: 'f4',  name: 'Chicken Burger',         description: 'Grilled chicken with coleslaw and mayo',               category: 'food', price: 199, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop', available: true },
    { id: 'f5',  name: 'Fried Rice',             description: 'Aromatic wok-tossed rice with vegetables',             category: 'food', price: 179, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop', available: true },
    { id: 'f6',  name: 'Chicken Fried Rice',     description: 'Fried rice loaded with tender chicken pieces',         category: 'food', price: 229, image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400&h=300&fit=crop', available: true },
    { id: 'f7',  name: 'Paneer Butter Masala',   description: 'Soft paneer in rich buttery tomato gravy',             category: 'food', price: 249, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop', available: true },
    { id: 'f8',  name: 'Butter Chicken',         description: 'Tender chicken in creamy tomato-butter sauce',         category: 'food', price: 279, image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&h=300&fit=crop', available: true },
    { id: 'f9',  name: 'Dal Makhani',            description: 'Slow-cooked black lentils with cream and spices',      category: 'food', price: 199, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop', available: true },
    { id: 'f10', name: 'Biryani',                description: 'Fragrant basmati rice with spiced meat and saffron',   category: 'food', price: 299, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop', available: true },
    { id: 'f11', name: 'Veg Biryani',            description: 'Aromatic rice with mixed vegetables and whole spices', category: 'food', price: 249, image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=300&fit=crop', available: true },
    { id: 'f12', name: 'Masala Dosa',            description: 'Crispy dosa filled with spiced potato masala',         category: 'food', price: 129, image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop', available: true },
    { id: 'f13', name: 'Idli Sambar',            description: 'Soft steamed idlis served with sambar and chutney',    category: 'food', price: 99,  image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop', available: true },
    { id: 'f14', name: 'Pav Bhaji',              description: 'Spiced mashed vegetables with buttered pav',           category: 'food', price: 149, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop', available: true },
    { id: 'f15', name: 'Chole Bhature',          description: 'Spicy chickpeas with fluffy deep-fried bread',         category: 'food', price: 169, image: 'https://images.unsplash.com/photo-1626132647523-66c3f4942c4a?w=400&h=300&fit=crop', available: true },
    { id: 'f16', name: 'Samosa (2 pcs)',         description: 'Crispy pastry filled with spiced potatoes and peas',   category: 'food', price: 49,  image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop', available: true },
    { id: 'f17', name: 'Spring Rolls',           description: 'Crispy rolls stuffed with veggies and noodles',        category: 'food', price: 129, image: 'https://images.unsplash.com/photo-1548507769-f8a5b2e1e3e3?w=400&h=300&fit=crop', available: true },
    { id: 'f18', name: 'Hakka Noodles',          description: 'Stir-fried noodles with vegetables and soy sauce',     category: 'food', price: 169, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop', available: true },
    { id: 'f19', name: 'Chicken Noodles',        description: 'Spicy noodles tossed with chicken and peppers',        category: 'food', price: 199, image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop', available: true },
    { id: 'f20', name: 'Paneer Tikka',           description: 'Marinated paneer grilled in tandoor with spices',      category: 'food', price: 229, image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop', available: true },
    { id: 'f21', name: 'Chicken Tikka',          description: 'Juicy chicken marinated in yogurt and spices',         category: 'food', price: 259, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop', available: true },
    { id: 'f22', name: 'Fish & Chips',           description: 'Crispy battered fish with golden fries',               category: 'food', price: 279, image: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?w=400&h=300&fit=crop', available: true },
    { id: 'f23', name: 'French Fries',           description: 'Golden crispy fries with ketchup and seasoning',       category: 'food', price: 99,  image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop', available: true },
    { id: 'f24', name: 'Garlic Bread',           description: 'Toasted bread with garlic butter and herbs',           category: 'food', price: 89,  image: 'https://images.unsplash.com/photo-1619531040576-f9416740661e?w=400&h=300&fit=crop', available: true },
    { id: 'f25', name: 'Caesar Salad',           description: 'Romaine lettuce with Caesar dressing and croutons',    category: 'food', price: 179, image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop', available: true },
    { id: 'f26', name: 'Pasta Arrabiata',        description: 'Penne pasta in spicy tomato and garlic sauce',         category: 'food', price: 219, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop', available: true },
    { id: 'f27', name: 'Cheese Sandwich',        description: 'Grilled sandwich loaded with melted cheese',           category: 'food', price: 119, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop', available: true },
    { id: 'f28', name: 'Club Sandwich',          description: 'Triple-decker sandwich with chicken, egg and veggies', category: 'food', price: 189, image: 'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=400&h=300&fit=crop', available: true },
    { id: 'f29', name: 'Gulab Jamun',            description: 'Soft milk-solid dumplings soaked in rose syrup',       category: 'food', price: 79,  image: 'https://images.unsplash.com/photo-1601303516534-bf4c3b5b5e5e?w=400&h=300&fit=crop', available: true },
    { id: 'f30', name: 'Chocolate Brownie',      description: 'Warm fudgy brownie with vanilla ice cream',            category: 'food', price: 149, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop', available: true },

    // ---- COLD DRINKS (10 items) ----
    { id: 'd1',  name: 'Coca-Cola',              description: 'Chilled classic Coke, 330ml can',                      category: 'cold-drink', price: 40,  image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop', available: true },
    { id: 'd2',  name: 'Pepsi',                  description: 'Ice-cold Pepsi, 330ml can',                            category: 'cold-drink', price: 40,  image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&h=300&fit=crop', available: true },
    { id: 'd3',  name: 'Sprite',                 description: 'Refreshing lemon-lime soda, 330ml',                    category: 'cold-drink', price: 40,  image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&h=300&fit=crop', available: true },
    { id: 'd4',  name: 'Mango Lassi',            description: 'Thick chilled yogurt drink with fresh mango',          category: 'cold-drink', price: 89,  image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop', available: true },
    { id: 'd5',  name: 'Fresh Lime Soda',        description: 'Chilled lime juice with soda and mint',                category: 'cold-drink', price: 69,  image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop', available: true },
    { id: 'd6',  name: 'Cold Coffee',            description: 'Blended iced coffee with milk and cream',              category: 'cold-drink', price: 99,  image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop', available: true },
    { id: 'd7',  name: 'Watermelon Juice',       description: 'Fresh chilled watermelon juice, no sugar added',       category: 'cold-drink', price: 79,  image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=300&fit=crop', available: true },
    { id: 'd8',  name: 'Orange Juice',           description: 'Freshly squeezed chilled orange juice',                category: 'cold-drink', price: 89,  image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop', available: true },
    { id: 'd9',  name: 'Strawberry Milkshake',   description: 'Thick creamy milkshake with real strawberries',        category: 'cold-drink', price: 129, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop', available: true },
    { id: 'd10', name: 'Iced Tea',               description: 'Chilled lemon iced tea with a hint of mint',           category: 'cold-drink', price: 69,  image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop', available: true },
];

// ===== SPLASH SCREEN =====
// Hide splash after 2.4s (matches loader animation) then show auth
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        splash.classList.add('hide');

        // After fade-out transition, check login state
        setTimeout(() => {
            splash.style.display = 'none';
            const user = getLoggedInUser();
            if (user) {
                showApp(user);
            } else {
                showAuthModal();
            }
        }, 700);
    }, 2400);
});

// ===== AUTH HELPERS =====
function getLoggedInUser() {
    try { return JSON.parse(localStorage.getItem('loggedInUser')); } catch { return null; }
}

function showAuthModal() {
    document.getElementById('auth-modal').classList.add('active');
}

function showApp(user) {
    document.getElementById('auth-modal').classList.remove('active');
    document.getElementById('app').style.display = 'block';
    document.getElementById('user-info').textContent = '👤 ' + user.name;
    uiController.init();
}

// ===== AUTH EVENTS =====
document.addEventListener('DOMContentLoaded', () => {
    // Tab switching
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab + '-form').classList.add('active');
        });
    });

    // Switch links
    document.getElementById('go-register').addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('[data-tab="register"]').click();
    });
    document.getElementById('go-login').addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('[data-tab="login"]').click();
    });

    // Login submit
    document.getElementById('login-form').addEventListener('submit', e => {
        e.preventDefault();
        const email    = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user  = users.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            showApp(user);
            showNotification('Welcome back, ' + user.name + '!', 'success');
        } else {
            showNotification('Invalid email or password.', 'error');
        }
    });

    // Register submit
    document.getElementById('register-form').addEventListener('submit', e => {
        e.preventDefault();
        const name     = document.getElementById('reg-name').value.trim();
        const email    = document.getElementById('reg-email').value.trim();
        const phone    = document.getElementById('reg-phone').value.trim();
        const address  = document.getElementById('reg-address').value.trim();
        const city     = document.getElementById('reg-city').value.trim();
        const pincode  = document.getElementById('reg-pincode').value.trim();
        const password = document.getElementById('reg-password').value;

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.find(u => u.email === email)) {
            showNotification('Email already registered. Please login.', 'error');
            return;
        }

        const newUser = { name, email, phone, address, city, pincode, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('loggedInUser', JSON.stringify(newUser));
        showApp(newUser);
        showNotification('Account created! Welcome, ' + name + '!', 'success');
    });
});

// ===== SHOPPING CART =====
class ShoppingCart {
    constructor() {
        this.items = [];
        this.loadFromStorage();
    }

    addItem(menuItem, quantity = 1) {
        if (!menuItem || !menuItem.available || quantity <= 0 || quantity > 99) return false;
        const existing = this.items.find(i => i.menuItem.id === menuItem.id);
        if (existing) {
            const nq = existing.quantity + quantity;
            if (nq > 99) return false;
            existing.quantity = nq;
            existing.subtotal = existing.menuItem.price * nq;
        } else {
            this.items.push({ menuItem, quantity, subtotal: menuItem.price * quantity });
        }
        this.saveToStorage();
        return true;
    }

    removeItem(itemId) {
        this.items = this.items.filter(i => i.menuItem.id !== itemId);
        this.saveToStorage();
    }

    updateQuantity(itemId, quantity) {
        if (quantity <= 0 || quantity > 99) return false;
        const item = this.items.find(i => i.menuItem.id === itemId);
        if (item) { item.quantity = quantity; item.subtotal = item.menuItem.price * quantity; this.saveToStorage(); return true; }
        return false;
    }

    getTotal()     { return this.items.reduce((s, i) => s + i.subtotal, 0); }
    getItems()     { return this.items; }
    getItemCount() { return this.items.reduce((s, i) => s + i.quantity, 0); }
    clear()        { this.items = []; this.saveToStorage(); }

    saveToStorage() {
        try { localStorage.setItem('cart', JSON.stringify(this.items)); } catch(e) {}
    }
    loadFromStorage() {
        try { const s = localStorage.getItem('cart'); if (s) this.items = JSON.parse(s); } catch(e) { this.items = []; }
    }
    validateCart() {
        return this.items.length > 0 && this.items.every(i => i.menuItem.available && i.quantity >= 1 && i.quantity <= 99);
    }
}

// ===== MENU MANAGER =====
class MenuManager {
    constructor(data) { this.menuData = data; this.currentFilter = 'all'; }

    renderMenu() {
        const grid = document.getElementById('menu-grid');
        const items = this.currentFilter === 'all' ? this.menuData : this.menuData.filter(i => i.category === this.currentFilter);
        const badge = { food: '🍽️ Food', 'cold-drink': '🧊 Cold Drink' };
        grid.innerHTML = items.map((item, idx) => `
            <div class="menu-item" data-id="${item.id}" style="animation-delay:${idx * 0.06}s; cursor:pointer;">
                <div class="item-badge ${item.category}">${badge[item.category] || ''}</div>
                <img src="${item.image}" alt="${item.name}" class="menu-item-image" loading="lazy">
                <div class="menu-item-content">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <p class="menu-item-description">${item.description}</p>
                    <div class="menu-item-footer">
                        <span class="menu-item-price">₹${item.price}</span>
                        <button class="add-to-cart-btn" data-id="${item.id}">Add to Cart</button>
                    </div>
                </div>
            </div>`).join('');
    }

    filterByCategory(cat) { this.currentFilter = cat; this.renderMenu(); observeCards(); }
    getItemById(id) { return this.menuData.find(i => i.id === id); }
}

// ===== PAYMENT HANDLER =====
class PaymentHandler {
    initiatePayment(amount, orderDetails) {
        const orderId = 'ORD' + Date.now();
        const order = { orderId, items: orderDetails.items, total: amount, delivery: orderDetails.delivery, timestamp: new Date().toISOString(), paymentStatus: 'pending', transactionId: null };
        this._saveOrder(order);

        const proceed = confirm(
            `Order Total: ₹${amount}\nOrder ID: ${orderId}\n\nIn production this redirects to Paytm.\n\nClick OK = Payment Success | Cancel = Payment Failed`
        );

        if (proceed) {
            order.paymentStatus = 'completed';
            order.transactionId = 'TXN' + Date.now();
        } else {
            order.paymentStatus = 'failed';
        }
        this._updateOrder(order);
        return { success: proceed, order };
    }

    _saveOrder(order) {
        try { const o = this._getOrders(); o.push(order); localStorage.setItem('orders', JSON.stringify(o)); } catch(e) {}
    }
    _updateOrder(order) {
        try { const o = this._getOrders(); const i = o.findIndex(x => x.orderId === order.orderId); if (i !== -1) { o[i] = order; localStorage.setItem('orders', JSON.stringify(o)); } } catch(e) {}
    }
    _getOrders() {
        try { return JSON.parse(localStorage.getItem('orders') || '[]'); } catch { return []; }
    }
}

// ===== UI CONTROLLER =====
class UIController {
    constructor(menuManager, cart, paymentHandler) {
        this.menuManager    = menuManager;
        this.cart           = cart;
        this.paymentHandler = paymentHandler;
        this.cartModal      = null;
        this.addressModal   = null;
        this._initialized   = false;
    }

    init() {
        if (this._initialized) return;
        this._initialized = true;

        this.cartModal    = document.getElementById('cart-modal');
        this.addressModal = document.getElementById('address-modal');

        this.menuManager.renderMenu();
        this._updateCartDisplay();
        this._setupEvents();
        this._prefillDelivery();
        observeCards();
    }

    _prefillDelivery() {
        const user = getLoggedInUser();
        if (!user) return;
        document.getElementById('del-name').value    = user.name    || '';
        document.getElementById('del-phone').value   = user.phone   || '';
        document.getElementById('del-address').value = user.address || '';
        document.getElementById('del-city').value    = user.city    || '';
        document.getElementById('del-pincode').value = user.pincode || '';
    }

    _setupEvents() {
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', e => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.menuManager.filterByCategory(e.target.dataset.category);
            });
        });

        // Click card → open product page
        document.getElementById('menu-grid').addEventListener('click', e => {
            const card = e.target.closest('.menu-item');
            const btn  = e.target.closest('.add-to-cart-btn');
            if (card && !btn) {
                window.location.href = 'product.html?id=' + card.dataset.id;
                return;
            }
            if (!btn) return;
            const item = this.menuManager.getItemById(btn.dataset.id);
            if (this.cart.addItem(item)) {
                this._updateCartDisplay();
                showNotification(item.name + ' added to cart!', 'success');
                // Bounce cart button
                const cb = document.getElementById('cart-btn');
                cb.classList.remove('pop');
                void cb.offsetWidth;
                cb.classList.add('pop');
            }
        });

        // Open cart
        document.getElementById('cart-btn').addEventListener('click', () => this._openCart());

        // Close cart
        document.getElementById('close-cart').addEventListener('click', () => this._closeCart());
        this.cartModal.addEventListener('click', e => { if (e.target === this.cartModal) this._closeCart(); });

        // Checkout → open address modal
        document.getElementById('checkout-btn').addEventListener('click', () => {
            if (!this.cart.validateCart()) { showNotification('Cart is empty!', 'error'); return; }
            this._closeCart();
            this._openAddressModal();
        });

        // Close address modal
        document.getElementById('close-address').addEventListener('click', () => this._closeAddressModal());
        this.addressModal.addEventListener('click', e => { if (e.target === this.addressModal) this._closeAddressModal(); });

        // Confirm order
        document.getElementById('confirm-order-btn').addEventListener('click', () => this._confirmOrder());

        // Logout
        document.getElementById('logout-btn').addEventListener('click', () => {
            localStorage.removeItem('loggedInUser');
            this.cart.clear();
            this._initialized = false;
            document.getElementById('app').style.display = 'none';
            showAuthModal();
            showNotification('Logged out successfully.', 'success');
        });
    }

    _openCart() {
        this._updateCartDisplay();
        this.cartModal.classList.add('active');
    }
    _closeCart() { this.cartModal.classList.remove('active'); }

    _openAddressModal() {
        // Build order summary
        const items = this.cart.getItems();
        const summaryEl = document.getElementById('order-summary-mini');
        summaryEl.innerHTML = items.map(i =>
            `<div class="summary-row"><span>${i.menuItem.name} x${i.quantity}</span><span>₹${i.subtotal}</span></div>`
        ).join('') + `<div class="summary-row summary-total"><span>Total</span><span>₹${this.cart.getTotal()}</span></div>`;
        this.addressModal.classList.add('active');
    }
    _closeAddressModal() { this.addressModal.classList.remove('active'); }

    _confirmOrder() {
        const name    = document.getElementById('del-name').value.trim();
        const phone   = document.getElementById('del-phone').value.trim();
        const address = document.getElementById('del-address').value.trim();
        const city    = document.getElementById('del-city').value.trim();
        const pincode = document.getElementById('del-pincode').value.trim();

        if (!name || !phone || !address || !city || !pincode) {
            showNotification('Please fill all delivery details.', 'error');
            return;
        }

        const delivery = { name, phone, address, city, pincode, note: document.getElementById('del-note').value.trim() };
        const result = this.paymentHandler.initiatePayment(this.cart.getTotal(), { items: this.cart.getItems(), delivery });

        if (result.success) {
            this.cart.clear();
            this._updateCartDisplay();
            this._closeAddressModal();
            showNotification('Order placed! ID: ' + result.order.orderId, 'success');
        } else {
            showNotification('Payment failed. Please try again.', 'error');
        }
    }

    _updateCartDisplay() {
        const count = this.cart.getItemCount();
        const total = this.cart.getTotal();
        document.getElementById('cart-count').textContent = count;
        document.getElementById('cart-total').textContent = total;

        const container = document.getElementById('cart-items');
        const items = this.cart.getItems();
        const checkoutBtn = document.getElementById('checkout-btn');

        if (items.length === 0) {
            container.innerHTML = '<div class="empty-cart">🛒 Your cart is empty</div>';
            checkoutBtn.disabled = true;
            return;
        }

        checkoutBtn.disabled = false;
        container.innerHTML = items.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.menuItem.name}</div>
                    <div class="cart-item-price">₹${item.menuItem.price} each &nbsp;|&nbsp; ₹${item.subtotal}</div>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="uiController.decreaseQty('${item.menuItem.id}')">−</button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="uiController.increaseQty('${item.menuItem.id}')">+</button>
                    <button class="remove-btn" onclick="uiController.removeItem('${item.menuItem.id}')">✕</button>
                </div>
            </div>`).join('');
    }

    increaseQty(id) {
        const item = this.cart.getItems().find(i => i.menuItem.id === id);
        if (item && this.cart.updateQuantity(id, item.quantity + 1)) this._updateCartDisplay();
        else showNotification('Max quantity reached', 'error');
    }

    decreaseQty(id) {
        const item = this.cart.getItems().find(i => i.menuItem.id === id);
        if (!item) return;
        if (item.quantity > 1) { this.cart.updateQuantity(id, item.quantity - 1); this._updateCartDisplay(); }
        else this.removeItem(id);
    }

    removeItem(id) {
        this.cart.removeItem(id);
        this._updateCartDisplay();
        showNotification('Item removed', 'success');
    }
}

// ===== GLOBAL NOTIFICATION =====
function showNotification(message, type) {
    const el = document.getElementById('notification');
    el.textContent = message;
    el.className = 'notification ' + type + ' show';
    clearTimeout(el._timer);
    el._timer = setTimeout(() => el.classList.remove('show'), 3000);
}

// ===== SCROLL REVEAL =====
function observeCards() {
    const cards = document.querySelectorAll('.menu-item:not(.visible)');
    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    cards.forEach(card => observer.observe(card));
}

// ===== INIT =====
const cart           = new ShoppingCart();
const menuManager    = new MenuManager(menuData);
const paymentHandler = new PaymentHandler();
const uiController   = new UIController(menuManager, cart, paymentHandler);
