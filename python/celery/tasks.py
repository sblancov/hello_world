from celery import Celery


app = Celery()


@app.task
def sum(x, y):
    print(x + y)
    return x + y
