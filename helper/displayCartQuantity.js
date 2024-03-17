// import getUser from "./getUser.Js"


// function  displayCartQuantity() {
//     const cartQuantity = document.getElementById('cart-quantity')
//     const userList = JSON.parse(localStorage.getElementById('userList'))
//     const currentUser = getUser()

//     if (!currentUser) {
//         cartQuantity.innerHTML = 0 
//     }else{
//      const userWithCart = userList.find(function (u) {
//          return u.username === currentUser.username;
//           });
//           const cart = userWithCart.cart || [];

//           cartQuantity.innerHTML = cart.lenghth
//     }
// }

// export default displayCartQuantity