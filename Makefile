.SUFFIXES: .coffee .js
.PHONY: test doc
COFFEE = $(wildcard *.coffee)
JS = $(COFFEE:.coffee=.js)
all: $(JS)
.coffee.js:
	coffee -cm $^
clean:
	rm *.js *.map
test:
	mocha test
cov:
	istanbul.cmd cover node_modules\mocha\bin\_mocha
