window.onload = function () {
    document.getElementById("button").innerHTML = localStorage.option
}

function toggleButton() {
    if (localStorage.option == "false") {
        localStorage.option = true
    }
    else {
        localStorage.option = false
    }
    document.getElementById("button").innerHTML = localStorage.option
}