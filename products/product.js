const products = [
    {
        id : 1,
        name: "Iphone 15 128GB",
        desc: "",
        price: 21490000,
        img: '/images/product1.jbg',
    },
    {
        id : 2,
        name: "Iphone 13 256GB",
        desc: "",
        price: 15490000,
        img: '/images/product2.avif',
    },
]



const productlist = document.getElementById('product-list')
console.log(productlist);
for (let i = 0; i < products.length; i++) {
    const product = products[i]
    
    const productImage = document.createElement('img')
    productImage.classList.add('product-img')
    productImage.setAttribute('src',product.img)
    console.log(productImage);
}