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
#for phaarmacy model
pharma = api.model("Pharmasist",{
    'username':fields.String("phrmasist name"),
    'email':fields.String("Email"),
    'password':fields.String("password"),
    'pharmaId':fields.Integer
})
#for Order model
order = api.model("Order", {
    'orderFor':fields.String("order for name"),
    'description':fields.String("blood test/give this medicine"),
    'pUserName':fields.String("order doc name"),
    'orderId':fields.Integer

})

@api.route("/api/appointments",methods=["GET","POST"])

class AppointmentResource(Resource):
    def get(self):
        """This request returns all appointments"""
        appointments =  Appointment.query.all()
        return appointments_schema.dump(appointments)
    @api.expect(appointment)
    @api.response(201,"Successfuly created new appointment!")
    def post(self):
        """This request creates new appointment"""
        #create new appointment
        appointment =  Appointment()
        appointment.appointed_to = request.json['appointed_to']
        appointment.description = request.json['description']
        appointment.name = request.json['name']
        appointment.appointment_date = request.json['appointment_date']
        appointment.appointed_by = request.json['appointed_by']
        db.session.add(appointment)
        db.session.commit()
        return appointment_schema.dump(appointment)
@api.route('/api/appointments/<int:id>')
class AppointmentResource(Resource):
    def get(self, id):
        '''
        This request return single appointment
        '''
        appointment = Appointment.query.filter_by(appointmentId=id).first()
        return appointment_schema.dump(appointment)
    @api.expect(appointment)
    @api.response(204, 'Appointment details successfully updated.')
    def put(self, id):
        """
        This request updates a particular appointment.
        """
        appointment = Appointment.query.filter_by(appointmentId=id).first()
        appointment.description = request.json['description']
        appointment.name = request.json['name']
        appointment.appointment_date = request.json['appointment_date']
        appointment.appointed_by = request.json['appointed_by']
        appointment.appointed_to = request.json['appointed_to']
        
        db.session.add(appointment)
        db.session.commit()

        return appointment_schema.dump(appointment)

    @api.response(204, 'Appointment  successfully deleted.')
    def delete(self, id):
        """
        This request deletes a particular appointment.
        """
        appointment = Appointment.query.filter_by(appointmentId=id).first()
        if appointment is None:
            return None, 404
        db.session.delete(appointment)
        db.session.commit()
        return None, 204
@api.route("/api/Doctors")
class DoctorResource(Resource):
    def get(self):
        "This request prints all Doctors"
        doctor =Doctor.query.all()
        return doctors_schema.dump(doctor)

    @api.expect(doctor)
    @api.response(201,"Successfuly created new Doctor!")
    def post(self):
        """This request creates new Doctor"""
        doctor =Doctor()
        email = request.json['email']
        test=Doctor.query.filter_by(email=email).first()
        if test:
            return None, 404
        else: 
            doctor.username = request.json['username']
            doctor.email = request.json['email']
            doctor.password = request.json['password']
            db.session.add(doctor)
            db.session.commit()
            return doctor_schema.dump(doctor),201
@api.route("/api/loginDoctor")
class DoctorResource(Resource):
    def get(self):
        "This request prints all Doctors"
        doctor = Doctor.query.all()
        return doctors_schema.dump(doctor)
    @api.expect(doctor)
    @api.response(201,"Successfuly created new logedin!")
    def post(self):
        """This request creates new Doctor"""
        doctor = Doctor()
        if request.is_json:
            email = request.json['email']
            password = request.json['password']
        else:
            email = request.form['email']
            password = request.form['password']
        test=Doctor.query.filter_by(email=email, password=password).first()
        if test:
            # access_token = create_access_token(identity=email)
            # , access_token=access_token
            return jsonify(message="login successful")
        else:
            return "Wrong email and/or password", 401 
api.route("/api/Doctors/<int:id>")
class DoctorResource(Resource):
    def get(self,id):
        "This request returns particular Doctor"
        doctor=Doctor.query.filter_by(DoctorId=id).first()
        return doctor_schema.dump(doctor)
    @api.expect(doctor)
    @api.response(204, 'Doctor details successfully updated.')
    def put(self,id):
        "updates Doctor details"
        doctor = Doctor.query.filter_by(DoctorId=id).first()
        doctor.email = request.json['email']
        doctor.username = request.json['username']
        doctor.password = request.json['password']
        db.session.add(doctor)
        db.session.commit()
        return doctor_schema.dump(doctor)
    @api.response(204, 'Doctor  successfully deleted.')
    def delete(self,id):
        "deletes particular Doctor"
        doctor = Doctor.query.filter_by(DoctorId = id).first()
        if doctor is None:
            return None, 404
        db.session.delete(doctor)
        db.session.commit()
        return None, 204

@api.route("/api/Patients",methods=["GET",'POST'])
class PatientResource(Resource):
    def get(self):
        "This request prints all Patients"
        patient = Patient.query.all()
        return patients_schema.dump(patient)

    @api.expect(patient)
    @api.response(201,"Successfuly created new Patient!")
    def post(self):
        """This request creates new Patient"""
        patient = Patient()
        email = request.json['email']
        test=Patient.query.filter_by(email=email).first()
        if test:
            return None, 404
        else:
            patient.username = request.json['username']
            patient.email = request.json['email']
            patient.name = request.json['name']
            patient.password = request.json['password']
            patient.address = request.json['address']
            db.session.add(patient)
            db.session.commit()
            return patient_schema.dump(patient),201
api.route("/api/Patients/<int:id>")
class PatientResource(Resource):
    def get(self,id):
        "This request returns particular Patient"
        patient= Patient.query.filter_by(PatientId=id).first()
        return patient_schema.dump(patient)
    @api.expect(patient)
    @api.response(204, 'Patient details successfully updated.')
    def put(self,id):
        "updates Patient details"
        patient = Patient.query.filter_by(PatientId=id).first()
        patient.email = request.json['email']
        patient.name  = request.json['name']
        patient.address = request.json['address']
        db.session.add(patient)
        db.session.commit()
        return patient_schema.dump(patient)
    def delete(self,id):
        "deletes particular Patient"
        patient =Patient.query.filter_by(PatientId=id).first()
        if patient is None:
            return "Patient is not found",404
        db.session.delete(patient)
        db.session.commit()
        return "Patient  successfully deleted.",204
#crud operations for Patient end
