run:
	python api/api.py

run-uwsgi:
	uwsgi --socket 0.0.0.0:8000 --protocol=http -w wsgi:app