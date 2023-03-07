const name = document.querySelector("#username");
const greetMeButton = document.querySelector(".greet-btn");
const greetingOutput = document.querySelector(".greetings");

greetMeButton.addEventListener('click', (event) => {
    greetingOutput.innerText = `Hello CACA ${name.value}`;
})