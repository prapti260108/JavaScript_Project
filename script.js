const product = [
    { id: 0, image: 'https://m.media-amazon.com/images/I/81KtAJ495-L._AC_UL640_FMwebp_QL65_.jpg', title: 'Round Neck Foral Top', price: 299 },
    { id: 1, image: 'https://m.media-amazon.com/images/I/61tvVFLs5sL._AC_UL640_FMwebp_QL65_.jpg', title: 'Rayon Regular Fit Top', price: 339 },
    { id: 2, image: 'https://m.media-amazon.com/images/I/71Yh7KQY3aL._AC_UL640_FMwebp_QL65_.jpg', title: 'Sky Heights pink Floral Top', price: 649 },
    { id: 3, image: 'https://m.media-amazon.com/images/I/61kqCzRuDtL._AC_UL640_FMwebp_QL65_.jpg', title: 'Womens Wear Fit Top', price: 460 },
    { id: 4, image: 'https://m.media-amazon.com/images/I/61igGfjojlL._AC_UL640_FMwebp_QL65_.jpg', title: 'Womens Fit Casual Shirt', price: 699 },
    { id: 5, image: 'https://m.media-amazon.com/images/I/81t+AmY-N2L._AC_UL640_QL65_.jpg', title: 'Stylish Boota Georgette', price: 449 },
    { id: 6, image: 'https://m.media-amazon.com/images/I/71Yydd+CnlL._AC_UL640_FMwebp_QL65_.jpg', title: 'Womens Blue Tie Knot Top', price: 460 },
    { id: 7, image: 'https://m.media-amazon.com/images/I/61FonvOtaqL._AC_UL640_QL65_.jpg', title: 'Womens Western Top ', price: 550 },
    { id: 8, image: 'https://m.media-amazon.com/images/I/51QULwWrJuL._AC_UL640_FMwebp_QL65_.jpg', title: 'Print Casual Men Tshirt', price: 299 },
    { id: 9, image: 'https://m.media-amazon.com/images/I/612EIYgTnrL._SY879_.jpg', title: 'ADRO Mens T-Shirt', price: 369 },
    { id: 10, image: 'https://m.media-amazon.com/images/I/71SZEUOfrkL._SY879_.jpg', title: 'Mens Regular Fit Shirt', price: 329 },
    { id: 11, image: 'https://m.media-amazon.com/images/I/71iFXbwGVKL._SY879_.jpg', title: 'Woven Causal Wear Fit Top', price: 460 },
    { id: 12, image: 'https://m.media-amazon.com/images/I/810PeG9gqKL._SY879_.jpg', title: 'Cotton Oversized Tshirt', price: 575 },
    { id: 13, image: 'https://m.media-amazon.com/images/I/71fz6+A0heL._SY879_.jpg', title: 'Mens Regular Fit Shirt', price: 329 },
    { id: 14, image: 'https://m.media-amazon.com/images/I/71sTIP2Vy1L._SY879_.jpg', title: 'Down Collar Neck t-Shirt', price: 599 },
    { id: 15, image: 'https://m.media-amazon.com/images/I/61-TS4ENveL._SY879_.jpg', title: 'ADRO Mens T-Shirt', price: 369 },
    { id: 16, image: 'https://m.media-amazon.com/images/I/71wFzkFla1L._SY879_.jpg', title: 'Frock Dress for Girls Kids', price: 399 },
    { id: 17, image: 'https://m.media-amazon.com/images/I/61Mfh5kdZPL._SY879_.jpg', title: 'Cotton Knee-Length Dress', price: 739 },
    { id: 18, image: 'https://m.media-amazon.com/images/I/51OsCiPvLwL._SY879_.jpg', title: 'Doodle Unicorn Dress for Girls', price: 999 },
    { id: 19, image: 'https://m.media-amazon.com/images/I/41kC8Pe5UzL.jpg', title: 'Fit Trendy Net Frock Dress', price: 325 },
    { id: 20, image: 'https://m.media-amazon.com/images/I/813q0X1oiHL._SY879_.jpg', title: 'Cotton Boys Tshirt Cut Pattern', price: 259 },
    { id: 21, image: 'https://m.media-amazon.com/images/I/61Yi93iM6dL._SX679_.jpg', title: 'Cotton Krishna Printed Tshirt', price: 399 },
    { id: 22, image: 'https://m.media-amazon.com/images/I/6114edh5UfL._SY879_.jpg', title: 'Boys Animal Print Tshirt', price: 249 },
    { id: 23, image: 'https://m.media-amazon.com/images/I/71PQThg-tpL._SX679_.jpg', title: 'Mickey  Cotton T-Shirt ', price: 469 }
];




function filterProducts() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const filteredProducts = product.filter(p => p.title.toLowerCase().includes(searchQuery));
    const rootElement = document.getElementById('root');
    rootElement.innerHTML = '';
    if (filteredProducts.length === 0) {
        rootElement.innerHTML = '<h1>No products found.</h1>';
    } else {
        display(filteredProducts);
    }
}


let cart = [];

const display = (items) => {
    document.getElementById('root').innerHTML = items.map(item => {
        const { image, title, price, id } = item;
        return `
            <div class='box'>
                <div class='img-box'>
                    <img class='images' src='${image}'></img>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <hr>
                    <h2>$${price}.00</h2>
                    <hr>
                    <button><a href="singleproduct.html?id=${id}">View Product</a></button>
                    <button onclick='addToCart(${id})'>Add to Cart</button>
                </div>
            </div>
        `;
    }).join('');
};

display(product);

function addToCart(productId) {
    const selectedProduct = product.find(p => p.id === productId);
    if (selectedProduct) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...selectedProduct, quantity: 1 });
        }
        updateCartCount();
        displayCart();
    }
}

function updateCartCount() {
    document.getElementById('count').textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
}


function displayCart() {
    let total = 0;
    document.getElementById('cartItem').innerHTML = cart.length === 0 ?
        "<div>Your cart is Empty</div>" :
        cart.map(item => {
            total += item.price * item.quantity;
            return `
                <div class="cart" data-id="${item.id}">
                    <div class="cart-img">
                        <img src="${item.image}">
                    </div>
                    <div>
                        <p class="p-title">${item.title}</p>
                        <div class="counter">
                            <button class="increment" onclick="increment(${item.id})">+</button>
                            <span id="number-${item.id}">${item.quantity}</span>
                            <button class="decrement" onclick="decrement(${item.id})">-</button>
                        </div>
                        <h2 class="price-h2">Price: $${item.price * item.quantity}.00</h2>
                        <div>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">Delete</button>
                        </div>
                    </div>
                </div>
                <hr>
            `;
        }).join('');
    document.getElementById('total').textContent = `$${total}.00`;
}


function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    displayCart();
}


function increment(itemId) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity++;
        document.getElementById(`number-${itemId}`).textContent = item.quantity;
        displayCart();
    }
}

function decrement(itemId) {
    const item = cart.find(i => i.id === itemId);
    if (item && item.quantity > 1) {
        item.quantity--;
        document.getElementById(`number-${itemId}`).textContent = item.quantity;
        displayCart();
    }
}

updateCartCount();
displayCart();

document.getElementById('cartButton').addEventListener('click', () => {
    document.getElementById('cart-sidebar').classList.toggle('open');
});

document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart-sidebar').classList.remove('open');
});

display(product);
