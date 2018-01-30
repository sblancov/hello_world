from flask import Flask
from flask_restful import Resource, Api


class HelloWorld(Resource):

    def get(self):
        return {
            'hello': 'world'
        }


app = Flask(__name__)
api = Api(app)
api.add_resource(HelloWorld, '/')


def main():
    app.run(debug=True)


if __name__ == '__main__':
    main()
