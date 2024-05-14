const buttonOpen = document.querySelector("#buttonOpen")
const openAnother = document.querySelector("#openAnother")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

buttonOpen.addEventListener('click', handleClick)
openAnother.addEventListener('click', handleBackClick)

function handleClick(event) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
}

function handleBackClick(event) {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
}