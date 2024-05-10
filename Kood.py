import winsound
import os
import random
from flask import Flask, render_template, request, redirect, url_for

app=Flask(__name__, template_folder="templates")
@app.route("/")
def main():
    return render_template("main.html")

@app.route("/game")
def game():
    return render_template("game.html")

@app.route("/results")
def results():
    return render_template("results.html")

@app.route("/settings")
def settings():
    return render_template("settings.html")

@app.route('/favicon.ico')
def favicon():
    return app.send_static_file('favicon.ico')

if __name__ == '__main__':
    app.run(debug=True)



folder=('Music1\\')
list=[]
artistid=[]
laulud=[]
number=int(0)

list=os.listdir('testmusicfolder\\'+folder)
print(list)

for element in list:
    artist, laul = list[number].split(" - ")
    number=number+1
    artistid.append(artist)
    laulud.append(laul)

print(random.choice(list))

winsound.PlaySound((("testmusicfolder\\"+folder)+(random.choice(list))), winsound.SND_FILENAME)