let head = document.head

head.innerHTML += "\n<meta charset=\"UTF-8\">"
head.innerHTML += "\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
head.innerHTML += "\n<title>development blog</title>"
let css = window.location.origin + "/head.css"
head.innerHTML += "\n<link rel=\"stylesheet\" href=\"" + css + "\"/>"