from flask import Flask
def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='hospital',
    )
    from . import bp
    app.register_blueprint(bp)


    return app