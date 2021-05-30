from flask import Flask
from flask import request, jsonify, render_template, make_response
import sqlite3
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["DEBUG"] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///patient.sqlite3'

db = SQLAlchemy(app)
class Patients(db.Model):
   id = db.Column('patient_id', db.Integer, primary_key = True)
   name = db.Column(db.String(100))
   city = db.Column(db.String(50))  
   addr = db.Column(db.String(200))
   phone_number = db.Column(db.String(15))

def __init__(self, name, city, addr,pin):
   self.name = name
   self.city = city
   self.addr = addr
   self.phone_number = phone_number
@app.route('/')
def home():
   return render_template('base.html')
@app.route('/api/patient/all')
def show_all():
   return render_template('patient_list.html', students = Patients.query.all() )
@app.errorhandler(404)
def page_not_found(e):
    return "<h1>404</h1><p>The resource could not be found.</p>", 404
@app.route('/api/test', methods=['GET'])
def api_filter():
    query_parameters = request.args

    id = query_parameters.get('id')
    name = query_parameters.get('name')
    city = query_parameters.get('city')

    query = "SELECT * FROM Patients WHERE"
    to_filter = []

    if id:
        query += ' id=? AND'
        to_filter.append(id)
    if name:
        query += ' name=? AND'
        to_filter.append(name)
    if city:
        query += ' city=? AND'
        to_filter.append(city)
    if not (id or name or city):
        return page_not_found(404)

    query = query[:-4] + ';'

    return render_template('patient_list.html', students = to_filter )