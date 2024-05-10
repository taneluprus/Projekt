window.onload = function () {
    files = ['ARTIST - test.wav', 'ARTIST2 - test2.wav', 'ARTIST3 - test3.wav', 'ARTIST4 - test.wav4', 'ARTIST5 - test5.wav'],
    i = Math.floor(Math.random()*files.length);
    var array = files[i].split(' - '),
    artist = array[0], track = array[1];
    alert(artist, track)

}



function play() {
    var path = 'static/testmusicfolder/Music1/'
    var audio = new Audio(path+files[i]);
    audio.play();
    
  }