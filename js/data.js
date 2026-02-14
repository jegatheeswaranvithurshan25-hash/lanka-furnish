// Static furniture data for Golden Bites
const FurnitureData = [
    {
        id: 1,
        name: "Sofa set",
        price: 119000,
        category: "House",
        image: "https://img500.exportersindia.com/product_images/bc-500/2024/12/8262385/sofa-set-1733230176-7717419.jpeg",
        description: "Comfortable wooden sofa set with soft cushions, perfect for living rooms and lounge areas."
    },
    {
        id: 2,
        name: "Reading tables & chairs",
        price: 126000,
        category: "Educational Places",
        image: "https://sc04.alicdn.com/kf/Hd7c3a795ce804b108637ce7f18a8d7ebg.jpg",
        description: "Spacious reading tables with kid-friendly chairs, ideal for libraries, classrooms, and study spaces."
    },
    {
        id: 3,
        name: "Armchair",
        price: 12000,
        category: "House",
        image: "https://malletandplane.com/cdn/shop/files/ARNYCHAIRCREAM.jpg?v=1736961479&width=2048",
        description: "Elegant single armchair with floral upholstery, offering cozy seating for living rooms and reading corners."
    },
    {
        id: 4,
        name: "Study cubicle",
        price: 24500,
        category: "Educational Places",
        image: "https://www.agati.com/wp-content/uploads/2017/08/2_Nook-1.jpg",
        description: "Compact study cubicle with a comfortable chair and private workspace, perfect for focused learning."
    },
    {
        id: 5,
        name: "Reception desk",
        price: 89475,
        category: "Educational Places",
        image: "https://www.bfx.com.au/store/media/catalog/product/cache/15a30199908046cf6adee7ab34ad1731/c/o/commercial_dm_reception_corner_desk_back_-_rawbirch.jpg",
        description: "Modern L-shaped reception desk with spacious storage shelves and a wide work surface for office use."
    },
    {
        id: 6,
        name: "Recliner",
        price: 80000,
        category: "House",
        image: "https://m.media-amazon.com/images/I/81MfZ0cts1L._AC_UF894,1000_QL80_.jpg",
        description: "Comfortable cushioned recliner with adjustable backrest and footrest for a relaxing seating experience."
    },
    {
        id: 7,
        name: "Conference table & chairs",
        price: 110375,
        category: "Work & Business",
        image: "data:image/jpeg;base64,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",
        description: "Large meeting table set with ergonomic chairs, ideal for conferences, discussions, and team meetings."
    },
    {
        id: 8,
        name: "Projector screen stand",
        price: 96990,
        category: "Work & Business",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJPFnxom9n7uFcWZ6b44xqEaSwtX9_PROig&s",
        description: "Portable projector screen with a stable tripod stand, perfect for presentations, training, and office use."
    },
    {
        id: 9,
        name: "Patient beds",
        price: 90000,
        category: "Public & Service Places",
        image: "data:image/jpeg;base64,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",
        description: "Adjustable hospital bed with side rails & blue mattress for clinics/hospitals."
    },
    {
        id: 10,
        name: "Doctor consultation desk",
        price: 47000,
        category: "Public & Service Places",
        image: "https://cpimg.tistatic.com/04618938/b/4/Doctors-Consulting-Table.jpg",
        description: "Elegant wooden executive desk – ideal for doctor consultations & medical offices."
    },
    {
        id: 11,
        name: "Lockers",
        price:  44000,
        category: "Work & Business",
        image: "https://www.workspacedirect.co.nz/cdn/shop/files/Grid40ModularStorageUnitwithPlantersandLockers_Black_ClassicOak_WorkspaceDirectOfficeFurnitureNZ.webp?v=1687585278",
        description: "Modern multi-door lockers with wood panels & black metal frame for secure office/clinic storage."
    },
    {
        id: 12,
        name: "Medical storage cabinets",
        price: 65000,
        category: "Public & Service Places",
        image: "https://www.harloff.com/wp-content/uploads/2021/03/MSPM62-00GK-HT-GRAY-locked-medical-supply-cabinets-ql-closed.jpg",
        description: "Tall metal cabinet with shelves & wire baskets for organized medical supply storage."
    },
    {
        id: 13,
        name: "Wheel Chair",
        price: 300,
        category: "Hospitality",
        image: "https://residentessentials.com/cdn/shop/products/wheelchair-_lightweight_800x.jpg?v=1517340658",
        description: "Foldable manual wheelchair: black padded seat, large rear wheels, front casters, adjustable arm/footrests. For hospital or home use."
    },
    {
        id: 14,
        name: "IV stands",
        price: 300,
        category: "Hospitality",
        image: "https://d2t0svjwo1hj60.cloudfront.net/media/public/25248a4ccef945feb_Janani_IV_Stand_3_Leg_MS_PC.png",
        description: "Stainless steel IV pole with 5-leg base, 4-hook top, adjustable height and locking wheels. Ideal for hospitals and clinics."
    },
    {
        id: 15,
        name: "Reception desk",
        price: 300,
        category: "Hospitality",
        image: "https://www.officestock.com.au/assets/full/OMRCP-EXECUTIVE-LHS-TEAK.jpg?20210309030558",
        description: "Modern curved reception counter: glossy white top, grey panels, chrome accents. Perfect for hotels, offices or clinics."
    },{
        id: 16,
        name: "Folding chair",
        price: 6000,
        category: "Other Places",
        image: "https://www.zimasya.com/cdn/shop/files/1_45079a19-c6b3-4d8b-8c58-8468b531d433.jpg?v=1737083397&width=530",
        description: "Portable folding chair with sturdy frame – ideal for events, banquets, parties & extra seating."
    },
    {
        id: 17,
        name: "Folding Banquet table",
        price: 110000,
        category: "Other Places",
        image: "https://s.alicdn.com/@sc04/kf/Hcf2b6fd7d0f24de184e81fd0e79ccfd0e.jpg_720x720q50.jpg",
        description: "Portable folding table with sturdy metal frame – ideal for banquets, events & gatherings."
    },
    {
        id: 18,
        name: "Serving table",
        price: 130000,
        category: "Other Places",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhlpe2CDbAa4EVb8LFncdkZ5rn1ewxDCN3nw&s",
        description: "Mobile serving trolley with wooden shelves & wheels – perfect for food service or display."
    },
    {
        id: 19,
        name: "Coffee table",
        price: 55000,
        category: "House",
        image: "https://www.fabhabitat.com.au/cdn/shop/files/Novawalnutovalcoffeetable1.jpg?v=1752156998&width=1080",
        description: "Elegant round wooden coffee table with black metal base – great for living rooms."
    },
    {
        id: 20,
        name: "Side table",
        price: 6500,
        category: "House",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi261rObxuzdM3H05809rgvrMkW97AVy2lgQ&s",
        description: "Compact modern side table with wooden top & black metal legs – suits bedrooms or lounges."
    },
    {
        id: 21,
        name: "Console table",
        price: 25000,
        category: "House",
        image: "https://i5.walmartimages.com/seo/Tribesigns-39-4-Console-Table-Modern-Entryway-Hallway-Table-with-Gold-Metal-Legs-Gold-Black_e2bdbed7-6ad5-4658-aaf4-9ad63e681ed4.585123fa7cffc910201e37d802d9dd23.jpeg",
        description: "Sleek marble-top console table with elegant twisted gold base – perfect for entryways or living rooms."
    },
    {
        id: 22,
        name: "TV stand",
        price: 35000,
        category: "House",
        image: "https://woodmaker.thealishan.com/wp-content/uploads/2021/12/Rustic-Modern-Solid-Wood-TV-Stand.jpg",
        description: "Rustic wooden TV unit with open shelves – ideal for media storage and entertainment setups."
    },
    {
        id: 23,
        name: "Bookshelf",
        price: 28000,
        category: "House",
        image: "https://ganpatiarts.com/cdn/shop/files/BOOK-SHELF-8.jpg?v=1757844872&width=1214",
        description: "Modern geometric wooden bookshelf with cube compartments – great for books, decor & display in any home."
    },
    {
        id: 24,
        name: "Display cabinet",
        price: 20000,
        category: "House",
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/be1b81cd250b5309937a6b737cca6a5d075e0408/Glass-Cabinet-Lighted-Corner-Cabinet-Corner-Display-Cabinet.jpg",
        description: "Elegant glass-door display cabinet with shelves – suited for showcasing collectibles, dishes or decor."
    },
    {
        id: 25,
        name: "Ottoman",
        price: 18000,
        category: "House",
        image: "https://www.estre.in/cdn/shop/files/1-min_95df619c-a7c5-487f-b820-c14947ebc629.jpg?v=1743763603",
        description: "Tufted leather ottoman with gold legs – perfect as extra seating or footrest in living rooms."
    },
    {
        id: 26,
        name: "Footstool",
        price: 12500,
        category: "House",
        image: "https://m.media-amazon.com/images/I/71QVGvrNLbL._AC_SL400_.jpg",
        description: "Adjustable wooden footstool with fabric top – ideal for relaxing on sofas or chairs."
    },{
        id: 27,
        name: "Bed",
        price: 80000,
        category: "House",
        image: "https://mywakeup.in/cdn/shop/files/1694173541.AKSSBED_main_0.png?v=1748581237&width=460",
        description: "Stylish wooden platform bed with headboard – great for modern bedrooms."
    },
    {
        id: 28,
        name: "Bedside table",
        price: 14500,
        category: "House",
        image: "https://lifely.com.au/cdn/shop/files/Untitleddesign_64_15fc00e9-39cf-42e0-b2df-0da2017a2148.png?v=1760349452",
        description: "Compact wooden nightstand with open shelf – suits bedrooms for lamps & storage."
    },
    {
        id: 29,
        name: "Wardrobe",
        price: 47500,
        category: "House",
        image: "https://modway.com/cdn/shop/files/MOD-7182-WAL_9.jpg?v=1733898142",
        description: "Spacious wooden wardrobe with sliding/slatted doors – perfect for organized clothing storage in bedrooms."
    },
    {
        id: 30,
        name: "Dressing table",
        price: 42975,
        category: "House",
        image: "https://cdn.decornation.in/wp-content/uploads/2021/02/dressing-table-designs-india.jpg",
        description: "Elegant wooden dressing table with mirror and drawers – ideal for makeup, grooming & bedroom vanity."
    },
    {
        id: 31,
        name: "Chest drawers",
        price: 57600,
        category: "House",
        image: "https://ii1.pepperfry.com/media/catalog/product/b/i/494x544/biscay-sheesham-wood-chest-of-drawers-in-scratch-resistant-provincial-teak-finish-biscay-sheesham-wo-gpedpi.jpg",
        description: "Classic wooden chest of drawers with multiple compartments – great for clothes, linens & bedroom storage."
    },
    {
        id: 32,
        name: "Dining table & chairs set",
        price: 115000,
        category: "House",
        image: "https://thetimberguy.com/cdn/shop/files/Solid-Sheesham-Wood-Designer-Dining-table-with-Cushioned-Chair-Bench-furniture-set-CHOOSE-YOUR-COMBINATION_1200x.png?v=1764235404",
        description: "Solid wooden dining set with carved details – suits family meals & gatherings in dining areas."
    },
    {
        id: 33,
        name: "Bar stools",
        price: 8000,
        category: "House",
        image: "https://www.woodsala.com/cdn/shop/files/1_2408cac8-75d5-4ac7-b546-60bd74def408.jpg?v=1730973524&width=2000",
        description: "Solid wooden bar stools with footrest – perfect for kitchen counters or home bars"
    },
    {
        id: 34,
        name: "Dining bench",
        price: 24750,
        category: "House",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPyQXTvX5LZTo4odq6J2Ck05YIBsiyGrQb5g&s",
        description: "Rustic wooden dining bench with sturdy metal legs – seats 2–3 comfortably"
    },
    {
        id: 35,
        name: "Study desk & chair",
        price: 25000,
        category: "House",
        image: "https://www.sarcrafts.com/wp-content/uploads/2022/04/P-1.jpg",
        description: "Compact solid wood study desk with drawers + matching chair (webbed seat)"
    },
    {
        id: 36,
        name: "Computer Chair",
        price: 28499,
        category: "House",
        image: "https://www.woods-furniture.co.uk/images/products/standard/9031_2671.jpg",
        description: "Ergonomic brown leatherette office chair with armrests and smooth base"
    },
    {
        id: 37,
        name: "Wall shelves",
        price: 10000,
        category: "House",
        image: "https://img.drz.lazcdn.com/static/lk/p/95ad5ea516467423cd168fe335c262d4.jpg_720x720q80.jpg",
        description: "Modern dark wood geometric cube shelving unit for wall mounting. Ideal for home decor, books, or plants."
    },
    {
        id: 38,
        name: "Teacher table",
        price: 18500,
        category: "Educational Places",
        image: "https://image.made-in-china.com/202f0j00zFdakBSJwPpn/New-Design-School-Desk-Teacher-Table-with-Wire-Hole.jpg",
        description: "Sturdy wooden desk with 3 drawers, light wood top, suitable for classrooms or tuition centers."
    },
    {
        id: 39,
        name: "Whiteboard / Blackboard stand",
        price: 11500,
        category: "Educational Places",
        image: "https://aceofficesystems.com/cdn/shop/products/ACB3648-3.jpg?v=1764695886&width=452",
        description: "Mobile metal stand with wheels, height-adjustable, for holding large whiteboards or blackboards in classrooms/offices."
    },
    {
        id: 40,
        name: "Computer lab desks",
        price: 15000,
        category: "Educational Places",
        image: "https://smartdesks.com/media/catalog/product/cache/4840f2e0b88cf97fb9d820f7d81b67f7/d/d/ddt-34_weelladsiixidiy4.jpg",
        description: "Ergonomic computer workstation with keyboard tray, CPU holder, and wide top – perfect for school/computer lab setups."
    },
    {
        id: 41,
        name: "Lecturer podium",
        price: 48500,
        category: "Educational Places",
        image: "https://m.media-amazon.com/images/I/51dwLELaU3L._AC_UF1000,1000_QL80_.jpg",
        description: "TWooden standing podium with slanted top surface, open storage shelves, and built-in cable hole. Ideal for classrooms, lectures, or educational presentations."
    },
    {
        id: 42,
        name: "Waiting area chairs",
        price: 18000,
        category: "Other Places",
        image: "https://m.media-amazon.com/images/I/51H2e-CCHVL._AC_SL1500_.jpg",
        description: "Three-seater bench-style waiting chairs with black cushioned seats, metal frame, and armrests. Suitable for reception areas, offices, hospitals, or public spaces."
    },
    {
        id: 43,
        name: "Ergonomic chair",
        price: 38500,
        category: "Work & Business",
        image: "https://www.geekmaxi.com/img/p/2/0/7/2/8/20728-thickbox_default.webp",
        description: "Adjustable high-back office chair with mesh backrest, headrest, lumbar support, and armrests. Designed for comfortable long-hour work in offices or businesses."
    },
    {
        id: 44,
        name: "Teller counter Desk",
        price: 30500,
        category: "Public & Service Places",
        image: "https://m.media-amazon.com/images/I/71YrxZ6NCRL._AC_SL1000__.jpg",
        description: "Wooden reception or teller counter with drawers, shelves, storage cabinets, and approx. 92cm height. Perfect for banks, service counters, or public places."
    },
    {
        id: 45,
        name: "Office desks & chairs",
        price: 30000,
        category: "Public & Service Places",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgY-G9EyN313aUmzPdLdZO37RzU5U0psaCw&s",
        description: "Modern clustered wooden office workstations with storage, cable management, and ergonomic mesh chairs. Perfect for open-plan offices or corporate setups."
    },

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
    const item = FurnitureData.find(furniture => furniture.id === itemId);
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
