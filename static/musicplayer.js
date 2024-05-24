window.onload = function () {
  if (localstorage.round == 1 || !localStorage.score) {
    localStorage.score = 0
  }
}
files = ['Black Sabbath - Iron Man.mp4', 'Megadeth - A Tout Le Monde.mp4', 'Metallica - Master of Puppets.mp4','Sabaton - The Last Stand.mp4','AC/DC - Back in Blac.mp4',],
i = Math.floor(Math.random()*files.length);
var array = files[i].split(' - '),
artist = array[0], track = array[1];
//alert(artist, track)



function play() {
    var path = 'static/testmusicfolder/Metal/'
    var audio = new Audio(path+files[i]);
    audio.play();
  }

function check() {
    guess = document.getElementById("guess").value
    console.log(guess+"|"+artist)
    localStorage.score = localStorage.score + (guess == artist)
    if (localStorage.round) {
      localStorage.round += 1
    }
    else {
        localStorage.round = 1
    }
    if (localStorage.round > 3) {
      localStorage.round = 1
      window.location.href = "results"
    }
}
