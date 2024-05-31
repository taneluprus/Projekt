from flask import Flask, render_template, request, redirect, url_for #Imports flask stuff
import os #Imports Hannah Montana Linux
import webbrowser

webbrowser.open('http://127.0.0.1:5000')

app=Flask(__name__, template_folder="templates")
@app.route("/")
def main():
    return render_template("main.html")

#Genre selection page
@app.route("/selection")
def selection():
    return render_template("selection.html")

#Actual Game page
@app.route("/game")
def game():
    return render_template("game.html")

#Results page
@app.route("/results")
def results():
    return render_template("results.html")

#Settings page
@app.route("/settings")
def settings():
    return render_template("settings.html")

#Tab icon
@app.route('/favicon.ico')
def favicon():
    return app.send_static_file('favicon.ico')

#Song player
@app.route('/songs')
def songs():
    songnamesdict={}
    genreslist = (os.listdir(os.path.join('static','musicfolder')))
    a=0
    for x in genreslist:
        filepath=os.path.join('static', 'musicfolder',genreslist[a])
        songslist=(os.listdir(filepath))
        songnamesdict[genreslist[a]]=songslist
        a+=1

    return(songnamesdict)

if __name__ == '__main__':
    app.run(debug=True)
