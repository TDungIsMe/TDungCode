import products from '../data/products.js'
import formatCurrency from '../utils/formatCurrency.js'

const productlist = document.getElementById('product-list')
console.log(productlist);
for (let i = 0; i < products.length; i++) {
    const product = products[i]
    
    const productImage = document.createElement('img')
    productImage.classList.add('product-img')
    productImage.setAttribute('src',product.img)
    
    const productImageLink = document.createElement('a')
    productImageLink.setAttribute('href' , '../detail/index.html?id=' + product.id)
    productImageLink.appendChild(productImage)


    const productName = document.createElement('a')
    productName.setAttribute('href' , '../detail/index.html?id=' + product.id)
    productName.classList.add('prroduct-name')
    productName.innerHTML = product.name

    const newPrice = document.createElement('span')
    newPrice.classList.add('new-price')
    newPrice.innerHTML = product.price
    newPrice.innerHTML = formatCurrency(product.price) 
    // Tao the div boc gia ban
    const productPrices = document.createElement('div')
    productPrices.classList.add('product-prices')
    productPrices.appendChild(newPrice)

    const productTag = document.createElement('div')
    productTag.classList.add('product')
    productTag.appendChild(productImageLink)
    productTag.appendChild(productName)
    productTag.appendChild(productPrices)

    const productWrapper = document.createElement('div')
    productWrapper.classList.add('col-12','col-sm-6','col-md-4','col-lg-3','p-3')
    productWrapper.appendChild(productTag)

    productlist.appendChild(productWrapper)
}


