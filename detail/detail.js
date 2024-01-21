import products from '../data/products.js'
import formatCurrency from '../utils/formatCurrency.js'

const name = document.getElementById('name')
const img = document.getElementById('image')
const price = document.getElementById('price')
const desc = document.getElementById('desc')

const params = new URL(document.location).searchParams
const productId = params.get('id')
console.log(productId);

const product = products.find(function (p) {
    return p.id == productId
})

if (product) {
    name.innerHTML = product.name
    price.innerHTML = formatCurrency(product.price)
    desc.innerHTML = product.desc
    img.setAttribute('src', product.img)
}