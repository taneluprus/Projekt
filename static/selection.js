window.onload = function () {
    localStorage.round = 1;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            createoptions(JSON.parse(xmlHttp.responseText));
        }
    }
    xmlHttp.open("GET", "/songs", true);
    xmlHttp.send(null);
}

//Genres
function createoptions(songs) {
    localStorage.songs = JSON.stringify(songs);
    var genres = document.getElementById("genres");
    var songstring = "";
    var count = 0;
    for (var genre in songs) {
        if (count % 4 == 0) {
            songstring += "</div><div class='column'>"; 
        }
        songstring += `<button class="button" onclick="localStorage.genre = '${genre}'; window.location.href = '/game'">${genre}</button><br>`;
        count++;
    }
    songstring += "</div>"; 
    genres.innerHTML = songstring; 
}
