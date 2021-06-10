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