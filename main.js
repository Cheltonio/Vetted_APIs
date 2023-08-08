let joke;

let setup = document.getElementById("setup");
let punchline = document.getElementById("punchline");
let reveal = document.getElementById("reveal");

refresh();

document.getElementById("yesButton").onclick = refresh;
document.getElementById("noButton").onclick = refresh;

document.getElementById("save").onclick = function() {
    document.getElementById("saved1").innerText = joke.setup;
    document.getElementById("saved2").innerText = joke.punchline;
}

function refresh() {
    displayJoke();
    getImages("yes");
    getImages("no");
}

function displayJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(
        function(response) {
            return response.json();
        }
    )
    .then(
        function(jsonData) {
            joke = jsonData;
            setup.innerText = joke.setup;
            punchline.innerText = joke.punchline;
            punchline.style.display = "none";
        }
    )
}

function getImages(force) {
    fetch("https://yesno.wtf/api?force="+force)
    .then(
        function(response) {
            return response.json();
        }
    )
    .then(
        function(jsonData) {
            let img = jsonData;
            document.getElementById(force).src = img.image;
        }
    )
}

reveal.onclick = function() {
    punchline.style.display = "block";
}