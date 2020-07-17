import logging
import os

from flask import Flask, request, redirect


app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/predict', methods=['POST', 'GET'])
def predict():
    if request.method == "POST":
        if request.files:
            image = request.files["image"]
        return os.system("python3 predict.py --checkpoint='./checkpoint.pth' --image='image'")


if __name__ == '__main__':
    app.run(debug=True)
