// E-commerce
// You have to create an e-commerce shopping cart
// First of all we need 2 arrays, 
// the list of available products and the list of products introduced in the shopping cart.
// 1. Fill the products list with at least 4 products, what attributes de we have? 
// at least should have:
// var product = {
//   id:
//   name:
//   price:
//   stock:
// }
// id is a unique number that identifies each product
// 3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
// the function will add the product to the selectedProduct list, and add the price to the totalPrice
// 4. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore
// 5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
// In addition will substract 1 in the product stock of bought products
// 6. If there is not enough stock, the product cannot be added to the shopping cart
// */

var products = [];

var product1 = {
    id: 1,
    name: "Toaster X56 Plus",
    price: 12.98,
    stock: 105
};
var product2 = {
    id: 2,
    name: "Watch Rocker",
    price: 9.99,
    stock: 2
};
var product3 = {
    id: 3,
    name: "Robot vacuum cleaner",
    price: 12.98,
    stock: 15
};
var product4 = {
    id: 4,
    name: "Soap dispensor",
    price: 5.99,
    stock: 200
};
var product5 = {
    id: 5,
    name: "Royal chair",
    price: 1500.00,
    stock: 1
};
var product6 = {
    id: 6,
    name: "Ultrasonic toothbrush",
    price: 20.00,
    stock: 27
};


products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);
products.push(product5);
products.push(product6);

var shoppingCart = {
    totalPrice: 0,
    selectedProducts: []
};

function addToShoppingCart(id) {
    const found = products.find(product => product.id === id);
    if (found.stock > 0) {
        shoppingCart.selectedProducts.push(found);
        shoppingCart.totalPrice += found.price;
    }
    if (found.stock === 0) {
        console.log("Sorry, the item is out of stock");
    }
}

function removeFromShoppingCart(id) {
    const found = products.find(product => product.id === id);
    if (shoppingCart.selectedProducts.includes(found)) {
        shoppingCart.totalPrice -= found.price;
        let productsInCart = shoppingCart.selectedProducts
        const index = productsInCart.map((item) => {
            return item.id;
        }).indexOf(id);
        productsInCart.splice(index, 1);
    }


}

function shop() {
    clearCart();
}

function clearCart() {
    products.forEach((product) => {
        if (shoppingCart.selectedProducts.includes(product))
            product.stock -= 1;
    })
    shoppingCart.selectedProducts = [];
    shoppingCart.totalPrice = 0;
}

//results
addToShoppingCart(1);
console.log("Step 1");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p => p.name));
addToShoppingCart(2);
console.log("Step 2");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p => p.name));
addToShoppingCart(4);
console.log("Step 3");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p => p.name));
removeFromShoppingCart(2);
console.log("Step 4");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p => p.name));
shop();
console.log("Step 5");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p => p.name));