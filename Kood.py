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

#@app.route('/Music/<path>')
#def music():
#    return app.send
#

if __name__ == '__main__':
    app.run(debug=True)
