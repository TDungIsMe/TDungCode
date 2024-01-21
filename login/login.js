// Biến - variable
// var - let - const
// let number = 3

// const name = 'Tuan'

// console.log(number + 2)

// console.log(number - 3)

// console.log(number * 3)

// console.log(number ** 3)

// console.log(number / 3)

// console.log(number % 3)

// boolean
const isBoy = true
// console.log(2 !== '2')

// Câu điều kiện
// if (test < 2) {
//   console.log('3 nho hon 2')
// }

// if (3 === 2) {
//   console.log('3 bang 2')
// } else if (3 > 2) {
//   console.log('3 lon hon 2')
// } else {
//   console.log('3 nho hon 2')
// }

// if (3 > 2) {
//   console.log('truong hop 1')
// }
// if (3 !== 2) {
//   console.log('truong hop 2')
// }

// Hàm - Function (Nhà máy)

// Khởi tạo hàm
function sayHello() {
  console.log('Hello cac ban')
}

// sayHello()

function tong2Va3() {
  return 2 + 3
}

// const result = tong2Va3()
// console.log(result)

function tongHaiSo(num1, num2) {
  return num1 + num2
}

const numberOne = 2
const numberTwo = 5

const result = tongHaiSo(numberOne, numberTwo)
// console.log(result)

// // Gọi hàm
// const test = sayHello()
// console.log(test > 2)

// function soSanh(number, abc, zyx) {
//   if (number > 5) {
//     return 'So nay lon hon 5'
//   } else {
//     return 'So nay khong lon hon 5'
//   }
// }

// const testNumber = 3
// const ketQua = soSanh(testNumber, 2, 4)
// console.log(ketQua)

// function soSanh(num1, num2) {
//   if (num1 > num2) {
//     console.log('So thu 1 lon hon so thu 2')
//   } else if (num1 === num2) {
//     console.log('So thu 1 bang so thu 2')
//   } else {
//     console.log('So thu 1 nho hon so thu 2')
//   }
// }

// soSanh(2, 4)
// soSanh(2, 2)
// soSanh(3, 4)
// soSanh(8, 4)

/////////////////////////////////////////////////
// Lấy ra phần tử (element)
// const loginBtn = document.getElementById('login-btn')

// loginBtn.innerHTML = 'Dang xuat abc xyz'
// console.log(loginBtnText)
const loginForm = document.getElementById('login-form')
const userList = JSON.parse(localStorage.getItem('userList')) || []
// Xu ly khi nguoi dung bam nut Dang nhap
loginForm.onsubmit = function (event) {
  event.preventDefault()
  const username = document.getElementById('username')
  const password = document.getElementById('password')

  const usernameError = document.getElementById('username-error')
  const passwordError = document.getElementById('password-error')
  const loginError = document.getElementById('login-error')

  // Kiểm tra
  if (username.value === '') {
    usernameError.innerHTML = 'Vui lòng nhập Tên đăng nhập'
  } else {
    usernameError.innerHTML = ''
  }

  if (password.value === '') {
    passwordError.innerHTML = 'Vui lòng nhập Mật khẩu'
  } else {
    passwordError.innerHTML = ''
  }
  const existingUser = userList.find(function (user) {
    return user.username === username.value 
  }) 
  if (username.value !== 'trung' || password.value !== '123456') {
    loginError.innerHTML = 'Sai Tên đăng nhập hoặc Mật khẩu'
  } else {
    loginError.innerHTML = ''
    window.location.href = '../index.html'
  }
}

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}
