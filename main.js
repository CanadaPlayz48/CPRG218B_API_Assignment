fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")

.then(response => response.json())
.then (data => {
    console.log(data)
    if (data.category == "Pun") {
        document.getElementById("header").innerHTML = "A random "+data.category
    }
    else {
        document.getElementById("header").innerHTML = "A random "+data.category+" joke"
    }
    if (data.setup) {
        document.getElementById("content").innerHTML = data.setup + "<br>" + data.delivery
    }
    else {
    document.getElementById("content").innerHTML = data.joke
    }
}
)