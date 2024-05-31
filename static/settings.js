var volumeslider
var volumelabel
var roundsslider
var roundslabel

//Volume slider setting
volumeslider = document.getElementById("volume");
volumelabel = document.getElementById("volumelabel");
if (localStorage.volume) {
    volumeslider.value = localStorage.volume
} else {
    volumeslider.value = 100
    localStorage.volume = 100
}
volumelabel.innerHTML = "Volume: " + volumeslider.value;
volumeslider.oninput = function() {
    volumelabel.innerHTML = "Volume: " + this.value;
    localStorage.volume = this.value
}

//Mitu laulu tuleb
roundsslider = document.getElementById("rounds");
roundslabel = document.getElementById("roundslabel");
if (localStorage.rounds) {
    roundsslider.value = localStorage.rounds
} else {
    roundsslider.value = 3
    localStorage.rounds = 3
}
roundslabel.innerHTML = "Rounds: " + roundsslider.value;
roundsslider.oninput = function() {
    roundslabel.innerHTML = "Rounds: " + this.value;
    localStorage.rounds = this.value
}
