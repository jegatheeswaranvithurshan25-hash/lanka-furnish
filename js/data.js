// Static food data for Golden Bites
const foodData = [
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
    },
    {
        id: 7,
        name: "Chocolate Brownie",
        price: 600,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&auto=format&fit=crop&q=60",
        description: "Rich chocolate brownie with vanilla ice cream"
    },
    {
        id: 8,
        name: "Cheesecake",
        price: 800,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=60",
        description: "Creamy cheesecake with berry compote"
    },
    {
        id: 9,
        name: "Fresh Lemonade",
        price: 400,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500&auto=format&fit=crop&q=60",
        description: "Freshly squeezed lemonade with mint leaves"
    },
    {
        id: 10,
        name: "Iced Coffee",
        price: 500,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=60",
        description: "Cold brew coffee with milk and ice"
    },
    {
        id: 11,
        name: "Caesar Salad",
        price: 900,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60",
        description: "Crisp romaine lettuce with parmesan and croutons"
    },
    {
        id: 12,
        name: "Coca Cola",
        price: 300,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1600857544200-b2f6c8e2bb64?w=500&auto=format&fit=crop&q=60",
        description: "Classic cola drink, 350ml"
    }
];

// Cart management functions
let cart = [];

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Add item to cart
function addToCart(itemId) {
    const item = foodData.find(food => food.id === itemId);
    if (item) {
        const existingItem = cart.find(cartItem => cartItem.id === itemId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                quantity: 1
            });
        }
        saveCart();
        updateCartUI();
        showNotification(`${item.name} added to cart!`);
    }
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCartUI();
}

// Update item quantity
function updateQuantity(itemId, newQuantity) {
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(itemId);
        } else {
            item.quantity = newQuantity;
            saveCart();
            updateCartUI();
        }
    }
}

// Clear cart
function clearCart() {
    cart = [];
    saveCart();
    updateCartUI();
    showNotification('Cart cleared!');
}

// Get cart total
function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Get cart item count
function getCartCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
}

// Get cart items
function getCartItems() {
    return cart;
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', loadCart);

// Update cart UI function (needed for cart management)
function updateCartUI() {
    // This function is called from data.js but defined in script.js
    // It will be handled by the main script.js file
    if (typeof updateCartCount === 'function') {
        updateCartCount();
    }
}
