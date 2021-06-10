from flask import Flask,render_template, url_for, flash, redirect, request, jsonify
from flask_marshmallow import Marshmallow
from flask_restplus import Resource,Api,fields
from flask_cors import CORS

from setting import *
from models import *
from marsh import *

# from dotenv import load_dotenv
# from Config import setting;
# from Database import models;

# from flask_cors import CORS
# this is for the login form
# from flask_jwt_extended import JWTManager, jwt_required, create_access_token

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = SQLALCHEMY_TRACK_MODIFICATIONS
# this is for the login form key
# app.config['JWT_SECRET_KEY'] = "What is the best secure password"
# cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
CORS(app)
db.init_app(app) # initialize

marsh = Marshmallow(app)


doctor_schema = DoctorSchema()
doctors_schema = DoctorSchema(many=True)

admin_schema = AdminSchema()
admins_schema = AdminSchema(many=True)

lab_schema = LabSchema()
labs_schema = LabSchema(many=True)

pharma_schema = PharmaSchema()
pharmas_schema = PharmaSchema(many=True)

order_schema = OrderSchema()
orders_schema = OrderSchema(many=True)

patient_schema = PatientSchema()
patients_schema = PatientSchema(many=True)

appointment_schema = AppointmentSchema()
appointments_schema = AppointmentSchema(many=True)
#fields for models for swagger used for documentation only
api = Api(app,version="1",title="Hospital Database",description="ABC hospital the besst ever")
# jwt = JWTManager(app)
#for appointment model
appointment = api.model("Appointment", {
    'appointed_by':fields.String("patient name"),
    'description':fields.String("symptom"),
    'appointment_date':fields.DateTime,
    'appointed_to':fields.String(),
    'name':fields.String("appoinment name"),
    'appointmentId':fields.Integer
})
#for Doctor model

doctor = api.model("Doctor",{
    'username':fields.String("Doctor name"),
    'email':fields.String("Email"),
    'password':fields.String("password"),
    'DoctorId':fields.Integer
})
#for admin
admin = api.model("Admin",{
    'username':fields.String("Admin name"),
    'email':fields.String("Email"),
    'password':fields.String("password"),
    'AdminId':fields.Integer
})
#for Patient model

patient = api.model("Patient",{
    'username':fields.String("patient name"),
    'email':fields.String("Email"),
    'name':fields.String('name'),
    'password':fields.String("password"),
    'address':fields.String("address"),
    'PatientId':fields.Integer,
    'symptom':fields.String,
    'status':fields.String,
    'phone':fields.String,
    'docname':fields.String("doctor name"),
    'date':fields.String
})
#for laboratory model
lab = api.model("Laboratorist",{
    'username':fields.String("Laboratorist name"),
    'email':fields.String("Email"),
    'password':fields.String("password"),
    'labId':fields.Integer
})
