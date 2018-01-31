FROM sblancov84/python3.5.4:2.1

EXPOSE 8000
WORKDIR /opt/hello_world

COPY api ./api
COPY wsgi.py .
COPY requirements/base.txt ./requirements.txt

RUN pip3 install -r requirements.txt

CMD [ "uwsgi", "--socket", "0.0.0.0:8000", "--protocol=http", "-w", "wsgi:app" ]
