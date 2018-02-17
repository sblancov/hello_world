clean:
	rm -rf __pycache__
	# find . -name __pycache__ -exec rm -rf {} \;

# This command probably needs root permission
start-rabbitmq:
	service rabbitmq-server start

# This command probably needs root permission
status-rabbitmq:
	service rabbitmq-server status

start-celery:
	celery worker -A tasks -l INFO
