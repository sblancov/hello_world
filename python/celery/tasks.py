from celery import Celery


app = Celery('tasks', broker='amqp://localhost')


@app.task
def sum(x, y):
    return x + y
