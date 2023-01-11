

const product = document.getElementById('product')
const iconSpin = document.getElementById('icon-spin')
const iconClose = document.getElementById('icon-close')


iconSpin.addEventListener('click', spinProduct)

iconClose.addEventListener('click', stopSpin)

function spinProduct() {
  iconSpin.classList.add('none')
  iconClose.classList.remove('none')

  product.src = './assets/gifProduct1.gif'
}

function stopSpin() {
  iconClose.classList.add('none')
  iconSpin.classList.remove('none')


  product.src = './assets/imgProduct1.png'
}

