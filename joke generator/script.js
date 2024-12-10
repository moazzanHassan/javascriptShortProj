var joke = document.querySelector("#joke")
var btn = document.querySelector("#btn")

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

function get_joke(){
    fetch(url)
    .then(data => data.json())
    .then(item => {
        joke.textContent = `${item.joke}`
    })
}
btn.addEventListener("click",get_joke)


get_joke()