from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()


class Dinner(db.Model):
    __tablename__ = "dinners"
    DinnerID = db.Column(db.Integer, primary_key=True)
    Title = db.Column(db.String, nullable=False)
    EventDate = db.Column(db.DateTime, nullable=False)
    Description = db.Column(db.String, nullable=True)
    HostedBy = db.Column(db.String, nullable=False)
    ContactPhone = db.Column(db.String, nullable=True)
    Address = db.Column(db.String, nullable=False)
    Country = db.Column(db.String, nullable=False)
    Latitude = db.Column(db.Float, nullable=False)
    Longitude = db.Column(db.Float, nullable=False)
class Register(db.Model):
    __tablename__ = "Register"
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


class RSVP(db.Model):
    __tablename__ = "rsvps"
    RsvpID = db.Column(db.Integer, primary_key=True)
    DinnerID = db.Column(db.Integer, db.ForeignKey(
        "dinners.DinnerID"), nullable=False)
    AttendeeName = db.Column(db.String, nullable=False)
