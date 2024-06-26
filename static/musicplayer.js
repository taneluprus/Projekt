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
songs = JSON.parse(localStorage.songs);
files = songs[genre];
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

//Musicplayer
function play() {
  var audio = new Audio(`static/musicfolder/${genre}/${files[i]}`);
  audio.volume = volume;
  audio.play();
}

//Function to compare guess to artist
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

//Next song
function next() {
  files.splice(i, 1);
  songs[genre] = files;
  localStorage.songs = JSON.stringify(songs);

  if (localStorage.round) {
    localStorage.round = Number(localStorage.round) + 1;
  }
  else {
    localStorage.round = 1;
  }
  if (Number(localStorage.round) > rounds) {
    window.location.href = "results";
  }
  else {
    window.location.href = "game";
  }
}