window.onload = function () {
  if (localStorage.round == 1 || !localStorage.score) {
    localStorage.score = 0
  }
  document.getElementById("genre").innerHTML = localStorage.genre;
}
files = ['Black Sabbath - Iron Man.mp4', 'Megadeth - A Tout Le Monde.mp4', 'Metallica - Master of Puppets.mp4','SABATON - The Last Stand.mp4','ACDC - Back in Black.mp4',],
i = Math.floor(Math.random()*files.length);
var array = files[i].split(' - '),
artist = array[0], track = array[1];
//alert(artist, track)



function play() {
    var path = 'static/musicfolder/Metal/'
    var audio = new Audio(path+files[i]);
    audio.play();
  }

function check() {
    guess = document.getElementById("guess").value
    //console.log(guess+"|"+artist)
    localStorage.score = 0 + Number(localStorage.score) + (guess == artist)
    if (localStorage.round) {
      localStorage.round = Number(localStorage.round) + 1
    }
    else {
        localStorage.round = 1
    }
    if (Number(localStorage.round) > 3) {
      localStorage.round = 1
      window.location.href = "results"
    }
    else {
      window.location.href = "game"
    }
}
