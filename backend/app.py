import logging
import os

from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/predict', methods=['POST'])
def predict():
    return 'Hello World!'
    # return os.system("python3 predict.py --checkpoint='./checkpoint.pth' --image='#from-post-request' ")


if __name__ == '__main__':
    app.run(debug=True)
