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


#Saada info Json palun
#[TODO] F I N I S H  T H I S  T H I N G
songnamesdict={}
import os
genreslist = (os.listdir('static\\musicfolder\\'))
print(genreslist)
a=0
for x in genreslist:
    songslist=(os.listdir(('\\static\\musicfolder\\',genreslist[a])))
    songnamesdict[genreslist[a]]=songslist

print(songnamesdict)

if __name__ == '__main__':
    app.run(debug=True)
