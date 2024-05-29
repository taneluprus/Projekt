window.onload = function () {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            createoptions(JSON.parse(xmlHttp.responseText));
        }
    }
    xmlHttp.open("GET", "/songs", true);
    xmlHttp.send(null);
}

function createoptions(songs) {
    localStorage.songs = JSON.stringify(songs);
    genres = document.getElementById("genres");
    var songstring = ""
    for (genre in songs) {
        songstring = songstring + `<button class="button" onclick="{localStorage.genre = '${genre}'; window.location.href = '/game'}">${genre}</button><br>`
    }
    genres.innerHTML = songstring;
}
