from celery import Celery
import requests

config = {
    'backend': 'rpc://',
    'broker': 'amqp://localhost',
}

app = Celery('tasks', **config)

app.conf.update(
    task_serializer='pickle',
    accept_content=['pickle'],  # Ignore other content
    result_serializer='pickle',
)


@app.task
def sum(x, y):
    return x + y


@app.task(ignore_result=False)
def request(url):
    return requests.get(url)
