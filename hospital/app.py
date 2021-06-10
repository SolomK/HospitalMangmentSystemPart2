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
