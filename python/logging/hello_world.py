import logging as log

config = {
    "filename": 'info.log',
    "filemode": 'w',
    "format": '%(asctime)s\t\t%(message)s',
    "level": log.INFO
}

log.basicConfig(**config)
log.info("Hello world")
