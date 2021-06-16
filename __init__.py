from flask import Flask
from . import home

def Create_app():
    app = Flask(__name_, instance_relative_config=False)
    app.config.from_mapping(
        SECRET_KEY='hospital',
    )
    app.register_blueprint(home.bp)
    return app