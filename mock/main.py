"""
Mocked implementation of routes for fn.saintsxctf.com.  This is only used for API testing and local environments.
Author: Andrew Jarombek
Date: 3/28/2021
"""

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET'])
def entry():
    return 'SaintsXCTF Function API'


@app.route('/email/activation-code', methods=['POST'])
def activation_code_email():
    return jsonify({'result': True})


@app.route('/email/forgot-password', methods=['POST'])
def forgot_password_email():
    return jsonify({'result': True})


@app.route('/email/report', methods=['POST'])
def report_email():
    return jsonify({'result': True})


@app.route('/email/welcome', methods=['POST'])
def welcome_email():
    return jsonify({'result': True})


@app.route('/uasset/group', methods=['POST'])
def uasset_group():
    return jsonify({'result': True})


@app.route('/uasset/user', methods=['POST'])
def uasset_user():
    return jsonify({'result': True})
