import json
from flask import Flask

app = Flask(__name__)

data = []

@app.route("/")
def index():
    return redirect("https://helpigotlostin.space", code=302)

app.run()