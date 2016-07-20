import logging

class MyFilter(object):

    def __init__(self, level):
        self.__level = level

    def filter(self, logRecord):
        # https://docs.python.org/3/library/logging.html#logrecord-attributes
        return logRecord.levelno == self.__level

basic_config = {
    "level": logging.DEBUG,
    "format": '%(asctime)s %(name)-12s %(levelname)-8s %(message)s',
    "filename": 'log/debug.log',
    "filemode": 'w'
}
logging.basicConfig(**basic_config)

logging.info('Jackdaws love my big sphinx of quartz.')

console = logging.StreamHandler()
console.setLevel(logging.INFO)
formatter = logging.Formatter('%(name)-12s: %(levelname)-8s %(message)s')
console.setFormatter(formatter)

logger1 = logging.getLogger('myapp.area1')
logger2 = logging.getLogger('myapp.area2')
logger1.addHandler(console)
my_filter = MyFilter(logging.ERROR)
logger2.addFilter(my_filter)

logger1.debug('Quick zephyrs blow, vexing daft Jim.')
logger2.info('How quickly daft jumping zebras vex.')
logger1.warning('Jail zesty vixen who grabbed pay from quack.')
logger2.error('The five boxing wizards jump quickly.')