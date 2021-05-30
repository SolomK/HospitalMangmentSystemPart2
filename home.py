from flask import Flask
from flask import request, jsonify, render_template, make_response,redirect
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

class PRegister(db.Model):
    id = db.Column('p_id', db.Integer, primary_key=True)
    firstname = db.Column(db.String(200),nullable=False)
    lastname = db.Column(db.String(200),nullable=False)
    middlename = db.Column(db.String(200),nullable=False)
    age = db.Column(db.Integer,nullable=False)
    address = db.Column(db.String,nullable=False)
    symptom = db.Column(db.String,nullable=False)

    dname = db.Column(db.String, nullable=False)
    email = db.Column(db.String,nullable=True)
    phone = db.Column(db.Integer,nullable = False)
    username = db.Column(db.Integer,nullable=False)
    password = db.Column(db.String,nullable=False)
    # def __init__(self, name,lastname,more):
    #     super(PRegister, self).__init__(name,lastname,more))
        
    
@app.route('/')
def home():
   return render_template('home.html')

@app.route('/facility')
def facility():
    return render_template('facility.html')

@app.route('/doctorlist')
def doclist():
    return render_template('doclist.html')

@app.route('/register', methods=['GET','POST'])
def pregister():
    if(request.method == 'POST'):
        fname = request.form['fName']
        lname = request.form['lName']
        mname = request.form['mName']
        page = request.form['Age']
        paddress = request.form['Address']
        psymptom = request.form['symptom']

        docname = request.form['dName']
        pemail = request.form['email']
        pphone = request.form['phone']

        pusername = request.form['uName']
        ppassword = request.form['password']

        newpatient = PRegister(firstname=fname,lastname=lname,middlename=mname,age=page,address=paddress,symptom=psymptom,dname=docname,email=pemail,phone=pphone,username=pusername,password=ppassword)
        db.session.add(newpatient)
        db.session.commit()
        return redirect('/register')
    else:
        return render_template('register.html')

@app.route('/plogin')
def pLogin():
    return render_template('plogin.html')

@app.route('/pinfo')  
def pinfo():
    patients = PRegister.query.all()
    fname = request.form['fName']
    password = request.form['passw']
    message = "User name or/and password is incorrect"
    for patient in patients:
        
        if patient.username == fname and patient.password == password:
            return render_template('pinfo.html')
        if patient.username != fname or patient.password != password:
            return render_template('plogin.html',message=message)
            

@app.errorhandler(404)
def not_found(error):
 #resp = make_response(render_template('page_not_found.html'), 404)
 # resp.headers['X-Something'] = 'A value'
 return "Error"


@app.route('/api/patient/all')
def show_all():
   return render_template('patient_list.html', students = Patients.query.all() )
#@app.errorhandler(404)
#def page_not_found(e):
#   return "<h1>404</h1><p>The resource could not be found.</p>", 404




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