let currentNumberWrapper = document.getElementById('currentNumber')
let currentNumber = 0

let buttonIncrement = document.getElementById('increment')

buttonIncrement.addEventListener('click', () => {
  if (currentNumber < 10) {
    currentNumber = currentNumber + 1
    currentNumberWrapper.innerHTML = currentNumber
  }

  if (currentNumber >= 0) {
    currentNumberWrapper.style.color = 'black'
  }
})

let buttonDecrement = document.getElementById('decrement')

buttonDecrement.addEventListener('click', () => {
  if (currentNumber >= -4) {
    currentNumber = currentNumber - 1
    currentNumberWrapper.innerHTML = currentNumber
  }

  if (currentNumber < 0) {
    currentNumberWrapper.style.color = 'red'
  }
})
