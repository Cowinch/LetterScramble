const letters = "ABCDEFGHIOJKLMNOPQRSTUVWXYZ"
let originalLetter = (word, index) => word.dataset.value[index]
let randomLetter = () => letters[Math.floor(Math.random() * 26)]

// Word scrambler
document.querySelector('.scramble').onmouseover = event => {
    let word = event.target
    let iterations = 0
    const wordScrambleInterval = setInterval(() => {
        word.innerText = word.innerText.split('').map((letter, index) => {
            if (index < iterations) return originalLetter(word, index)
            else return randomLetter()
        }).join('')
        if (iterations >= word.dataset.value.length) clearInterval(wordScrambleInterval)
        iterations += 1 / 4
    }, 30)
}


