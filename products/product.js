import products from '../data/products.js'
import formatCurrency from '../utils/formatCurrency.js'
import getUser from '../helper/getuser.js'
// import displayCartQuantity from '../helper/displayCartQuantity.js'

// displayCartQuantity()



// XU LY NGUOI DUNG NAV
function getUsers() {
    const user = JSON.parse(localStorage.getItem('user'))
    return user
}



function renderProducts(products) {
    const productlist = document.getElementById('product-list')
    productlist.innerHTML = ''

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
    
   


      const addToCartBtn = document.createElement('button')
      addToCartBtn.innerHTML = "Them vao gio hang"
      addToCartBtn.classList.add('btn',"btn-primary",'w-100','mt-3')

      addToCartBtn.onclick = function () {
        addToCart(product)
        
      }

        const productTag = document.createElement('div')
        productTag.classList.add('product')
        productTag.appendChild(productImageLink)
        productTag.appendChild(productName)
        productTag.appendChild(productPrices)
        productTag.appendChild(addToCartBtn)

    
        const productWrapper = document.createElement('div')
        productWrapper.classList.add('col-12','col-sm-6','col-md-4','col-lg-3','p-3')
        productWrapper.appendChild(productTag)
    
        productlist.appendChild(productWrapper)
    }
}
renderProducts(products)




// Tìm kiếm sản phẩm 
const searchInput = document.getElementById('Search-Input')
searchInput.oninput = function (event) {
    const text = event.target.value
    console.log(text);
    searchProducts(text)
}

function searchProducts(text) {
    const productsCopy = [...products]
    const searchText = text.toLowerCase().trim()
    if (searchText === ' ') {
        renderProducts(productsCopy)
    }else {
        const result = productsCopy.filter(function (p) {
            const productName =p.name
            const productNameLower = productName.toLowerCase()
            return productNameLower.includes(searchText)
        })
        renderProducts(result)
    }
}

const navbarSearchForm = document.getElementById('navbar-search-form')
const navbarSearchInput = document.getElementById('navbar-search')

navbarSearchForm.onsubmit = function (event) {
  event.preventDefault()
  const text = navbarSearchInput.value
  searchProducts(text)
}


