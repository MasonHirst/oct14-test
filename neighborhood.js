const foodChoices = document.querySelectorAll('.choices')


document.querySelector('#random-button').addEventListener('click', () => {
    let choiceResult = foodChoices[Math.floor(Math.random() * foodChoices.length)]
    alert(`Go eat at ${choiceResult.textContent}`)
})
