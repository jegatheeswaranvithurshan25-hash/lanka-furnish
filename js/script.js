// Smooth Scroll Functionality
function scrollToMenu() {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
        menuSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Dark Mode Toggle Functionality
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        // Dark theme active
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
        localStorage.setItem('theme', 'dark');
    } else {
        // Light theme active
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        localStorage.setItem('theme', 'light');
    }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        body.classList.remove('dark-theme');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
});

// Enhanced Button Hover Effects
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            // Add subtle glow effect
            this.style.boxShadow = this.classList.contains('btn-primary') 
                ? '0 10px 25px rgba(212, 175, 55, 0.4)' 
                : '0 8px 20px rgba(0, 0, 0, 0.15)';
        });
        
        button.addEventListener('mouseleave', function() {
            // Reset shadow
            this.style.boxShadow = this.classList.contains('btn-primary') 
                ? '0 10px 15px rgba(0, 0, 0, 0.1)' 
                : '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
        
        button.addEventListener('mousedown', function() {
            // Press effect
            this.style.transform = 'translateY(1px)';
        });
        
        button.addEventListener('mouseup', function() {
            // Release effect
            if (this.classList.contains('btn-primary')) {
                this.style.transform = 'translateY(-3px)';
            } else {
                this.style.transform = 'translateY(-3px)';
            }
        });
    });
    
    // Add loading animation for the hero section
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');
    
    // Trigger reflow to restart animations
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroVisual.style.opacity = '1';
    }, 100);
});

// Accessibility: Keyboard navigation for buttons
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        const activeElement = document.activeElement;
        if (activeElement.classList.contains('btn')) {
            activeElement.click();
        }
    }
});

// Menu Filtering
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuGrid = document.getElementById('menu-grid');
    
    // Load initial menu
    if (typeof foodData !== 'undefined' && foodData.length > 0) {
        displayMenu(foodData);
    } else {
        console.error('foodData is not defined or empty');
        // Fallback: create some sample data
        const sampleData = [
            {
                id: 1,
                name: "Classic Burger",
                price: 1200,
                category: "Burgers",
                image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=60",
                description: "Juicy beef patty with fresh lettuce, tomato, and special sauce"
            },
            {
                id: 2,
                name: "Cheese Pizza",
                price: 1800,
                category: "Pizza",
                image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=500&auto=format&fit=crop&q=60",
                description: "Classic Margherita with mozzarella cheese and fresh basil"
            },
            {
                id: 3,
                name: "Veggie Burger",
                price: 1000,
                category: "Burgers",
                image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60",
                description: "Plant-based patty with avocado, cucumber, and vegan mayo"
            },
            {
                id: 4,
                name: "Pepperoni Pizza",
                price: 2000,
                category: "Pizza",
                image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&auto=format&fit=crop&q=60",
                description: "Tomato sauce, mozzarella, and spicy pepperoni slices"
            },
            {
                id: 5,
                name: "Margherita Pizza",
                price: 1600,
                category: "Pizza",
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60",
                description: "Fresh mozzarella, tomatoes, and basil on thin crust"
            },
            {
                id: 6,
                name: "Double Cheeseburger",
                price: 1500,
                category: "Burgers",
                image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=60",
                description: "Double beef patties with extra cheese and crispy bacon"
            }
        ];
        displayMenu(sampleData);
    }
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            if (category === 'all') {
                displayMenu(foodData || []);
            } else {
                const filteredItems = (foodData || []).filter(item => item.category === category);
                displayMenu(filteredItems);
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// Display Menu Items
function displayMenu(items) {
    const menuGrid = document.getElementById('menu-grid');
    menuGrid.innerHTML = '';
    
    items.forEach(item => {
        const foodCard = document.createElement('div');
        foodCard.className = 'food-card';
        foodCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="food-card-image">
            <div class="food-card-content">
                <h3 class="food-card-title">${item.name}</h3>
                <span class="food-card-category">${item.category}</span>
                <p class="food-card-description">${item.description}</p>
                <div class="food-card-footer">
                    <span class="food-price">Rs ${item.price}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${item.id})">Add to Cart</button>
                </div>
            </div>
        `;
        menuGrid.appendChild(foodCard);
    });
}

// Cart Management - Use cart from data.js
// let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = count;
    }
}

function addToCart(itemId) {
    const item = foodData.find(food => food.id === itemId);
    if (!item) return;
    
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${item.name} added to cart!`);
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCartItems();
}

function updateQuantity(itemId, newQuantity) {
    if (newQuantity < 1) return;
    
    const cartItem = cart.find(item => item.id === itemId);
    if (cartItem) {
        cartItem.quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = 'Rs 0';
        return;
    }
    
    let total = 0;
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span class="cart-item-price">Rs ${item.price}</span>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    
    cartTotal.textContent = `Rs ${total}`;
}

// Cart Sidebar
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    
    if (sidebar.classList.contains('active')) {
        displayCartItems();
    }
}

// Order Placement
function placeOrder() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showNotification(`Order placed successfully! Total: Rs ${total}`, 'success');
    
    // Clear cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCartItems();
    
    // Close cart
    setTimeout(() => {
        toggleCart();
    }, 2000);
}

// Notifications
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal() {
    document.getElementById('login-modal').classList.remove('active');
    document.getElementById('register-modal').classList.remove('active');
}

// Form Validation Functions
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

function validateName(name) {
    // At least 2 characters, only letters and spaces
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    return nameRegex.test(name.trim());
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.color = '#ff4757';
    errorElement.style.fontSize = '12px';
    errorElement.style.marginTop = '5px';
    errorElement.style.fontFamily = 'var(--font-body)';
    
    // Remove existing error
    const existingError = field.parentElement.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    field.parentElement.appendChild(errorElement);
    field.style.borderColor = '#ff4757';
    field.style.boxShadow = '0 0 0 3px rgba(255, 71, 87, 0.1)';
}

function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorElement = field.parentElement.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
    field.style.borderColor = 'var(--accent-color)';
    field.style.boxShadow = 'none';
}

function validateField(fieldId, value, validationFunction, errorMessage) {
    if (!value.trim()) {
        showFieldError(fieldId, 'This field is required');
        return false;
    }
    
    if (!validationFunction(value)) {
        showFieldError(fieldId, errorMessage);
        return false;
    }
    
    clearFieldError(fieldId);
    return true;
}

// Form Handlers with Enhanced Validation
function handleLogin(e) {
    e.preventDefault();
    let isValid = true;
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Validate email
    if (!validateField('login-email', email, validateEmail, 'Please enter a valid email address')) {
        isValid = false;
    }
    
    // Validate password
    if (!email.trim() || !password.trim()) {
        showFieldError('login-password', 'Password is required');
        isValid = false;
    } else {
        clearFieldError('login-password');
    }
    
    if (!isValid) {
        showNotification('Please fix the errors above', 'error');
        return;
    }
    
    // In a real application, you would validate against a database
    localStorage.setItem('currentUser', email);
    showNotification('Login successful!', 'success');
    closeModal();
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

function handleRegister(e) {
    e.preventDefault();
    let isValid = true;
    
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm').value;
    
    // Validate name
    if (!validateField('register-name', name, validateName, 'Name must be at least 2 characters and contain only letters and spaces')) {
        isValid = false;
    }
    
    // Validate email
    if (!validateField('register-email', email, validateEmail, 'Please enter a valid email address')) {
        isValid = false;
    }
    
    // Validate password
    if (!validateField('register-password', password, validatePassword, 'Password must be at least 8 characters with uppercase, lowercase, and number')) {
        isValid = false;
    }
    
    // Validate password confirmation
    if (!confirmPassword.trim()) {
        showFieldError('register-confirm', 'Please confirm your password');
        isValid = false;
    } else if (password !== confirmPassword) {
        showFieldError('register-confirm', 'Passwords do not match');
        isValid = false;
    } else {
        clearFieldError('register-confirm');
    }
    
    if (!isValid) {
        showNotification('Please fix the errors above', 'error');
        return;
    }
    
    // In a real application, you would save to a database
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', name);
    
    showNotification('Registration successful!', 'success');
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1000);
}

// Real-time validation for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Login form real-time validation
    const loginEmail = document.getElementById('login-email');
    const loginPassword = document.getElementById('login-password');
    
    if (loginEmail) {
        loginEmail.addEventListener('blur', function() {
            validateField('login-email', this.value, validateEmail, 'Please enter a valid email address');
        });
        
        loginEmail.addEventListener('input', function() {
            if (this.value.trim()) {
                clearFieldError('login-email');
            }
        });
    }
    
    if (loginPassword) {
        loginPassword.addEventListener('blur', function() {
            if (!this.value.trim()) {
                showFieldError('login-password', 'Password is required');
            } else {
                clearFieldError('login-password');
            }
        });
    }
    
    // Register form real-time validation
    const registerName = document.getElementById('register-name');
    const registerEmail = document.getElementById('register-email');
    const registerPassword = document.getElementById('register-password');
    const registerConfirm = document.getElementById('register-confirm');
    
    if (registerName) {
        registerName.addEventListener('blur', function() {
            validateField('register-name', this.value, validateName, 'Name must be at least 2 characters and contain only letters and spaces');
        });
        
        registerName.addEventListener('input', function() {
            if (this.value.trim()) {
                clearFieldError('register-name');
            }
        });
    }
    
    if (registerEmail) {
        registerEmail.addEventListener('blur', function() {
            validateField('register-email', this.value, validateEmail, 'Please enter a valid email address');
        });
        
        registerEmail.addEventListener('input', function() {
            if (this.value.trim()) {
                clearFieldError('register-email');
            }
        });
    }
    
    if (registerPassword) {
        registerPassword.addEventListener('blur', function() {
            validateField('register-password', this.value, validatePassword, 'Password must be at least 8 characters with uppercase, lowercase, and number');
        });
        
        registerPassword.addEventListener('input', function() {
            if (this.value.trim()) {
                clearFieldError('register-password');
            }
            
            // Real-time password confirmation validation
            const confirmField = document.getElementById('register-confirm');
            if (confirmField && confirmField.value) {
                if (this.value !== confirmField.value) {
                    showFieldError('register-confirm', 'Passwords do not match');
                } else {
                    clearFieldError('register-confirm');
                }
            }
        });
    }
    
    if (registerConfirm) {
        registerConfirm.addEventListener('blur', function() {
            const password = document.getElementById('register-password').value;
            if (!this.value.trim()) {
                showFieldError('register-confirm', 'Please confirm your password');
            } else if (password !== this.value) {
                showFieldError('register-confirm', 'Passwords do not match');
            } else {
                clearFieldError('register-confirm');
            }
        });
        
        registerConfirm.addEventListener('input', function() {
            const password = document.getElementById('register-password').value;
            if (this.value.trim()) {
                if (password === this.value) {
                    clearFieldError('register-confirm');
                } else {
                    showFieldError('register-confirm', 'Passwords do not match');
                }
            } else {
                clearFieldError('register-confirm');
            }
        });
    }
});

// Password Toggle Function
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const icon = input.nextElementSibling.querySelector('svg');
    
    if (input.type === 'password') {
        input.type = 'text';
        // Change eye icon to closed eye
        icon.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="1" y1="1" x2="23" y2="23" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    } else {
        input.type = 'password';
        // Change closed eye icon to open eye
        icon.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    }
}

// Initialize cart count on page load
updateCartCount();
