const userInput = document.getElementById('userInput')
const btn = document.getElementById('btn')
const message = document.getElementById('message')

const number = Math.ceil(Math.random() * 99 + 1)

let guessCount = 0

function checkNumber() {
    enteredNumber = +userInput.value

    if (enteredNumber && !isNaN(enteredNumber)) {
        if (enteredNumber === number) {
            guessCount++
            message.innerHTML = `Congratulations, you guessed the number in ${guessCount} guesses!`
        } else if (enteredNumber > number) {
            guessCount++
            message.innerHTML = `Too high, try lower!`
        } else {
            guessCount++
            message.innerHTML = `Too low, try higher!`
        }
    } else {
        message.innerHTML = `Please enter a number!`
    }
}

btn.addEventListener('click', checkNumber)