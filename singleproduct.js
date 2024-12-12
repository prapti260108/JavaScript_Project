// 1
let urlParams = new URLSearchParams(window.location.search);
let productId = parseInt(urlParams.get('id'));

let products = [
    {
        id: 0,
        image: 'https://m.media-amazon.com/images/I/81KtAJ495-L._AC_UL640_FMwebp_QL65_.jpg',
        title: 'Round Neck Foral Top',
        price: 299,
    },
    {
        id: 1,
        image: 'https://m.media-amazon.com/images/I/61tvVFLs5sL._AC_UL640_FMwebp_QL65_.jpg',
        title: 'Rayon Regular Fit Top',
        price: 339,
    },
    {
        id: 2,
        image: 'https://m.media-amazon.com/images/I/71Yh7KQY3aL._AC_UL640_FMwebp_QL65_.jpg',
        title: 'Sky Heights pink Floral Top',
        price: 649,
    },
    {
        id: 3,
        image: 'https://m.media-amazon.com/images/I/61kqCzRuDtL._AC_UL640_FMwebp_QL65_.jpg',
        title: 'Womens Wear Fit Top',
        price: 460,
    },
    {
        id: 4,
        image: 'https://m.media-amazon.com/images/I/61igGfjojlL._AC_UL640_FMwebp_QL65_.jpg',
        title: 'Womens Fit Casual Shirt',
        price: 699,
    },
    {
        id: 5,
        image: 'https://m.media-amazon.com/images/I/81t+AmY-N2L._AC_UL640_QL65_.jpg',
        title: 'Stylish Boota Georgette',
        price: 449,
    },
    {
        id: 6,
        image: 'https://m.media-amazon.com/images/I/71Yydd+CnlL._AC_UL640_FMwebp_QL65_.jpg',
        title: 'Womens Blue Tie Knot Top',
        price: 460,
    },
    {
        id: 7,
        image: 'https://m.media-amazon.com/images/I/61FonvOtaqL._AC_UL640_QL65_.jpg',
        title: 'Womens Western Top ',
        price: 550,
    },
    {
        id: 8,
        image: 'https://m.media-amazon.com/images/I/51QULwWrJuL._AC_UL640_FMwebp_QL65_.jpg',
        title: 'Print Casual Men Tshirt',
        price: 299,
    },
    {
        id: 9,
        image: 'https://m.media-amazon.com/images/I/612EIYgTnrL._SY879_.jpg',
        title: 'ADRO Mens T-Shirt',
        price: 369,
    },
    {
        id: 10,
        image: 'https://m.media-amazon.com/images/I/71SZEUOfrkL._SY879_.jpg',
        title: 'Mens Regular Fit Shirt',
        price: 329,
    },
    {
        id: 11,
        image: 'https://m.media-amazon.com/images/I/71iFXbwGVKL._SY879_.jpg',
        title: 'Woven Causal Wear Fit Top',
        price: 460,
    },
    {
        id: 12,
        image: 'https://m.media-amazon.com/images/I/810PeG9gqKL._SY879_.jpg',
        title: 'Cotton Oversized Tshirt',
        price: 575,
    },
    {
        id: 13,
        image: 'https://m.media-amazon.com/images/I/71fz6+A0heL._SY879_.jpg',
        title: 'Mens Regular Fit Shirt',
        price: 329,
    },
    {
        id: 14,
        image: 'https://m.media-amazon.com/images/I/71sTIP2Vy1L._SY879_.jpg',
        title: 'Down Collar Neck t-Shirt',
        price: 599,
    },
    {
        id: 15,
        image: 'https://m.media-amazon.com/images/I/61-TS4ENveL._SY879_.jpg',
        title: 'ADRO Mens T-Shirt',
        price: 369,
    },
    {
        id: 16,
        image: 'https://m.media-amazon.com/images/I/71wFzkFla1L._SY879_.jpg',
        title: 'Frock Dress for Girls Kids',
        price: 399,
    },
    {
        id: 17,
        image: 'https://m.media-amazon.com/images/I/61Mfh5kdZPL._SY879_.jpg',
        title: 'Cotton Knee-Length Dress',
        price: 739,
    },
    {
        id: 18,
        image: 'https://m.media-amazon.com/images/I/51OsCiPvLwL._SY879_.jpg',
        title: 'Doodle Unicorn Dress for Girls',
        price: 999,
    },
    {
        id: 19,
        image: 'https://m.media-amazon.com/images/I/41kC8Pe5UzL.jpg',
        title: 'Fit Trendy Net Frock Dress',
        price: 325,
    },
    {
        id: 20,
        image: 'https://m.media-amazon.com/images/I/813q0X1oiHL._SY879_.jpg',
        title: 'Cotton Boys Tshirt Cut and sew Pattern with Chest Print',
        price: 259,
    },
    {
        id: 21,
        image: 'https://m.media-amazon.com/images/I/61Yi93iM6dL._SX679_.jpg',
        title: 'Kids Cotton Krishna Printed Tshirt for Girls & Boys',
        price: 399,
    },
    {
        id: 22,
        image: 'https://m.media-amazon.com/images/I/6114edh5UfL._SY879_.jpg',
        title: 'Boys Animal Print Cotton Half Sleeve Tshirt',
        price: 249,
    },
    {
        id: 23,
        image: 'https://m.media-amazon.com/images/I/71PQThg-tpL._SX679_.jpg',
        title: 'Mickey Printed Regular Fit Multicolor Cotton Boys T-Shirt ',
        price: 469,
    }
];

let product = products.find(p => p.id === productId);

if (product) {
    document.getElementById('product-name').textContent = product.title;

    const productImage = document.createElement('img');
    console.log(productImage)
    productImage.src = product.image;

    document.getElementById('single-product').appendChild(productImage);
    document.getElementById('product-price').textContent = `price: $${product.price}`;


    document.getElementById('add-to-cart-btn').addEventListener('click', function () {
        alert(`product ${product.title} added to cart!`);
        // window.location.href='viewCart.html'
    });
}
else {
    window.location.href = 'addtocart.html'
}






