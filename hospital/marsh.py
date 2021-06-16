from flask_marshmallow import Marshmallow
# from Database import models
from models import *

marsh = Marshmallow()

class AppointmentSchema(marsh.Schema):
    class Meta:
        fields=("appointmentId","description","appointment_date","appointed_by","appointed_to")
        model = Appointment

class DoctorSchema(marsh.Schema):
    class Meta:
        fields=("DoctorId","username","email","password")
        model = Doctor
class AdminSchema(marsh.Schema):
    class Meta:
        fields=("AdminId","username","email","password")
        model = Doctor

class PatientSchema(marsh.Schema):
    class Meta:
        fields=("docname","date","symptom","status","phone","PatientId","username","name","email","address","password")
        model = Patient


class LabSchema(marsh.Schema):
    class Meta:
        fields=("labId","username","email","password")
        model = Laboratorist
class PharmaSchema(marsh.Schema):
    class Meta:
        fields=("pharmaId","username","email","password")
        model = Pharmasist
class OrderSchema(marsh.Schema):
    class Meta:
        fields=("orderId","orderName","description","orderFor")
        model = Order

