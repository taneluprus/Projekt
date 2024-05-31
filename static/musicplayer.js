window.onload = function () {
  if (! localStorage.round) {
    localStorage.round = 1;
  }
  if (localStorage.round == 1 || !localStorage.score) {
    localStorage.score = 0;
  }

  document.getElementById("genre").innerHTML = `${localStorage.genre} ${localStorage.round}/${localStorage.rounds}`;
  document.getElementById("guess").addEventListener("keydown", function (e) {
    if (e.code === "Enter") { 
      check();
    }
  });
}

genre = localStorage.genre;
files = JSON.parse(localStorage.songs)[genre];
i = Math.floor(Math.random()*files.length);
var array = files[i].split(' - ');
artist = array[0].toLowerCase(), track = array[1].toLowerCase();

var volume = 1;
if (localStorage.volume) {
  volume = Number(localStorage.volume) / 100;
}
var rounds = 3;
if (localStorage.rounds) {
  rounds = Number(localStorage.rounds);
}


function play() {
  var audio = new Audio(`static/musicfolder/${genre}/${files[i]}`);
  audio.volume = volume;
  audio.play();
}

function check() {
  guess = document.getElementById("guess").value.toLowerCase();
  //console.log(guess+"|"+artist);
  localStorage.score = 0 + Number(localStorage.score) + (guess == artist);
  result = document.getElementById("result");
  nextButton = document.getElementById("nextButton");
  result.innerHTML = guess == artist ? "correct" : `wrong: ${artist}`
  document.getElementById("guess").style.display = 'none';
  document.getElementById("checkButton").style.display = 'none';
  result.style.display = 'block';
  nextButton.style.display = 'block';
}

function next() {
  if (localStorage.round) {
    localStorage.round = Number(localStorage.round) + 1;
  }
  else {
    localStorage.round = 1;
  }
  if (Number(localStorage.round) > rounds) {
    localStorage.round = 1;
    window.location.href = "results";
  }
  else {
    window.location.href = "game";
  }
}