clean:
	rm -rf __pycache__
	rm -rf api/__pycache__

run:
	python api/api.py

run-uwsgi:
	uwsgi --socket 0.0.0.0:8000 --protocol=http -w wsgi:app

run-docker:
	docker run -d  --publish 8000:8000 sblancov84/helloworldflask:1.4
