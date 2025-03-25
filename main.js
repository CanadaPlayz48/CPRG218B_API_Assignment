    /* Default Loaded Joke */
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("header").innerHTML = "Joke Of The Day"
        fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
        .then(response => response.json())
        .then (data => {
            console.log(data)
            if (data.setup) {
                document.getElementById("content").innerHTML = data.setup + "<br>" + data.delivery
            }
            else {
            document.getElementById("content").innerHTML = data.joke
            }
        })
    });

    /* Programming Joke */
    progJoke.addEventListener("click", function() {
        fetch("https://v2.jokeapi.dev/joke/Programming?safe-mode")
        .then(response => response.json())
        .then (data => {
            console.log(data)
            document.getElementById("header").innerHTML = "A random Programming joke"
            if (data.setup) {
                document.getElementById("content").innerHTML = data.setup + "<br>" + data.delivery
            }
            else {
            document.getElementById("content").innerHTML = data.joke
            }
        })
    });

        /* Miscellaneous Joke */
    miscJoke.addEventListener("click", function() {
        fetch("https://v2.jokeapi.dev/joke/Misc?safe-mode")
        .then(response => response.json())
        .then (data => {
            console.log(data)
            document.getElementById("header").innerHTML = "A random Miscellaneous joke"
            if (data.setup) {
                document.getElementById("content").innerHTML = data.setup + "<br>" + data.delivery
            }
            else {
            document.getElementById("content").innerHTML = data.joke
            }
        })
        });

    /* Pun */
    pun.addEventListener("click", function() {
        fetch("https://v2.jokeapi.dev/joke/Pun?safe-mode")
        .then(response => response.json())
        .then (data => {
                console.log(data)
                document.getElementById("header").innerHTML = "A random Pun"
                if (data.setup) {
                    document.getElementById("content").innerHTML = data.setup + "<br>" + data.delivery
                }
                else {
                document.getElementById("content").innerHTML = data.joke
                }
            })
        });

        /* Spooky Joke */
        spookJoke.addEventListener("click", function() {
            fetch("https://v2.jokeapi.dev/joke/Spooky?safe-mode")
            .then(response => response.json())
            .then (data => {
                    console.log(data)
                    document.getElementById("header").innerHTML = "A random Spooky joke"
                    if (data.setup) {
                        document.getElementById("content").innerHTML = data.setup + "<br>" + data.delivery
                    }
                    else {
                    document.getElementById("content").innerHTML = data.joke
                    }
                })
            });

        /* Christmas Joke */
        xmasJoke.addEventListener("click", function() {
            fetch("https://v2.jokeapi.dev/joke/Christmas?safe-mode")
            .then(response => response.json())
            .then (data => {
                    console.log(data)
                    document.getElementById("header").innerHTML = "A random Christmas joke"
                    if (data.setup) {
                        document.getElementById("content").innerHTML = data.setup + "<br>" + data.delivery
                    }
                    else {
                    document.getElementById("content").innerHTML = data.joke
                    }
                })
            });
            


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
