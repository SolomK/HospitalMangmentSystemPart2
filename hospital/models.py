from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Doctor(db.Model):
    __tablename__='doctor'
    DoctorId = db.Column(db.Integer, primary_key=True,autoincrement=True)
    username = db.Column(db.String,nullable=False,unique=True)
    email = db.Column(db.String,nullable=False,unique=True)
    password = db.Column(db.String,nullable=False)

class Admin(db.Model):
    __tablename__='admin'
    AdminId = db.Column(db.Integer, primary_key=True,autoincrement=True)
    username = db.Column(db.String,nullable=False,unique=True)
    email = db.Column(db.String,nullable=False,unique=True)
    password = db.Column(db.String,nullable=False)

class Patient(db.Model):
    __tablename__ = 'patient'
    PatientId = db.Column(db.Integer, primary_key=True,autoincrement=True)
    username = db.Column(db.String,nullable=False)
    name = db.Column(db.String,nullable=False)
    email = db.Column(db.String,nullable=False,unique=True)
    password = db.Column(db.String,nullable=False)
    address = db.Column(db.String,nullable=False)
    symptom = db.Column(db.String,nullable=True)
    status = db.Column(db.String,nullable=True)
    phone = db.Column(db.Integer)
    docname = db.Column(db.String,nullable=True)
    date = db.Column(db.String,nullable=True)


class Appointment(db.Model):
    __tablename__="appointment"
    appointmentId = db.Column(db.Integer, primary_key=True,autoincrement=True)
    name = db.Column(db.String,nullable=False)
    description = db.Column(db.String,nullable=False)
    appointment_date=db.Column(db.String,nullable=False)
    appointed_by = db.Column(db.String,nullable=False)
    appointed_to = db.Column(db.String,nullable=False)


class Order(db.Model):
    __tablename__="order"
    orderId = db.Column(db.Integer, primary_key=True,autoincrement=True)
    pUserName = db.Column(db.String,nullable=False)
    description = db.Column(db.String,nullable=False)
    orderFor = db.Column(db.String,nullable=False)

class Laboratorist(db.Model):
    __tablename__='laboratory'
    labId = db.Column(db.Integer, primary_key=True,autoincrement=True)
    username = db.Column(db.String,nullable=False)
    email = db.Column(db.String,nullable=False)
    password = db.Column(db.String,nullable=False)


class Pharmasist(db.Model):
    __tablename__='pharmacy'
    pharmaId = db.Column(db.Integer, primary_key=True,autoincrement=True)
    username = db.Column(db.String,nullable=False)
    email = db.Column(db.String,nullable=False)
    password = db.Column(db.String,nullable=False)
